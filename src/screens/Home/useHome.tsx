import React, { useState, useEffect } from "react";
import { IPokemonDTO } from "../../api/DTO/IPokemonDTO";
import { Result } from "../../api/DTO/IInitialResultDTO";
import axios from "axios";

export function useHome() {
  const [pokemonsList, setPokemonstList] = useState<Result[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonDTO>();
  const [requestError, setRequestError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

  const [searchPokemonValue, setSearchPokemonValue] = useState("");

  const baseUrl = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=20`;

  async function getPokemons() {
    if (loading) return;
    setLoading(true);
    setOffset(offset + 20);
    const response = await axios.get(baseUrl);

    const data = response.data.results.map((item: Result) => {
      return {
        name: item.name,
        url: item.url,
        id: item.url.replace(/[^a-zA-Z0-9 ]/g, "").slice(26),
      };
    });
    setPokemonstList([...pokemonsList, ...data]);

    setLoading(false);
  }

  async function searchPokemon() {
    const pokemonURL = `https://pokeapi.co/api/v2/pokemon/${searchPokemonValue.toLowerCase()}`;
    const response = await axios.get(pokemonURL);

    if (response.status === 404) {
      setRequestError(true);
    } else {
      setSelectedPokemon(response.data);
    }
  }

  useEffect(() => {
    getPokemons();
  }, []);

  useEffect(() => {
    if (!searchPokemonValue.trim()) {
      setSelectedPokemon(undefined);
      setLoading(true);
      setOffset(0);
      getPokemons();
      setLoading(false);
    }
  }, [searchPokemonValue]);

  return {
    selectedPokemon,
    setSelectedPokemon,
    getPokemons,
    pokemonsList,
    loading,
    searchPokemonValue,
    setSearchPokemonValue,
    searchPokemon,
    requestError,
    setRequestError,
  };
}

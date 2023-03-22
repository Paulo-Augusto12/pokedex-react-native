import React, { useState, useEffect } from "react";
import { IPokemonDTO } from "../../api/DTO/IPokemonDTO";
import { Result } from "../../api/DTO/IInitialResultDTO";
import axios from "axios";

export function useHome() {
  const [pokemonsList, setPokemonstList] = useState<Result[]>([]);
  const [selectedPokemon, setSelectedPokemon] = useState<IPokemonDTO>();
  const [loading, setLoading] = useState(false);
  const [offset, setOffset] = useState(0);

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

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    selectedPokemon,
    setSelectedPokemon,
    getPokemons,
    pokemonsList,
    loading,
  };
}

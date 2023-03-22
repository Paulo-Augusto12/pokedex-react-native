import React, { useState, useEffect } from "react";
import { IPokemonDTO } from "../../api/DTO/IPokemonDTO";
import axios from "axios";
import { Result } from "../../api/DTO/IInitialResultDTO";
export function useHome() {
  const [pokemons, setPokemons] = useState<IPokemonDTO[]>([]);
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
    setPokemonstList([...pokemonsList, ...response.data.results]);
    setLoading(false);
  }

  useEffect(() => {
    getPokemons();
  }, []);

  return {
    pokemons,
    selectedPokemon,
    setSelectedPokemon,
    getPokemons,
    pokemonsList,
    loading,
  };
}

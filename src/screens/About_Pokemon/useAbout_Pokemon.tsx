import React, { useState, useEffect } from "react";
import axios from "axios";
import { IPokemonDTO } from "../../api/DTO/IPokemonDTO";
import { useTheme } from "../../hook/useTheme";
export function useAboutPokemon() {
  const [selectedTag, setSelectedTag] = useState(1);
  const [pokemonData, setPokemonData] = useState<IPokemonDTO>();
  const [backgroundTypeColor, setBackgroundTypeColor] = useState({
    type: "",
    color: "",
    nameColor: "",
    nationalNumberColor: "",
  });

  const menuActionTags = [
    {
      tagName: "Abilities",
      id: 1,
    },
    {
      tagName: "Types",
      id: 2,
    },
    {
      tagName: "Stats",
      id: 3,
    },
    {
      tagName: "Moves",
      id: 4,
    },
    {
      tagName: "Details",
      id: 5,
    },
  ];
  const theme = useTheme();

  function getBackgroundImageColor() {
    if (pokemonData) {
      const pokemonType = pokemonData.types
        .map((type) => type.type.name)
        .shift();
      const color = theme.colorTypes
        .filter((a) => a.type === pokemonType)
        .shift();

      if (color) {
        setBackgroundTypeColor(color);
      }
    }
  }

  async function handleGetPokemonData(name: string) {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const response = await axios.get(baseUrl);
    setPokemonData(response.data);
  }

  useEffect(() => {
    getBackgroundImageColor();
  }, [pokemonData]);

  return {
    menuActionTags,
    selectedTag,
    setSelectedTag,
    handleGetPokemonData,
    pokemonData,
    setPokemonData,
    backgroundTypeColor,
    setBackgroundTypeColor,
  };
}

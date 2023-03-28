import React, { useState, useEffect } from "react";
import axios from "axios";
import { IPokemonDTO } from "../../api/DTO/IPokemonDTO";
import { useTheme } from "../../hook/useTheme";
import { IPokemonSpeciesDTO } from "../../api/DTO/IPokemonSpeciesDTO";
export function useAboutPokemon() {
  const [selectedTag, setSelectedTag] = useState(1);
  const [pokemonData, setPokemonData] = useState<IPokemonDTO>();
  const [pokemonSpeciesData, setPokemonSpeciesData] =
    useState<IPokemonSpeciesDTO>();
  const [flavorText, setFlavorText] = useState("");
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

  async function getPokemonSpeciesData() {
    if (pokemonData) {
      const baseUrl = `https://pokeapi.co/api/v2/pokemon-species/${pokemonData.id}/`;
      const response = await axios.get(baseUrl);
      if (response) {
        setPokemonSpeciesData(response.data);
      }
    }
  }

  function getFlavorText() {
    const language = pokemonSpeciesData?.flavor_text_entries.filter(
      (language) => language.language.name === "en"
    );

    if (language) {
      const text = language
        .map((a) =>
          a.flavor_text
            .replaceAll("\n", " ")
            .replaceAll("\f", " ")
            .toLowerCase()
        )
        .shift();
      setFlavorText(text as string);
    }
  }

  useEffect(() => {
    getBackgroundImageColor();
    getPokemonSpeciesData();
  }, [pokemonData]);

  useEffect(() => {
    if (pokemonSpeciesData !== undefined) {
      getFlavorText();
    }
  }, [pokemonSpeciesData]);

  return {
    menuActionTags,
    selectedTag,
    setSelectedTag,
    handleGetPokemonData,
    pokemonData,
    setPokemonData,
    backgroundTypeColor,
    setBackgroundTypeColor,
    pokemonSpeciesData,
    flavorText,
  };
}

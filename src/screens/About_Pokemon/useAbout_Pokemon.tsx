import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Ability, IPokemonDTO } from "../../api/DTO/IPokemonDTO";
import { useTheme } from "../../hook/useTheme";
import { IPokemonSpeciesDTO } from "../../api/DTO/IPokemonSpeciesDTO";
import { IPokemonAbilityDTO } from "../../api/DTO/IPokemonAbilityDTO";

export interface IPokemonAbilities {
  name: string;
  effect: string;
}
interface IPokemonType {
  name: string;
}
interface IPokemonData {
  name: string;
  id: number;
  abilities: IPokemonAbilities[];
  types: IPokemonType;
}
export function useAboutPokemon() {
  const [selectedTag, setSelectedTag] = useState(1);
  const [pokemonData, setPokemonData] = useState<IPokemonData>(
    {} as IPokemonData
  );
  const [pokemonSpeciesData, setPokemonSpeciesData] =
    useState<IPokemonSpeciesDTO>();
  const [abilitiesDescriptions, setAbilitiesDescriptions] = useState<
    IPokemonAbilityDTO[]
  >([]);
  const [abilitiesResponse, setAbilitiesResponse] = useState<Ability[]>([]);
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
      const pokemonType = pokemonData?.types?.name;
      const color = theme.colorTypes
        .filter((a) => a.type === pokemonType)
        .shift();

      if (color) {
        setBackgroundTypeColor(color);
      }
    }
  }
  function IPokemonAbilitiesDTOtoIPokemonAbilityData(
    DTO: IPokemonAbilityDTO[]
  ): IPokemonAbilities[] {
    return DTO.map((ability) => {
      return {
        effect: ability.effect_entries.find(
          (language) => language.language.name === "en"
        )?.effect as string,
        name: ability.name,
      };
    });
  }

  function IPokemonDTOtoIPokemonData(
    DTO: IPokemonDTO,
    Abilities: IPokemonAbilityDTO[]
  ): IPokemonData {
    return {
      name: DTO.name,
      id: DTO.id,
      types: {
        name: DTO.types[0].type.name,
      },
      abilities: IPokemonAbilitiesDTOtoIPokemonAbilityData(Abilities),
    };
  }

  async function handleGetPokemonData(name: string) {
    const baseUrl = `https://pokeapi.co/api/v2/pokemon/${name}`;
    try {
      const response: AxiosResponse<IPokemonDTO> = await axios.get(baseUrl);
      let abilitiesResponse: IPokemonAbilityDTO[] = [];
      abilitiesResponse = await axios.all(
        response.data?.abilities.map(async (ability) => {
          const response = await axios.get(ability.ability.url);
          return response.data;
        })
      );
      const a = IPokemonDTOtoIPokemonData(response.data, abilitiesResponse);
      setPokemonData(a);
    } catch (err) {
      console.log(err);
    }
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
  }, [pokemonData?.name]);

  useEffect(() => {
    if (pokemonSpeciesData !== undefined) {
      getFlavorText();
    }
  }, [pokemonSpeciesData?.flavor_text_entries]);

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
    abilitiesDescriptions,
    setAbilitiesDescriptions,
  };
}

import React, { useState, useEffect } from "react";
import axios, { AxiosResponse } from "axios";
import { Ability, IPokemonDTO } from "../../api/DTO/IPokemonDTO";
import { useTheme } from "../../hook/useTheme";
import { IPokemonSpeciesDTO } from "../../api/DTO/IPokemonSpeciesDTO";
import { IPokemonAbilityDTO } from "../../api/DTO/IPokemonAbilityDTO";
import { Result } from "../../api/DTO/IInitialResultDTO";

export interface IPokemonAbilities {
  name: string;
  effect: string;
}
export interface IPokemonType {
  name: string;
  url: string;
  // pokemons: Result[];
}
interface IPokemonData {
  name: string;
  id: number;
  abilities: IPokemonAbilities[];
  types: IPokemonType[];
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
      const pokemonType = pokemonData.types?.map((type) => type.name);
      if (pokemonType) {
        const color = theme.colorTypes
          .filter((a) => a.type === pokemonType[0])
          .shift();

        if (color) {
          setBackgroundTypeColor(color);
        }
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
      abilities: IPokemonAbilitiesDTOtoIPokemonAbilityData(Abilities),
      types: DTO.types.map((type) => type.type),
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
  }, [pokemonData?.id]);

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

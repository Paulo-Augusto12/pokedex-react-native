import React from "react";

export function useTheme() {
  const colors = {
    BACKGROUND: "E9ECEF",
    TITLE: "#343A40",
    SUBTITLE: "#343A40",
    LIGHT_GRAY: "#CED4DA",
    HARD_GRAY: "#7B7B7B",
    WHITE: "#FFFF",
  };
  const fontSize = {
    large: 32,
    default: 13,
    nationalNumber: 26,
  };
  const colorTypes = {
    normal: "#D3D3D3",
    fighting: "#ffb703",
    flying: "#8ecae6",
    poison: "#0f4c5c",
    ground: "#9d0208",
    rock: "#6f1d1b",
    bug: "#e0c045",
    ghost: "#191528",
    steel: "#a4c3b2",
    fire: "#c1121f",
    water: "#219ebc",
    grass: "#55a630",
    electric: "#ffff3f",
    psychic: "#bde0fe",
    ice: "#7bdff2",
    dragon: "#08415c",
    dark: "#1b1f22",
    fairy: "#ffafcc",
    unknown: "#1b2021",
    shadow: "#291720",
  };

  return {
    colors,
    fontSize,
    colorTypes,
  };
}

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
  const colorTypes = [
    {
      type: "normal",
      color: "#D3D3D3",
    },
    {
      type: "fighting",
      color: "#ffb703",
    },
    {
      type: "flying",
      color: "#8ecae6",
    },
    {
      type: "poison",
      color: "#0f4c5c",
    },
    {
      type: "ground",
      color: "#9d0208",
    },
    {
      type: "rock",
      color: "#6f1d1b",
    },
    {
      type: "bug",
      color: "#e0c045",
    },
    {
      type: "ghost",
      color: "#191528",
    },
    {
      type: "steel",
      color: "#a4c3b2",
    },
    {
      type: "fire",
      color: "#c1121f",
    },
    {
      type: "water",
      color: "#219ebc",
    },
    {
      type: "grass",
      color: "#55a630",
    },
    {
      type: "electric",
      color: "#ffff3f",
    },
    {
      type: "psychic",
      color: "#bde0fe",
    },
    {
      type: "ice",
      color: "#7bdff2",
    },
    {
      type: "dragon",
      color: "#08415c",
    },
    {
      type: "dark",
      color: "#1b1f22",
    },
    {
      type: "fairy",
      color: "#ffafcc",
    },
    {
      type: "unknown",
      color: "#1b2021",
    },
    {
      type: "shadow",
      color: "#291720",
    },
  ];

  return {
    colors,
    fontSize,
    colorTypes,
  };
}

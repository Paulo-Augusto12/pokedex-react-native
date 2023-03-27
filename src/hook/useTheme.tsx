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
      nameColor: "#343A40",
      nationalNumberColor: "#6C757D",
    },
    {
      type: "fighting",
      color: "#ffb703",
      nameColor: "#343A40",
      nationalNumberColor: "#6C757D",
    },
    {
      type: "flying",
      color: "#8ecae6",
      nameColor: "#343A40",
      nationalNumberColor: "#6C757D",
    },
    {
      type: "poison",
      color: "#0f4c5c",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
    {
      type: "ground",
      color: "#9d0208",
      nameColor: "",
      nationalNumberColor: "",
    },
    {
      type: "rock",
      color: "#6f1d1b",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
    {
      type: "bug",
      color: "#e0c045",
      nameColor: "#343A40",
      nationalNumberColor: "#6C757D",
    },
    {
      type: "ghost",
      color: "#191528",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
    {
      type: "steel",
      color: "#a4c3b2",
      nameColor: "#343A40",
      nationalNumberColor: "#6C757D",
    },
    {
      type: "fire",
      color: "#c1121f",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
    {
      type: "water",
      color: "#219ebc",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
    {
      type: "grass",
      color: "#55a630",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
    {
      type: "electric",
      color: "#ffff3f",
      nameColor: "#343A40",
      nationalNumberColor: "#6C757D",
    },
    {
      type: "psychic",
      color: "#bde0fe",
      nameColor: "#343A40",
      nationalNumberColor: "#6C757D",
    },
    {
      type: "ice",
      color: "#7bdff2",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
    {
      type: "dragon",
      color: "#08415c",
      nameColor: "#343A40",
      nationalNumberColor: "#6C757D",
    },
    {
      type: "dark",
      color: "#1b1f22",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
    {
      type: "fairy",
      color: "#ffafcc",
      nameColor: "#343A40",
      nationalNumberColor: "#6C757D",
    },
    {
      type: "unknown",
      color: "#1b2021",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
    {
      type: "shadow",
      color: "#291720",
      nameColor: "#DAE2EA",
      nationalNumberColor: "#B8B9BB",
    },
  ];

  return {
    colors,
    fontSize,
    colorTypes,
  };
}

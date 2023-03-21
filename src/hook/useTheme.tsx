import React from "react";

export function useTheme() {
  const colors = {
    TITLE: "#343A40",
    SUBTITLE: "#343A40",
    LIGHT_GRAY: "#CED4DA",
    HARD_GRAY: "#7B7B7B",
    WHITE: "#FFFF",
  };
  const fontSize = {
    large: 32,
    default: 13,
  };

  return {
    colors,
    fontSize,
  };
}

import { DefaultTheme as NavigationDefaultTheme } from "@react-navigation/native";
import { DefaultTheme as PaperDefaultTheme } from "react-native-paper";

export const AppDefaultTheme = {
  ...NavigationDefaultTheme,
  ...PaperDefaultTheme,
  roundness: 4,
  colors: {
    ...NavigationDefaultTheme.colors,
    ...PaperDefaultTheme.colors,
    primary: "#fdd835",
    accent: "#f57c00",
    background: "#ffffff",
    surface: "#ffffff",
    black: "#000000",
    white: "#ffffff",
    text: "#000000",
    greyscale: "#e5e5e3",
    greyscaleDark: "#e9e9e9",
    greyscaleLight: "#f9f9f9",
    diztroBlue: "#0080ff",
    diztroBlueDark: "#0055cb",
    diztroBlueLight: "#69afff",
    diztroGreen: "#00bf00",
    diztroGreenDark: "#008d00",
    diztroGreenLight: "#5ff349",
    diztroOrange: "#ff8000",
    diztroOrangeDark: "#c55100",
    diztroOrangeLight: "#ffb143",
    diztroPink: "#ff80ff",
    diztroPinkDark: "#ca4dcb",
    diztroPinkLight: "#ffb3ff",
    diztroPurple: "#8c00bf",
    diztroPurpleDark: "#58008e",
    diztroPurpleLight: "#c149f3",
    diztroYellow: "#ffff00",
    diztroYellowDark: "#c7cc00",
    diztroYellowLight: "#ffff5a",
  },
};

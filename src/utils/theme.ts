// theme.js
import { extendTheme } from "native-base";

export const THEME = extendTheme({
    colors: {
        green: {
            dark: "#639339",
            mid: "#CBE4B4",
            light: "#E5F0DB",
        },
        gray: {
            1: "#1B1D1E",
            2: "#333638",
            3: "#5C6265",
            4: "#B9BBBC",
            5: "#DDDEDF",
            6: "#EFF0F0",
            7: "#FAFAFA",
        },
        white: "#FFFFFF",
        red: {
            dark: "#BF3B44",
            mid: "#F3BABD",
            light: "#F4E6E7",
        },
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },
    sizes: {
        14: 56,
        33: 148,
    },
});

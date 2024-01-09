import {createTheme} from "@material-ui/core";
import {Colors} from "./colors";
import {decl} from "postcss";
import {PaletteColor, PaletteColorOptions} from "@material-ui/core/styles/createPalette";

declare module '@material-ui/core/styles/createPalette' {
    interface Palette {
        // Label
        labelPrimary: PaletteColor,
        labelSecondary: PaletteColor,
        labelTertiary: PaletteColor,

        // Background
        backgroundPrimary: PaletteColor,
        backgroundSecondary: PaletteColor,
        backgroundTertiary: PaletteColor,
    }
    interface PaletteOptions {
        // Label
        labelPrimary?: PaletteColorOptions,
        labelSecondary?: PaletteColorOptions,
        labelTertiary?: PaletteColorOptions,

        // Background
        backgroundPrimary?: PaletteColorOptions,
        backgroundSecondary?: PaletteColorOptions,
        backgroundTertiary?: PaletteColorOptions,
    }
}

const { palette } = createTheme();
const theme = createTheme({
    palette: {
        background: {
            default: Colors.backgroundPrimary
        },
        text: {
            primary: Colors.labelPrimary
        },
        primary: {
            main: Colors.backgroundSecondary,
            contrastText: Colors.labelPrimary,
        },
        secondary: {
            main: Colors.labelSecondary,
            contrastText: Colors.backgroundSecondary,
        },
        // Label
        labelPrimary: palette.augmentColor({
            main: Colors.labelPrimary,
        }),
        labelSecondary: palette.augmentColor({
            main: Colors.labelSecondary
        }),
        labelTertiary: palette.augmentColor({
            main: Colors.labelTertiary
        }),
        // Background
        backgroundPrimary: palette.augmentColor({
            main: Colors.backgroundPrimary
        }),
        backgroundSecondary: palette.augmentColor({
            main: Colors.backgroundSecondary
        }),
        backgroundTertiary: palette.augmentColor({
            main: Colors.backgroundTertiary
        }),
        error: {
            main: Colors.error
        },
        success: {
            main: Colors.success
        },
    },
    typography: {
        h1: {

        },
        h2: {

        },
        h3: {

        },
        h5: {

        },
        h6: {

        },
        subtitle1: {

        },
        body1: {

        },
        body2: {

        },
    },
})

export default theme
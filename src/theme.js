import { createTheme } from "@mui/material/styles";

export const myTheme = createTheme({
    palette: {
        primary: {
            main: "#ffffff",
        },
        secondary: {
            main: "#D8D8D8"
        },
        info: {
            main: "#0166FF"
        },
        success: {
            main: "#02FF49"
        },
        chSuccess: {
            main: "#03F1A9"
        },
    },

    typography: {
        fontFamily: "Poppins",
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },

    components: {
        MuiTypography: {
            defaultProps: {
                variantMapping: {
                    h1: 'h1',
                    h2: 'h2',
                    h3: 'h3',
                    h4: 'h4',
                    h5: 'h5',
                    h6: 'h6',
                    body2: 'span',
                }
            },
        },

        MuiButton: {
            defaultProps: {
                sx: {
                    margin: 1,
                },
            }
        },

        MuiPaper: {
            styleOverrides: {
                root: {
                    background: "#000000"
                }
            },
            defaultProps: {
                elevation: 0
            }
        },
    },

    overrides: {
        MuiInput: {
            input: {
                "&::placeholder": {
                    color: "white",
                },
                color: "white",
            }
        },
    }

});

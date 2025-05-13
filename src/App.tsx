import './App.css'
import {Home} from "./components/Home.tsx";
import {createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#c4cc71', // Green color from the image
        },
        background: {
            default: '#000000',
            paper: '#171515',
        },
    },
    typography: {
        fontFamily: "'Poppins', 'Roboto', 'Arial', sans-serif",
        h1: {
            fontWeight: 700,
            fontSize: '3.5rem',
        },
        h2: {
            fontWeight: 600,
            fontSize: '2rem',
        },
    },
    components: {
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: 4,
                    fontWeight: 500,
                    textTransform: 'uppercase',
                    padding: '4px',
                },
            },
        },
    },
});
function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Home />
        </ThemeProvider>
    )
}

export default App

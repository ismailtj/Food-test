import Header from "./components/header/index";
import Body from "./components/body/Body";

// import { ThemeProvider, createTheme } from "@mui/material/styles";

// const darkTheme = createTheme({
//   palette: {
//     mode: "dark",
//     // primary: {
//     //   // main: "#1976d2",
//     // },
//   },
// });

function App() {
  return (
    // <ThemeProvider theme={darkTheme}>
    <div className="App">
      <Header />
      <Body />
    </div>
    // </ThemeProvider>
  );
}

export default App;


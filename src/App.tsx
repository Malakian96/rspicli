import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./App.scss";
import Button from "@mui/material/Button";
import { useCallback } from "react";
const { spawn, exec } = require("child_process");

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {

  const execute = useCallback(()=>{
    exec("ls", (err: any, stdout: any, stderr: any) => {
      console.log(stdout);
    });
    exec("cd src", (err: any, stdout: any, stderr: any) => {
      console.log(stdout);
      console.log(stderr);
    });
    exec("ls", (err: any, stdout: any, stderr: any) => {
      console.log(stdout);
    });
  },[])

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Button onClick={execute} variant="outlined">wiwi</Button>
    </ThemeProvider>
  );
}

export default App;

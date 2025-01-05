import { ThemeProvider } from "@mui/material/styles";
import "./App.scss";
import { lightTheme } from "./theme";

import { RouterProvider } from "react-router-dom";
import { router } from "./router";
import AxiosInterceptor from "@utils/axios-interceptor";

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AxiosInterceptor />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;

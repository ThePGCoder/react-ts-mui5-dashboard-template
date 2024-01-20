import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Joist from "./pages/joist";
import Lintel from "./pages/lintel";
import Rafter from "./pages/rafter";
import Page404 from "./pages/page404";
import Layout from "./layout";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { useThemeContext } from "./theme/ThemeContextProvider";
import { useState, useEffect, createContext } from "react";
import About from "./pages/about";

export const ActiveRouteContext = createContext({
  activeRoute: "",
  changeActiveRoute: (route: string | null) => {
    route;
  },
});

function App() {
  const { theme } = useThemeContext();
  const [activeRoute, setActiveRoute] = useState<any>(
    localStorage.getItem("route")
  );
  const changeActiveRoute = (route: string | null) => {
    setActiveRoute(route);
  };

  useEffect(() => {
    console.log(activeRoute);
  }, []);

  return (
    <>
      <ThemeProvider theme={theme}>
        <ActiveRouteContext.Provider value={{ activeRoute, changeActiveRoute }}>
          <CssBaseline />
          <BrowserRouter>
            <Layout>
              <Routes>
                <Route path="/" element={<Navigate to="/home" />} />
                <Route path="/home" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/lintel" element={<Lintel />} />
                <Route path="/rafter" element={<Rafter />} />
                <Route path="/joist" element={<Joist />} />
                <Route path="*" element={<Page404 />} />
              </Routes>
            </Layout>
          </BrowserRouter>
        </ActiveRouteContext.Provider>
      </ThemeProvider>
    </>
  );
}

export default App;

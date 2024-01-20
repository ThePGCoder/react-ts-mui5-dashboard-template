import { Box, TextField } from "@mui/material";
import React, { useContext, useEffect } from "react";
import { ActiveRouteContext } from "../../App";

interface HomeProps {}

const Home: React.FC<HomeProps> = () => {

  const { changeActiveRoute } = useContext(ActiveRouteContext);
  
    useEffect(() => {
        localStorage.setItem("route", "Home");
        changeActiveRoute("Home");
        
      }, []);
  return <Box display="flex" width="100%" height="93vh" alignItems="center" justifyContent="center">Home</Box>;
};

export default Home;

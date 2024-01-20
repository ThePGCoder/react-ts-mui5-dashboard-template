import { Box, Drawer } from "@mui/material";
import React from "react";
import NavMenu from "./nav-menu/NavMenu";
import { useThemeContext } from "../theme/ThemeContextProvider";

interface MDrawerProps {
  drawer: any;
  setDrawer: any;
}

const MobileDrawer: React.FC<MDrawerProps> = ({ drawer, setDrawer }) => {
  const { mode } = useThemeContext();
  return (
    <>
      <Drawer
        variant="temporary"
        open={drawer}
        onClose={() => {
          setDrawer(false);
        }}
        sx={{
          display: { xs: "block", sm: "block", md: "none" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 320 },
        }}
      >
        <Box padding={1} bgcolor={mode === "dark" ? "#242424" : "white"} height="100%">
        <h3>LOGO</h3>
        <NavMenu/>
        </Box>
      </Drawer>
    </>
  );
};

export default MobileDrawer;

import React from "react";
import { Box, Drawer } from "@mui/material";
import NavMenu from "./nav-menu/NavMenu";

interface SidebarProps {}

const Sidebar: React.FC<SidebarProps> = () => {
  return (
    <>
      <Drawer
        variant="permanent"
        sx={{
          display: { xs: "none", sm: "none", md: "block" },
          "& .MuiDrawer-paper": { boxSizing: "border-box", width: 320 },
        }}
        open
      >
        <Box padding={1}>
          <h3>LOGO</h3>
          <NavMenu />
        </Box>
      </Drawer>
    </>
  );
};

export default Sidebar;

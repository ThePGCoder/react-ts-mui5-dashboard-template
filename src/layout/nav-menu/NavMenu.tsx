import React from "react";
import { navItemData } from "./data/NavItemData";
import NavItem from "./components/NavItem";
import { Box } from "@mui/material";

interface NavMenuProps {}

const NavMenu: React.FC<NavMenuProps> = () => {

  return (
    <>
      {navItemData.map((item, index) => (
        <Box key={index} margin={1.5}>
        <NavItem item={item}/>
        </Box>
      ))}
    </>
  );
};

export default NavMenu;

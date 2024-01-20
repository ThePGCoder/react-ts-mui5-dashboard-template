import React, { useContext, useState } from "react";
import { Icon } from "@iconify/react";
import {
  Box,
  Collapse,
  IconButton,
} from "@mui/material";
import { ActiveRouteContext } from "../../../App";
import { useNavigate } from "react-router-dom";
import { useThemeContext } from "../../../theme/ThemeContextProvider";

interface NavItemProps {
  item: any;
}

const NavItem: React.FC<NavItemProps> = ({ item }) => {
  const { activeRoute } = useContext(ActiveRouteContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = useState<boolean>(false);
  const { mode } = useThemeContext();

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        height="35px"
        borderRadius="4px"
        justifyContent="space-between"
        sx={{
          bgcolor: activeRoute === item.title ? "primary.main" : "",
          color: activeRoute === item.title ? "white" : "",
          boxShadow:
            activeRoute === item.title && mode === "light"
              ? "2px 2px 5px #646464"
              : "" || (activeRoute === item.title && mode === "dark")
              ? "-0.5px -0.5px 2px 2px #2196f3"
              : "",

          "&:hover":
            mode === "dark"
              ? { boxShadow: "-0.5px -0.5px 2px 2px #2196f3" }
              : { boxShadow: "2px 2px 5px #646464" },
        }}
        onClick={() => {navigate(item.link); setExpanded(!expanded)}}
      >
        <Box display="flex" alignItems="center">
          <Box width={5} />
          {activeRoute != item.title && <Icon icon={item.icon} width={22} color="#2196f3"/>}
          {activeRoute === item.title && <Icon icon={item.icon} width={22} color="white"/>}
          <Box width={5} />
          {item.title}
        </Box>
        {item.dropdown && (
          <IconButton >
            <Icon icon="mdi:chevron-down" />
          </IconButton>
        )}
      </Box>
      <Box>
        {item.subMenu?.map((item: any, index: any) => (
          <Collapse in={expanded} key={index}>
            <Box
              display="flex"
              alignItems="center"
              height="35px"
              borderRadius="4px"
              marginTop="12px"
              marginLeft="12px"
              marginRight="12px"
              color="white"
              sx={{
                bgcolor: activeRoute === item.title ? "primary.main" : "",
                color: activeRoute === item.title ? "white" : "",
                "&:hover":
                  mode === "dark"
                    ? { boxShadow: "-0.5px -0.5px 2px 2px #2196f3" }
                    : { boxShadow: "2px 2px 5px #646464" },
              }}
            >
                <Box width={5} />
              {activeRoute != item.title && <Icon icon={item.icon} width={22} color="#2196f3"/>}
          {activeRoute === item.title && <Icon icon={item.icon} width={22} color="white"/>}
          <Box width={5} />
              {item.title}
            </Box>
          </Collapse>
        ))}
      </Box>
    </>
  );
};

export default NavItem;

import { Box, IconButton } from "@mui/material";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { Icon } from "@iconify/react";
import { useThemeContext } from "../theme/ThemeContextProvider";

const NightModeToggle = () => {
  const { mode, toggleColorMode } = useThemeContext();

  return (
    <>
      <IconButton sx={{ ml: 1 }} onClick={toggleColorMode} color="inherit">
        {mode === "dark" ? (
          <Icon icon="oi:sun" height={20}/>
        ) : (
          <Icon icon="oi:moon" height={18}/>
        )}
      </IconButton>
    </>
  );
};

export default NightModeToggle;

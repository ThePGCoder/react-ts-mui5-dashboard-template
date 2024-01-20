import { IconButton } from "@mui/material";
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

import { Box, Divider, IconButton } from "@mui/material";
import NightModeToggle from "../components/NightModeToggle";
import { Icon } from "@iconify/react";
interface HeaderProps {
  toggleDrawer: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <>
      <Box
        width="calc(100%-320px)"
        height={50}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          marginLeft: { xs: 0, sm: 0, md: "320px" },
          justifyContent: {
            xs: "space-between",
            sm: "space-between",
            md: "flex-end",
          },
        }}
      >
        <IconButton color="inherit" onClick={toggleDrawer} sx={{ display: { md: "none" } }}>
          <Icon icon="ci:menu-alt-01" height={26} />
        </IconButton>
        <Box sx={{ display: { md: "none" } }}>Logo</Box>
        <NightModeToggle />
      </Box>
      <Divider />
    </>
  );
};

export default Header;

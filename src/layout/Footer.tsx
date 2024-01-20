import React from "react";
import { Box, Divider } from "@mui/material";

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <>
      <Box
        width="100%"
        height={50}
        position="fixed"
        bottom={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        
        sx={{
          marginLeft: { xs: 0, sm: 0, md: "320px" },
          width: { xs: "100%", sm: "100%", md: "calc(100% - 320px)" },
        }}
      >
        Footer
      </Box>
    </>
  );
};

export default Footer;

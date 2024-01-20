import React, { ReactNode, useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import Drawer from "./Drawer";
interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [drawer, setDrawer] = useState(false);

  const toggleDrawer = () => {
    setDrawer(!drawer);
    console.log(drawer);
    console.log("hello");
  };

  return (
    <>
      <Header toggleDrawer={toggleDrawer} />
      <Sidebar />
      <Box sx={{marginLeft: {sm: "none", md: "320px"}}}>{children}</Box>
      <Drawer drawer={drawer} setDrawer={setDrawer} />
      <Footer />
    </>
  );
};

export default Layout;

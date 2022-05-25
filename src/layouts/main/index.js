import { Link as ScrollLink } from "react-scroll";
import { useLocation, Outlet } from "react-router-dom";
// material
import { Box, Link, Container, Typography } from "@mui/material";
// components
import Logo from "../../components/Logo";
//
import MainNavbar from "./MainNavbar";
import MainFooter from "./MainFooter";

// ----------------------------------------------------------------------

export default function MainLayout() {
  const { pathname } = useLocation();
  const isHome = pathname === "/";
  const isMint = pathname === "/mint_skypunks";

  return (
    <>
      {!isMint && <MainNavbar />}
      <div>
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
}

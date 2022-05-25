import { useCallback } from "react";
import { Link as RouterLink, useLocation, useNavigate } from "react-router-dom";
// material
import { styled } from "@mui/material/styles";
import { Box, Button, AppBar, Toolbar, Container, Hidden, Stack } from "@mui/material";
// hooks
import useOffSetTop from "../../hooks/useOffSetTop";
// components
import Logo from "../../components/Logo";
import Label from "../../components/Label";

import ConnectWalletButton from "components/DappComponents/ConnectWalletButton";
//
import MenuDesktop from "./MenuDesktop";
import MenuMobile from "./MenuMobile";
import navConfig from "./MenuConfig";
import MContainer from "components/MContainer";

// ----------------------------------------------------------------------

const APP_BAR_MOBILE = 52;
const APP_BAR_DESKTOP = 64;

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  height: APP_BAR_MOBILE,
  transition: theme.transitions.create(["height", "background-color"], {
    easing: theme.transitions.easing.easeInOut,
    duration: theme.transitions.duration.shorter
  }),
  [theme.breakpoints.up("md")]: {
    height: APP_BAR_DESKTOP
  }
}));

// ----------------------------------------------------------------------

export default function MainNavbar() {
  const isOffset = useOffSetTop(100);
  const { pathname } = useLocation();
  const isHome = pathname === "/";

  const navigate = useNavigate();
  const handleOnClick = useCallback(() => navigate('/mint_skypunks', {replace: true}), [navigate]);
  return (
    <>
      <AppBar sx={{ boxShadow: 0, bgcolor: "transparent", backgroundImage: "none" }}>
        <ToolbarStyle
          disableGutters
          sx={{
            ...(isOffset && {
              bgcolor: "background.default",
              height: APP_BAR_DESKTOP
            })
          }}
        >
          <MContainer>
            <Stack direction="row" alignItems="center" justifyContent="space-between">
              <Box component={RouterLink} to="/" sx={{ mr: { lg: 14, md: 6 } }}>
                <Logo />
              </Box>

              <Hidden mdDown>
                <MenuDesktop isOffset={isOffset} isHome={isHome} navConfig={navConfig} />
              </Hidden>

              <Box sx={{ flexGrow: 1 }} />
              <Hidden mdDown>
                <Button onClick={handleOnClick} variant="contained" color="primary" href="" target="_blank" sx={{ width: 125, height: 40, borderRadius: "4px" }}>
                  Mint Now
                </Button>
              </Hidden>

              <Hidden mdUp>
                <MenuMobile navConfig={navConfig} />
              </Hidden>
            </Stack>
          </MContainer>
        </ToolbarStyle>
      </AppBar>
      <Box sx={{ height: APP_BAR_DESKTOP }}></Box>
    </>
  );
}

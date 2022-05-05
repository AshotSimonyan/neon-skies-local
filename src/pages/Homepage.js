// material
import { Stack, Box, Typography, Button, Grid, Hidden } from "@mui/material";
// import trendingUpFill from "@mui/icons-material/home"
// components
import MContainer from "components/MContainer";
import SkyPunkNfts from "./Homepage/SkyPunkNfts";
import RewardCoinSwap from "./Homepage/RewardCoinSwap";
import CoreTeam from "./Homepage/CoreTeam";
import Roadmap from "./Homepage/Roadmap";
import LandOwnership from "./Homepage/LandOwnership";
import MainGameElements from "./Homepage/MainGameElements";

// ----------------------------------------------------------------------

export default function Homepage() {
  return (
    <Box sx={{ position: "relative", width: 1 }}>
      <Hidden smDown>
        <Box component="img" src="/images/neon_skies.png" sx={{ position: "absolute", right: 0, top: -64, width: 1, maxWidth: "1184px" }} />
      </Hidden>
      <MContainer id="home" sx={{ position: "relative", pt: { lg: 13, md: 13, sm: 5, xs: 3 } }}>
        <Grid container>
          <Grid item lg={5} sm={6} xs={12}>
            <Typography variant="h1">NEON SKIES</Typography>
            <Typography variant="h6" color="primary" sx={{ mt: 1, letterSpacing: "3px !important" }}>
              DEFI NFT GAME ON POLYGON BLOCKCHAIN
            </Typography>
            <Typography sx={{ mt: 2 }}>
              <b>The year is 2199.</b> After World War Terminus and the subsequent fall of federal governments, humanity endured the rapid acceleration of climate change and collapsing social order.
              With the aid of the Neon Skies Council, operatives in the RAIN District deploy weather drones that drop explosive Neon Ice capsules into the sky to eco-engineer the weather. You can see
              these explosions during the day; however, they're incredibly bright and vivid at night, resulting in... Neon Skies.
            </Typography>
            <Stack direction="row" spacing={3} sx={{ mt: 5 }}>
              <Button variant="contained" color="primary" href="/Litepaper.pdf" target="_blank" sx={{ width: 128, height: 40, borderRadius: "4px" }}>
                Read Litepaper
              </Button>
              <Button
                variant="contained"
                href="https://discord.com/invite/Xv8ZEff4vW"
                target="_blank"
                sx={{ width: 128, height: 40, background: "#7289da", "&:hover": { background: "#7289da" }, borderRadius: "4px" }}
              >
                Join Discord
              </Button>
            </Stack>
          </Grid>
        </Grid>
      </MContainer>
      <Hidden smUp>
        <Box component="img" src="/images/neon_skies_mobile.png" sx={{ width: 1, mt: -15 }} />
      </Hidden>

      <SkyPunkNfts />
      <LandOwnership />
      <MainGameElements />

      <MContainer id="tokenflow" sx={{ position: "relative", pt: 15 }}>
        <Typography variant="h2" align="center">
          <Typography component="span" variant="h2" color="primary">
            RAIN GAME{" "}
          </Typography>
          TOKEN FLOW
        </Typography>
        <Typography align="center" sx={{ mt: 2, mb: 4 }}>
          Neon Skies “RAIN Game” is a decentralized play-to-earn NFT game built on the Polygon blockchain. <br /> Polygon’s native $USDC is used to mint, buy, and sell all NFT game elements (unless
          otherwise noted). <br /> Players are rewarded in $RAIN (an in-game, non-token currency) as part of Neon Skies's innovative tokenless model.
        </Typography>
        <Box component="img" src="/images/token-flow.png" sx={{ width: 1 }} />
      </MContainer>

      <RewardCoinSwap />
      {/* <TokenDistribution /> */}
      {/* <Tokenomics /> */}

      {/* <IcoFundRaiser /> */}

      <Roadmap />
      <CoreTeam />
    </Box>
  );
}

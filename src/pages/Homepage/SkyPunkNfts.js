// material
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";

// ----------------------------------------------------------------------
const SkyPunks = [{ title: "geldoth" }, { title: "oscom" }, { title: "rymatori" }, { title: "broshfire" }, { title: "genoveriseth" }];
export default function Homepage() {
  return (
    <MContainer id="skypunk" sx={{ position: "relative", pt: 15 }}>
      <Typography variant="h2" align="center" sx={{}}>
        SKYPUNK LEGACY{" "}
        <Typography component="span" variant="h2" color="primary">
          NFTS
        </Typography>
      </Typography>
      <Typography align="center" color="white" sx={{ position: "relative", mt: 1, mb: 4 }}>
        SkyPunks were the first humans who attempted to rebuild civilization around the revolutionary Neon 
        <br /> Ice technology. Generations of varied customs, traditions, styles and political beliefs 
        <br /> fractured the SkyPunks into the five distinct factions we know today --but these early elders are long gone.
        <br /> They are the precursors of our new world, forever imprinted on our history in NFT form on the Polygon blockchain. Only 2000 exist.
        <br /> We call them: SkyPunk Legacy.
      </Typography>
      <Stack direction="row" justifyContent="center" sx={{ mb: 3 }} flexWrap="wrap">
        {SkyPunks.map((item, index) => (
          <Stack alignItems="center" spacing={2} sx={{ m: 3, cursor: "pointer", transition: "all 0.2s", "&:hover": { "& span, h6": { color: "#DA1FA2" } } }}>
            <SvgIconStyle src={`/images/icons/${item.title}.png`} sx={{ width: 38, height: 38, color: "#7C8998" }} />
            <Typography variant="h6" color="#7C8998" sx={{ textTransform: "uppercase" }}>
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Grid container alignItems="center" rowSpacing={5}>
        <Grid item md={7} sm={6}>
          <Stack direction={{ md: "row-reverse", xs: "column" }} sx={{ position: "relative", height: 1 }} alignItems="center" justifyContent="space-between">
            <Box component="img" src="/images/cyber_bg.png" sx={{ position: "absolute", width: { md: "initial", sm: "120%", xs: 1 }, top: 0, left: 0 }} />
            <Box component="img" src="/images/cyber11.png" sx={{ width: { lg: 1, xs: 0.8 }, position: "relative" }} />
            {/* <Box sx={{ width: 1, height: 460, background: "linear-gradient(180deg, rgba(1, 16, 47, 0) 70%,  #090E2F 93.75%), url(/images/cyber11.png)", backgroundSize: '100%', position: "relative" }} /> */}

            <Stack spacing={2} direction={{ md: "column", xs: "row" }} sx={{ position: "relative" }}>
              {[...Array(4)].map((item, index) => (
                <Box
                  component="img"
                  src={`/images/cyber${index + 1}.png`}
                  sx={{ width: 78, height: 78, cursor: "pointer", borderRadius: "50%", p: 1, transition: "all 0.2s", border: "2px solid transparent", "&:hover": { border: "2px solid #DA1FA2" } }}
                />
              ))}
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={5} sm={6}>
          <Stack sx={{ position: "relative" }}>
            <Typography variant="h2">GENOVERISETH</Typography>
            <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
              Mint coming soon ($USDC)
            </Typography>
            <Typography sx={{ mt: 2 }}>
              After the War and the historic discovery of Neon Ice, those who would eventually form the SkyPunk Legacy faction GENOVERISETH responded with practicality and efficiency—organizing quickly to maximize the benefits and reach of the world-changing technology. To this day, the name Genoveriseth evokes a sense of reassuring pragmatism.
              <br />
              <br /> Genoveriseth motto: Our future needs us today.
            </Typography>
            <Button variant="contained" color="primary" href="" target="_blank" sx={{ width: 205, height: 40, borderRadius: "4px", mt: 5 }}>
              Purchase coming soon
            </Button>
          </Stack>
        </Grid>
      </Grid>
    </MContainer>
  );
}

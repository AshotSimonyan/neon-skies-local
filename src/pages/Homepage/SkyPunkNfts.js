// material
import { useRef, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { Stack, Container, Box, Typography, Button, Grid, Icon, Hidden } from "@mui/material";
import SvgIconStyle from "components/SvgIconStyle";
import MContainer from "components/MContainer";
import Slider from "react-slick";

const sliderSettings = {
  dots: false,
  fade: true,
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false
};

const ITEMS = [
  {
    title: "GELDOTH",
    subtitle: "Mint coming soon ($USDC)",
    text: `After the War and the historic discovery of Neon Ice, those who would eventually form the SkyPunk Legacy faction GELDOTH responded with cunning and technological ingenuity—convening disparate networks of underground AI programmers and quantum technicians to stealthily bend the arc of Neon Ice’s potential toward the good. To this day, the name Geldoth evokes images of covert, ultra-advanced technologies.`,
    actionBtn: "Purchase coming soon",
    avatar: {
      imgUrl: "/images/geldoth.png",
      backgroundUrl: "/images/cyber_bg.png"
    },
    thumbails: [
      {
        url: "/images/geldoth.png"
      },
      {
        url: "/images/oscom.png"
      },
      {
        url: "/images/rymatori.png"
      },
      {
        url: "/images/broshfire.png"
      },
      {
        url: "/images/genoveriseth.png"
      }
    ]
  },
  {
    title: "OSCOM",
    subtitle: "Mint coming soon ($USDC)",
    text: `Those who would eventually form the SkyPunk Legacy faction OSCOM, however, were not fully human. After the War and the historic discovery of Neon Ice, these early human-AI hybrids responded with steadfast duty and loyalty—having been programmed by the earliest champions of Operation Neon Skies with the sole directive to perpetuate the operation and its revolutionary technology (and thus the entire human race). To this day, the name Oscom evokes a sense of deferential confidence.`,
    actionBtn: "Purchase coming soon",
    avatar: {
      imgUrl: "/images/oscom.png",
      backgroundUrl: "/images/cyber_bg.png"
    },
    thumbails: [
      {
        url: "/images/geldoth.png"
      },
      {
        url: "/images/oscom.png"
      },
      {
        url: "/images/rymatori.png"
      },
      {
        url: "/images/broshfire.png"
      },
      {
        url: "/images/genoveriseth.png"
      }
    ]
  },
  {
    title: "RYMATORI",
    subtitle: "Mint coming soon ($USDC)",
    text: `After the War and the historic discovery of Neon Ice, those who would eventually form the SkyPunk Legacy faction RYMATORI responded with brutality and destruction—openly violating ENMOD (the Environmental Modification Convention, a centuries-old prohibition on the hostile use of environmental modification techniques) in multiple violent attempts at global domination. Although mostly reformed and no longer violent, to this day, the name Rymatori evokes an almost animalistic feeling of uneasy mistrust.`,
    actionBtn: "Purchase coming soon",
    avatar: {
      imgUrl: "/images/rymatori.png",
      backgroundUrl: "/images/cyber_bg.png"
    },
    thumbails: [
      {
        url: "/images/geldoth.png"
      },
      {
        url: "/images/oscom.png"
      },
      {
        url: "/images/rymatori.png"
      },
      {
        url: "/images/broshfire.png"
      },
      {
        url: "/images/genoveriseth.png"
      }
    ]
  },
  {
    title: "BROSHFIRE",
    subtitle: "Mint coming soon ($USDC)",
    text: `After the War and the historic discovery of Neon Ice, those who would eventually form the SkyPunk Legacy faction BROSHFIRE responded with empathy and service—advocating for the voiceless and compassionately caring for all members of a still-mending society. To this day, the name Broshfire evokes a sense of generous benevolence.`,
    actionBtn: "Purchase coming soon",
    avatar: {
      imgUrl: "/images/broshfire.png",
      backgroundUrl: "/images/cyber_bg.png"
    },
    thumbails: [
      {
        url: "/images/geldoth.png"
      },
      {
        url: "/images/oscom.png"
      },
      {
        url: "/images/rymatori.png"
      },
      {
        url: "/images/broshfire.png"
      },
      {
        url: "/images/genoveriseth.png"
      }
    ]
  },
  {
    title: "GENOVERISETH",
    subtitle: "Mint coming soon ($USDC)",
    text: `After the War and the historic discovery of Neon Ice, those who would eventually form the SkyPunk Legacy faction GENOVERISETH responded with practicality and efficiency—organizing quickly to maximize the benefits and reach of the world-changing technology. To this day, the name Genoveriseth evokes a sense of reassuring pragmatism.`,
    actionBtn: "Purchase coming soon",
    avatar: {
      imgUrl: "/images/genoveriseth.png",
      backgroundUrl: "/images/cyber_bg.png"
    },
    thumbails: [
      {
        url: "/images/geldoth.png"
      },
      {
        url: "/images/oscom.png"
      },
      {
        url: "/images/rymatori.png"
      },
      {
        url: "/images/broshfire.png"
      },
      {
        url: "/images/genoveriseth.png"
      }
    ]
  }
];

// ----------------------------------------------------------------------
const SkyPunks = [{ title: "geldoth" }, { title: "oscom" }, { title: "rymatori" }, { title: "broshfire" }, { title: "genoveriseth" }];
export default function Homepage() {
  const slideRef = useRef();
  const [active, setActive] = useState(0);

  const goToSlide = (slide) => slideRef.current.slickGoTo(slide);

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
          <Stack
            onClick={() => {
              goToSlide(index);
              setActive(index);
            }}
            alignItems="center"
            spacing={2}
            sx={{ m: 3, cursor: "pointer", transition: "all 0.2s", "&:hover": { "& span, h6": { color: "#DA1FA2" } } }}
          >
            <SvgIconStyle src={`/images/icons/${item.title}.png`} sx={{ width: 38, height: 38, color: active === index ? "#DA1FA2" : "#7C8998" }} />
            <Typography variant="h6" sx={{ textTransform: "uppercase", color: active === index ? "#DA1FA2" : "#7C8998" }}>
              {item.title}
            </Typography>
          </Stack>
        ))}
      </Stack>

      <Slider {...sliderSettings} ref={slideRef}>
        {ITEMS.map(({ title, subtitle, text, actionBtn, avatar, thumbails }) => (
          <>
            <Grid container alignItems="center" rowSpacing={5}>
              <Grid item md={7} sm={6}>
                <Stack direction={{ md: "row-reverse", xs: "column" }} sx={{ position: "relative", height: 1 }} alignItems="center" justifyContent="space-between">
                  <Box component="img" src={avatar.backgroundUrl} sx={{ position: "absolute", width: { md: "initial", sm: "120%", xs: 1 }, top: 0, left: 0 }} />
                  <Box component="img" src={avatar.imgUrl} sx={{ width: { lg: 0.8, xs: 0.8 }, position: "relative" }} />
                  {/* <Box sx={{ width: 1, height: 460, background: "linear-gradient(180deg, rgba(1, 16, 47, 0) 70%,  #090E2F 93.75%), url(/images/cyber11.png)", backgroundSize: '100%', position: "relative" }} /> */}

                  <Stack spacing={2} direction={{ md: "column", xs: "row" }} sx={{ position: "relative" }}>
                    {thumbails.map(({ url }) => (
                      <Box
                        component="img"
                        src={url}
                        sx={{
                          width: 78,
                          height: 78,
                          cursor: "pointer",
                          borderRadius: "50%",
                          p: 1,
                          transition: "all 0.2s",
                          border: "2px solid transparent",
                          "&:hover": { border: "2px solid #DA1FA2" }
                        }}
                      />
                    ))}
                  </Stack>
                </Stack>
              </Grid>
              <Grid item md={5} sm={6}>
                <Stack sx={{ position: "relative" }}>
                  <Typography variant="h2">{title}</Typography>
                  <Typography variant="h6" color="primary" sx={{ mt: 1 }}>
                    {subtitle}
                  </Typography>
                  <Typography sx={{ mt: 2 }}>{text}</Typography>
                  <Button variant="contained" color="primary" href="" target="_blank" sx={{ width: 205, height: 40, borderRadius: "4px", mt: 5 }}>
                    {actionBtn}
                  </Button>
                </Stack>
              </Grid>
            </Grid>
          </>
        ))}
      </Slider>
    </MContainer>
  );
}

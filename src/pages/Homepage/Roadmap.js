import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import CarouselArrow from "./CarouselArrow";
import MContainer from "components/MContainer";

const Roadmaps = [
  {
    title: "PRE-LAUNCH PHASE 1",
    items: [
      { completed: true, item: "Neon Skies Metaverse Concept" },
      { completed: true, item: "Social Media Launch" },
      { completed: true, item: "Website Launch" },
      { completed: false, item: "Concept Marketing" },
      { completed: false, item: "SkyPunk Legacy NFT Marketing" }
    ]
  },
  {
    title: "PRE-LAUNCH PHASE 2",
    items: [
      { completed: false, item: "SkyPunk Legacy NFT Minting Event" },
      { completed: false, item: "SkyPunk Legacy Collection Reveal" },
      // { completed: false, item: "1st Round Pilot License Sale \nChemistry Lab Ownership Auction" },
      // { completed: false, item: "Chemistry Lab Ownership Auction" },
      { completed: false, item: "RAIN Games Development" },
      { completed: false, item: "Land Sale: Chemistry Lab Ownership" }
    ]
  },
  {
    title: 'NEON SKIES\n "RAIN GAMES" SEASON',
    items: [
      { completed: false, item: "Pilot License Drops" },
      {
        title: "RAIN Game Launch",
        children: ["Mint Game Assets", "Neon Swap", "Neon Ice Capsules", "Rain Games Market Place"]
      },
      { completed: false, item: "Drone Junking" },
      { completed: false, item: "Auto-Pilot Mode" },
      { completed: false, item: "Faction Raid" }
    ]
  },
  {
    title: 'NEON SKIES\n "SKY GAMES" SEASON',
    items: [
      { completed: false, item: "Expanded Neon Skies Story" },
      { completed: false, item: "Breeding" },
      { completed: false, item: "Sky Games" },
      { completed: false, item: "PVP" }
    ]
  }
];
export default function Roadmap() {
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2.3,
          slidesToScroll: 1,
          initialSlide: 0
          // infinite: true
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2.1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 375,
        settings: {
          slidesToShow: 1.1,
          slidesToScroll: 1,
          initialSlide: 0
        }
      }
    ]
  };
  return (
    <MContainer id="roadmap" sx={{ position: "relative", mt: 15 }}>
      <Stack direction="row" justifyContent={{ md: "center", xs: "flex-start" }} sx={{ position: "relative" }}>
        <Typography variant="h2">ROADMAP</Typography>

        <Stack direction="row" justifyContent="center" spacing={2} sx={{ position: "absolute", right: 0 }}>
          <CarouselArrow direction="prev" onClick={() => sliderRef.current.slickPrev()} />
          <CarouselArrow direction="next" onClick={() => sliderRef.current.slickNext()} />
        </Stack>
      </Stack>

      <Box sx={{ width: 1, mt: 6 }}>
        <Slider {...sliderSettings} ref={sliderRef}>
          {Roadmaps.map((item, index) => (
            <Box key={index} sx={{ px: 2 }}>
              <Stack>
                <Stack sx={{ px: 3, pt: 5, pb: 6, borderRadius: 1, background: "url(/images/topbar.png) no-repeat, linear-gradient(#da1fa212 0%, #0A1836 50%, #0A1836 50%)" }}>
                  <Typography variant="h5" color="#fff" sx={{ textTransform: "uppercase", whiteSpace: "pre-line" }}>
                    {item.title}
                  </Typography>
                  <Typography component="ul" sx={{ pl: 3, mt: 1 }}>
                    {item.items.map((ele, index) => (
                      <Typography component={!ele.completed && "li"} sx={{ ml: ele.completed && -3 }}>
                        {ele.title ? ele.children.map((i, index) => <Typography component="li">{i}</Typography>) : `${ele.completed ? "✅" : ""} ${ele.item}`}
                      </Typography>
                    ))}
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </MContainer>
  );
}

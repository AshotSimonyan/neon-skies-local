import { useState, useEffect, useRef } from "react";
// material
import { Box, Stack, Container, Typography, Hidden } from "@mui/material";

import { varFadeInUp, MotionInView, varFadeInDown } from "components/animate";
import Slider from "react-slick";
import CarouselArrow from "./CarouselArrow";
import MContainer from "components/MContainer";

const Teams = [
  {
    name: "THE SOVEREIGN",
    role: "CTO"
  },
  {
    name: "COSMO",
    role: "Game Designer"
  },
  {
    name: "STARL3XX",
    role: "Community Manager"
  },
  {
    name: "MORIARTY",
    role: "Finance Minister"
  },
  {
    name: "JULIUS",
    role: "Lead Developer"
  }
];
export default function MainGameElements() {
  const sliderRef = useRef();

  const sliderSettings = {
    dots: false,
    // infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 5,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3.5,
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
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <MContainer id="team" sx={{ position: "relative", pt: 20, pb: 20 }}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ mb: 6 }}>
        <Stack>
          <Typography variant="h2">CORE TEAM</Typography>
          <Typography variant="h6" color="primary" sx={{ mt: 1, letterSpacing: "3px !important" }}>
            THE NEON COUNCIL
          </Typography>
        </Stack>
        <Hidden mdUp>
          <Stack direction="row" justifyContent="center" spacing={2}>
            <CarouselArrow direction="prev" onClick={() => sliderRef.current.slickPrev()} />
            <CarouselArrow direction="next" onClick={() => sliderRef.current.slickNext()} />
          </Stack>
        </Hidden>
      </Stack>
      <Box sx={{ width: 1 }}>
        <Slider {...sliderSettings} ref={sliderRef}>
          {Teams.map((item, index) => (
            <Box key={index} sx={{ px: { lg: 2, xs: 1 } }}>
              <Stack sx={{ position: "relative" }}>
                <Box component="img" src={`/images/card ${index + 1}.png`} />
                <Box sx={{ p: 3, position: "absolute", bottom: 0 }}>
                  <Typography variant="h6" color="#fff" sx={{ textTransform: "uppercase" }}>
                    {item.name}
                  </Typography>
                  <Typography sx={{ fontSize: "12px !important" }}>{item.role}</Typography>
                </Box>
              </Stack>
            </Box>
          ))}
        </Slider>
      </Box>
    </MContainer>
  );
}

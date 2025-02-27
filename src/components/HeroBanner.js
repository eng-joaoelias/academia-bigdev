import React from "react";
import { Box, Stack, Typography, Button } from "@mui/material";

import HeroBannerImage from "../assets/images/banner.png";

const HeroBanner = () => {
  return (
    <Box
      sx={{
        mt: { lg: "212px", xs: "70px" },
        ml: { sm: "50px" },
      }}
      position="relative"
      p="20px"

    >
      <Typography color="#FF2625" fontWeight="60" fontSize="26px">
        Academia Fitness
      </Typography>

      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: "44px", xs: "40px" } }}
        mb="23px" mt="30px"
      >
        Suar, Sorrir <br /> e Repetir
      </Typography>

      <Typography fontSize="22px" lineHeight="35px" mb={4}>
        Se liga nos exercícios mais eficientes!
      </Typography>

      <Button variant="contained" color="error" href="#exercises" sx={{backgroundColor: "#FF2625", padding: '19px'}}>
        Explorar Exercícios
      </Button>

      <Typography
        fontWeight={600}
        color="#FF2625"
        sx={{
          opacity: 0.1,
          display: { lg: "block", xs: "none" },
        }}
        fontSize="200px"
      >
        Exercício
      </Typography>
      <img src={HeroBannerImage} alt="banner" className="hero-banner-img" />
    </Box>
  );
};

export default HeroBanner;

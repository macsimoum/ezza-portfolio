import React from "react";
import { Helmet } from "react-helmet-async";
import styled, { keyframes } from "styled-components";
import Typewriter from "typewriter-effect";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const summary =
  "I’m a freelance and full-stack programmer and conducting and developing desktop and web-based applications. Also,  my work focused on state estimation application in distribution systems, distributed measurement systems applied to electric distribution grids, and active and reactive power markets. My current research interests include electric vehicles charging station placement with GIS considerations, electric vehicles load predictions and estimation of electric vehicles’ owner behavior.";

const bio =
  "I’m curious, and I enjoy work that challenges me to learn something new and stretch in a different direction. I do my best to stay on top of changes in the state of the art so that I can meet challenges with tools well suited to the job at hand.";

const description =
  "In every page of my portfolio, used an unique design patterns and tools";

const BlinkAnimation = keyframes`
  50% {
    opacity: 0;
  }
  50% {
    opacity: 50%;
  }
  100% {
    opacity: 0;
  }
`;

const BlinkContainer = styled.footer`
  animation: ${BlinkAnimation} 1s linear infinite;
  background-color: yellow;
  text-shadow: 1px 1px red;
  padding: 10px;
  border-radius: 15px;
  box-shadow: 0 0 50px #ccc;
  margin: 20px;
`;

const SummaryContainer = styled.div`
  font-size: 12px;
  font-weight: bold;
  color: darkcyan;
  text-shadow: 1px 1px aqua;
`;

const NameContainer = styled.div`
  font-weight: bolder;
  font-size: 25px;
  text-shadow: 1px 1px yellow;
`;

const SubNameContainer = styled.div`
  font-weight: bolder;
  font-size: 20px;
`;

const HomeScreen = () => {
  const [body] = React.useState(
    <Helmet>
      <style>
        {`
            body {
background: #C6FFDD;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */

            }
            `}
      </style>
    </Helmet>
  );

  return (
    <React.Fragment>
      {body}
      <BlinkContainer>{description.toUpperCase()}</BlinkContainer>
      <Card elevation={10} sx={{ display: "flex", marginBottom: 2 }}>
        <CardMedia
          component="img"
          sx={{ width: 151 }}
          image={process.env.PUBLIC_URL + "/ezza.png"}
          alt="Live from space album cover"
        />
        <Box sx={{ display: "flex", flexDirection: "column" }}>
          <CardContent sx={{ flex: "1 0 auto" }}>
            <Typography component="div" variant="h5">
              EZZA
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              component="div"
            >
              FULL-STACK DEVELOPER
            </Typography>
          </CardContent>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              pl: 1,
              pb: 1,
              fontSize: "10px",
              fontWeight: "bold",
            }}
          >
            {bio}
          </Box>
        </Box>
      </Card>
      <NameContainer>
        <Typewriter
          options={{
            strings: ["Alireza Hassannejad", "EZZA"],
            autoStart: true,
            loop: true,
            delay: 20,
            deleteSpeed: 20,
          }}
        />
      </NameContainer>
      <SummaryContainer>
        <Typewriter
          options={{
            strings: summary,
            autoStart: true,
            loop: true,
            delay: 10,
            deleteSpeed: 30,
            pauseFor: 5000,
          }}
        />
      </SummaryContainer>
      <SubNameContainer>
        <Typewriter
          options={{
            strings: ["Full-Stack Developer"],
            autoStart: true,
            loop: true,
            delay: 10,
            deleteSpeed: 30,
          }}
        />
      </SubNameContainer>
    </React.Fragment>
  );
};

export default HomeScreen;

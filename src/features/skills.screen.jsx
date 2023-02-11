import * as React from "react";
import styled, { keyframes } from "styled-components";
import { BorderLinearProgress } from "../components/border-linear-progress.component";
import { Avatar, Chip, Typography } from "@mui/material";
import Paper from "@mui/material/Paper";

const data = [
  {
    language: "Python",
    per: "100",
    frameworks: [
      { language: "Tensorflow", per: "100" },
      { language: "Keras", per: "100" },
      { language: "Numpy", per: "100" },
      { language: "Pandas", per: "100" },
      { language: "GeoPandas", per: "100" },
      { language: "Django", per: "50" },
      { language: "Flask", per: "100" },
      { language: "Kivy", per: "80" },
      { language: "TKinter", per: "90" },
      { language: "PyQt", per: "100" },
      { language: "Jupyter Lab", per: "100" },
    ],
  },

  {
    language: "JavaScript",
    per: "100",
    frameworks: [
      { language: "NodeJS", per: "100" },
      { language: "TypeScript", per: "100" },
      { language: "React", per: "100" },
      { language: "React Native", per: "100" },
      { language: "Angular", per: "60" },
      { language: "ExpressJS", per: "100" },
      { language: "Redux", per: "100" },
      { language: "NextJS", per: "100" },
      { language: "Apollo", per: "50" },
    ],
  },

  {
    language: "DataSchemas",
    per: "100",
    frameworks: [
      { language: "GraphQL", per: "100" },
      { language: "Mikro-ORM", per: "100" },
      { language: "TypeORM", per: "100" },
      { language: "MongoDB", per: "100" },
      { language: "PostgresSQL", per: "100" },
      { language: "MySQL", per: "100" },
      { language: "SQLite", per: "100" },
    ],
  },

  {
    language: "Services",
    per: "100",
    frameworks: [
      { language: "Git", per: "90" },
      { language: "Docker", per: "90" },
      { language: "Docker Compose", per: "90" },
      { language: "Dokku", per: "50" },
    ],
  },

  {
    language: "Web3.0",
    per: "100",
    frameworks: [
      { language: "Cryptocurrency", per: "100" },
      { language: "Blockchain", per: "100" },
    ],
  },

  {
    language: "Web2.0",
    per: "100",
    frameworks: [
      { language: "HTML", per: "100" },
      { language: "CSS", per: "90" },
      { language: "SASS", per: "70" },
    ],
  },

  { language: "Dart", per: "100" },
  { language: "Flutter", per: "100" },
];

const abilitiesAcademicData = [
  "Expert in optimization methods and problem solving algorithm (GA, NSGA-II, MOPSO, PSO, ACO, Firefly algorithm, Bees algorithm, Artificial Bee colony, GOA, SFLA, KHA, IWO, Harmony search, Simulated annealing, Tabu search, cultural algorithm, TLBO, ANFIS,GMDH)",
  "Statistics",
  "Pareto",
  "Selection methods",
  "Linear and nonlinear optimizations",
  "Data analytics",
  "Data mining",
  "Artificial intelligence",
  "Machine learning",
  "state estimation",
  "Bayesian methods",
  "Naïve Bayes",
  "SVM: support vector machine",
  "Logistic regression",
  "Decision tree",
  "Linear and non-linear regression",
  "Image classification",
  "Machine translation",
  "Stock prediction",
  "PCA: Principal component analysis",
  "Clustering methods",
];

const abilitiesPracticalData = [
  "Full-Stack Developer",
  "Data Structure",
  "Design Pattern",
  "Statistical Programming",
  "Meta-heuristic and Mathematical  Algorithms Optimizations",
  "Desktop/Web/Native Developer",
];

const Container = styled.div`
  border: blueviolet double thin;
  display: flex;
  flex-wrap: nowrap;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  align-content: start;
`;

const Language = styled.div`
  border: #ff7474 double thin;
  flex: 1 10 auto;
  padding: 1px;
  margin: 1px;
  transform: rotate(-90deg);
  flex-grow: 0;
  height: 13px;
  background-color: rgba(200, 50, 40, 20%);
  opacity: 100%;
  width: 50px;
  font-weight: bolder;
`;

const Framework = styled.div`
  border: #ff7474 double thin;
  flex: 0 1 auto;
  margin: 1px;
  flex-grow: 1;
  background-color: aliceblue;
`;

const VibrationAnimation = keyframes`
  0% {
    transform: translateX(-1px) translateY(1px);
  }
  100% {
    transform: translateX(1px) translateY(-2px);
  }`;

const VibrationContainer = styled.div`
  text-align: center;
  font-size: 22px;
  font-weight: bold;
  color: rgba(250, 255, 255, 0.8);
`;
const VibrationSpan = styled.div`
  transition: all 500ms;
  display: inline-block;
  margin-right: 1px;
  text-shadow: 1px 2px 3px #999;
  //filter: blur(1px);
  animation: ${VibrationAnimation} 50ms linear infinite forwards;
`;

const VibrationAnimationSkill = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(5deg); }
  50% { transform: rotate(0eg); }
  75% { transform: rotate(-5deg); }
  100% { transform: rotate(0deg); }`;

const VibrationSpanSkill = styled.div`
  transition: all 500ms;
  display: inline-block;
  margin-right: 3px;
  text-shadow: 1px 2px 3px #999;
  //filter: blur(1px);
  font-weight: bold;
  animation: ${VibrationAnimationSkill} 200ms linear infinite forwards;
`;

const SkillsScreen = () => {
  // noinspection JSValidateTypes
  return (
    <div>
      <div>
        <Paper
          elevation={10}
          sx={{
            padding: 2,
            background: "linear-gradient(90deg, #00DBDE 0%, #FC00FF 100%)",
            borderRadius: "10px",
            marginBottom: 5,
          }}
        >
          <Paper
            elevation={10}
            sx={{
              padding: 2,
              background:
                "linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)",
              marginBottom: 3,
              borderRadius: 10,
            }}
          >
            <VibrationContainer>
              <VibrationSpan>P</VibrationSpan>
              <VibrationSpan>R</VibrationSpan>
              <VibrationSpan>A</VibrationSpan>
              <VibrationSpan>C</VibrationSpan>
              <VibrationSpan>T</VibrationSpan>
              <VibrationSpan>I</VibrationSpan>
              <VibrationSpan>C</VibrationSpan>
              <VibrationSpan>A</VibrationSpan>
              <VibrationSpan>L</VibrationSpan>
              &nbsp;ABILITIES
            </VibrationContainer>
          </Paper>
          {abilitiesPracticalData.map((ability) => (
            <Chip
              sx={{ height: "100%", padding: "5px", margin: "2px" }}
              key={ability}
              clickable={true}
              avatar={
                <Avatar
                  alt={ability}
                  src={process.env.PUBLIC_URL + "/ability-outlined.svg"}
                />
              }
              label={
                <Typography style={{ whiteSpace: "normal" }} variant="caption">
                  {ability.toUpperCase()}
                </Typography>
              }
            />
          ))}
        </Paper>
      </div>
      <div style={{ marginBottom: 30, marginTop: 1 }}>
        <Typography
          color="dimgray"
          sx={{
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "40px",
            textDecoration: "underline",
          }}
        >
          S K I L L S
        </Typography>
        {data.map((data) => (
          <Container key={data.language}>
            {Object.keys(data).includes("frameworks") ? (
              <Language>
                <span>{data.language}</span>
              </Language>
            ) : (
              <Framework>
                {`${data.language} (${data.per - 1})%`}
                <BorderLinearProgress
                  key={data.language}
                  variant="determinate"
                  value={data.per - 1}
                />
              </Framework>
            )}
            {Object.keys(data).includes("frameworks") ? (
              <Framework>
                {data.frameworks.map((framework) => (
                  <div
                    key={framework.language}
                    style={{ marginLeft: "5px", marginRight: "3px" }}
                  >
                    {framework.language.split("").map((l, index) => (
                      <VibrationSpanSkill key={index}>{l}</VibrationSpanSkill>
                    ))}{" "}
                    {`(${framework.per - 1})%`}
                    <BorderLinearProgress
                      key={framework.language}
                      variant="determinate"
                      value={framework.per - 1}
                    />
                  </div>
                ))}
              </Framework>
            ) : null}
          </Container>
        ))}
      </div>
      <div>
        <Paper
          elevation={10}
          sx={{
            padding: 2,
            background: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
            borderRadius: "10px",
            marginBottom: 5,
          }}
        >
          <Paper
            elevation={10}
            sx={{
              padding: 2,
              background: "linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%)",
              marginBottom: 3,
              borderRadius: 10,
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: "bolder",
                fontSize: "22px",
                color: "violet",
                textShadow: "0 2px 3px #FF0000, 0 -2px 3px #0000FF",
                letterSpacing: "1px",
              }}
            >
              ACADEMIC ABILITIES
            </Typography>
          </Paper>
          {abilitiesAcademicData.map((ability) => (
            <Chip
              sx={{ height: "100%", padding: "5px", margin: "2px" }}
              key={ability}
              clickable={true}
              avatar={
                <Avatar
                  alt={ability}
                  src={process.env.PUBLIC_URL + "/ability.svg"}
                />
              }
              label={
                <Typography style={{ whiteSpace: "normal" }} variant="caption">
                  {ability.toUpperCase()}
                </Typography>
              }
            />
          ))}
        </Paper>
      </div>
    </div>
  );
};

export default SkillsScreen;

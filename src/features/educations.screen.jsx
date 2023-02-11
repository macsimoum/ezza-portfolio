import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import Chip from "@mui/material/Chip";
import LanguageIcon from "@mui/icons-material/Language";
import QuizIcon from "@mui/icons-material/Quiz";

const data = [
  {
    header: "Master Degree | Electrical Engineering | Power Systems (Honor)",
    content:
      "University of Science and Technology of Mazandaran (USTM), Mazandaran, Iran",
    date: "SEPTEMBER 2016 – JULY 2018",
    site: "https://en.mazust.ac.ir/",
    wikipedia:
      "https://en.wikipedia.org/wiki/University_of_Science_and_Technology_of_Mazandaran",
    image: "/ustm-image.jpg",
    logo: "/ustm-logo.jpg",
  },
  {
    header: "Bachelor | Electrical Engineering- Power Systems (Honor)",
    content:
      "Mazandaran University of Science and Technology (USTMB), Mazandaran, Iran",
    date: "SEPTEMBER 2012 – JULY 2016",
    site: "https://www.ustmb.ac.ir/En",
    wikipedia:
      "https://en.wikipedia.org/wiki/Mazandaran_University_of_Science_and_Technology",
    image: "/ustmb-image.jpg",
    logo: "/ustmb-logo.gif",
  },
];

const CardComponent = ({ handleOpenWebsite, info = data[0] }) => (
  <Card
    aria-label={info.header}
    sx={{ maxWidth: "100%", marginBottom: 2, marginX: 1 }}
    elevation={10}
  >
    <CardHeader
      avatar={
        <Avatar
          sx={{ bgcolor: "white", width: 56, height: 56 }}
          aria-label={info.header}
          variant="rounded"
          src={process.env.PUBLIC_URL + info.logo}
        />
      }
      title={info.header}
      subheader={info.date}
      aria-label={info.header}
      titleTypographyProps={{ fontWeight: "bolder", fontSize: "14px" }}
    />
    <CardMedia
      component="img"
      height="194"
      image={process.env.PUBLIC_URL + info.image}
      alt={info.header}
    />
    <CardContent aria-label={info.header}>
      <Chip
        label="WEBSITE"
        icon={<LanguageIcon />}
        onClick={() => handleOpenWebsite(info.site)}
        aria-label={info.header}
        sx={{ marginX: 1, fontWeight: "bolder", fontSize: "12px" }}
      />
      <Chip
        label="WIKIPEDIA"
        icon={<QuizIcon />}
        onClick={() => handleOpenWebsite(info.wikipedia)}
        aria-label={info.header}
        sx={{ fontWeight: "bolder", fontSize: "12px" }}
      />
      <Typography
        mt={2}
        aria-label={info.header}
        variant="caption"
        component="div"
      >
        {info.content}
      </Typography>
    </CardContent>
  </Card>
);

const EducationsScreen = () => {
  function handleOpenWebsite(url) {
    window.open(url, "_blank", "noreferrer");
  }
  return (
    <React.Fragment>
      {data.map((info) => (
        <CardComponent
          key={info.header}
          info={info}
          handleOpenWebsite={handleOpenWebsite}
        />
      ))}
    </React.Fragment>
  );
};

export default EducationsScreen;

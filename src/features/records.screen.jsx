import * as React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import PreviewIcon from "@mui/icons-material/Preview";
import EmojiObjectsIcon from "@mui/icons-material/EmojiObjects";
import SaveAsIcon from "@mui/icons-material/SaveAs";
import DataObjectIcon from "@mui/icons-material/DataObject";
import HubIcon from "@mui/icons-material/Hub";
import PublishedWithChangesIcon from "@mui/icons-material/PublishedWithChanges";
import TerminalIcon from "@mui/icons-material/Terminal";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import WaterfallChartIcon from "@mui/icons-material/WaterfallChart";
import FunctionsIcon from "@mui/icons-material/Functions";

const data = [
  {
    header: "Software Engineer at Niroo Research Institute - TEHRAN, IRAN",
    content: [
      {
        icon: <PreviewIcon />,
        label: "Designed UI",
        caption:
          "Designed UI for “Optimal Placement of EV Charging Stations Considering the Technical and Economic Aspects and Providing the GIS Based Software” and “Assessment of the EV Effect on Network Load Forecasting and Changes of the Load Flow” which are two desktop-based applications based on the combination of  Python and C++ Qt framework.",
      },
      {
        icon: <EmojiObjectsIcon />,
        label: "Designed Optimization Algorithms",
        caption:
          "Designed several optimization algorithms for those application flows which can work alongside without any freezing or lagging in software's with multi-threading technologies.",
      },
      {
        icon: <SaveAsIcon />,
        label: "Rewrite ArcGIS Application Core",
        caption:
          "Rewrite the core modules and functions of ArcGIS application which is the biggest company in the field of geographical information systems.",
      },
      {
        icon: <DataObjectIcon />,
        label: "Used Python, C and C++ Together",
        caption:
          "Used Python, C and C++ programming languages for backend and frontend.",
      },
      {
        icon: <HubIcon />,
        label: "Design AI Neural Network",
        caption:
          "Design an AI neural network for prediction section of software's which predicts data as fast as possible with Tensorflow and Keras technologies.",
      },
      {
        icon: <PublishedWithChangesIcon />,
        label: "Designed Raster Converter Algorithm",
        caption:
          "Designed an algorithm that converts GIS file objects to graph networks for calculating road traffic. Designed an algorithm that converts GIS electricity network objects to knowable objects in Python and C++ for calculating the electricity network elements.",
      },
      {
        icon: <TerminalIcon />,
        label: "Designed a Multi-Objective Algorithm",
        caption:
          "Designed a multi-objective meta-heuristic algorithm for the optimization section of those software's which can optimize multiple goals in parallel time.",
      },
      {
        icon: <QueryStatsIcon />,
        label: "Designed Statistical Algorithm",
        caption:
          "Designed an algorithm that can convert gasoline cars customers to electric vehicle customers with high level statistics processing.",
      },
      {
        icon: <WaterfallChartIcon />,
        label: "Used State Estimation",
        caption:
          "Used a State Estimation method to predict the power value of customers that we haven't none of  their electricity data.",
      },
      {
        icon: <FunctionsIcon />,
        label: "Used Complex Math Concepts",
        caption:
          "Used very complex concepts in the discussion of Mathematics, Statistics, Machine Learning, Data Mining, AI, Electrical Engineering,  Algorithm Design, Data Structure, Application Security and Optimization Algorithms.",
      },
    ],
  },
];

const RecordsScreen = () => {
  // noinspection JSValidateTypes
  return (
    <React.Fragment>
      <Typography
        fontWeight="bolder"
        color="white"
        bgcolor="darkred"
        paddingY={1}
        sx={{ textDecoration: "underline" }}
      >
        Software Engineer at Niroo Research Institute - TEHRAN, IRAN
      </Typography>
      <List dense={true}>
        {data[0].content.map((value) => (
          <div key={value.label}>
            <ListItem alignItems="flex-start" disableGutters>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "cornflowerblue", color: "white" }}>
                  {value.icon}
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primaryTypographyProps={{
                  color: "white",
                  fontWeight: "bolder",
                  variant: "body2",
                  bgcolor: "black",
                  paddingLeft: "2px",
                }}
                secondaryTypographyProps={{
                  noWrap: false,
                  fontSize: 12,
                  fontWeight: "bold",
                  lineHeight: "16px",
                  color: "white",
                  bgcolor: "cornflowerblue",
                  paddingLeft: "2px",
                  paddingTop: "2px",
                }}
                sx={{ my: 0 }}
                primary={value.label}
                secondary={value.caption}
              />
            </ListItem>
          </div>
        ))}
      </List>
    </React.Fragment>
  );
};

export default RecordsScreen;

import * as React from "react";

import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BootstrapTooltip } from "./bootstrap-tooltip.component";
import Avatar from "@mui/material/Avatar";
import Chip from "@mui/material/Chip";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import CardActions from "@mui/material/CardActions";
import { ExpandMore } from "./expand-more.component";
import Paper from "@mui/material/Paper";
import {
  IconBinary,
  IconCylinder,
  IconFingerprint,
  IconLayoutNavbarExpand,
  IconNews,
  IconPresentationAnalytics,
  IconSatellite,
} from "@tabler/icons-react";

const ColorContainer = styled(Card)`
  background-image: linear-gradient(135deg, #a0fe65 10%, #fa016d 100%);
`;

// noinspection JSValidateTypes
const ConferenceCardComponent = ({
  info,
  handleExpandClick,
  expanded,
  handleOpenWebsite,
  title,
}) => (
  <ColorContainer elevation={10} sx={{ minWidth: 275, my: 2 }}>
    <CardContent>
      <Typography variant="overline">
        <BootstrapTooltip title="International Conference Article Type">
          <Chip
            avatar={
              <Avatar sx={{ bgcolor: "inherit" }}>
                <IconPresentationAnalytics color="black" />
              </Avatar>
            }
            label={title}
            sx={{ fontSize: 10, fontWeight: "bold" }}
            clickable={true}
          />
        </BootstrapTooltip>
        <BootstrapTooltip title="Conference Article First Publication Date">
          <Typography variant="overline">{info.firstPublish}</Typography>
        </BootstrapTooltip>
      </Typography>
      <BootstrapTooltip title="Conference Article Title">
        <Typography variant="subtitle" fontWeight="bold" component="div">
          {info.title.toUpperCase()}
        </Typography>
      </BootstrapTooltip>
      {info.authors.map((name, index) => (
        <BootstrapTooltip key={name} title={`Author ${index + 1}`}>
          <Typography
            display="inline-block"
            color="text.secondary"
            variant="caption"
          >
            {name}
            {index !== info.authors.length - 1 && ", "}
          </Typography>
        </BootstrapTooltip>
      ))}
      <br />
      <BootstrapTooltip title="DOI">
        <IconButton
          onClick={() => handleOpenWebsite(info.doi)}
          aria-label={info.title}
          component="label"
        >
          <IconBinary color="black" />
          <IconCylinder color="black" />
          <IconFingerprint color="black" />
        </IconButton>
      </BootstrapTooltip>
      <BootstrapTooltip title="Conference URL">
        <IconButton
          onClick={() => handleOpenWebsite(info.url)}
          aria-label={info.title}
          component="label"
        >
          <IconSatellite color="black" />
        </IconButton>
      </BootstrapTooltip>
      <BootstrapTooltip title="Conference Category">
        <Chip
          avatar={
            <Avatar sx={{ bgcolor: "inherit" }}>
              <IconNews color="black" />
            </Avatar>
          }
          label={info.journal.toUpperCase()}
          sx={{ fontSize: 8, fontWeight: "bold" }}
          clickable={true}
        />
      </BootstrapTooltip>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Chip
            avatar={
              <Avatar sx={{ bgcolor: "inherit" }}>
                <IconLayoutNavbarExpand color="black" />
              </Avatar>
            }
            label="ABSTRACT"
            sx={{ fontSize: 8, fontWeight: "bold" }}
            clickable={true}
          />
        </ExpandMore>
      </CardActions>
    </CardContent>
    <Collapse in={expanded} timeout="auto" unmountOnExit>
      <CardContent>
        <Paper
          elevation={10}
          sx={{
            padding: 2.5,
            background: "linear-gradient( 135deg, #FFD26F 10%, #3677FF 100%)",
          }}
        >
          <Typography
            sx={{
              fontSize: "12px",
              lineHeight: "14px",
              fontWeight: "bold",
            }}
          >
            {info.abstract}
          </Typography>
        </Paper>
      </CardContent>
    </Collapse>
  </ColorContainer>
);

export default ConferenceCardComponent;

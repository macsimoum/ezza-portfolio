import * as React from "react";

import styled from "styled-components";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { BootstrapTooltip } from "./bootstrap-tooltip.component";
import { Avatar, Chip, Collapse } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import CardActions from "@mui/material/CardActions";
import { ExpandMore } from "./expand-more.component";
import Paper from "@mui/material/Paper";

const ColorContainer = styled(Card)`
  background-image: linear-gradient(135deg, #a0fe65 10%, #fa016d 100%);
`;

// noinspection JSValidateTypes
const ISCJournalCardComponent = ({
  info,
  handleExpandClick,
  expanded,
  handleOpenWebsite,
  title,
}) => (
  <ColorContainer elevation={10} sx={{ minWidth: 275, my: 2 }}>
    <CardContent>
      <Typography variant="overline">
        <BootstrapTooltip title="International Journal Type">
          <Chip
            avatar={
              <Avatar
                alt={info.title}
                src={process.env.PUBLIC_URL + "/title.svg"}
              />
            }
            label={title}
            sx={{ fontSize: 10, fontWeight: "bold" }}
            clickable={true}
          />
        </BootstrapTooltip>
        <BootstrapTooltip title="Article First Publication Date">
          <Typography variant="overline">{info.firstPublish}</Typography>
        </BootstrapTooltip>
      </Typography>
      <BootstrapTooltip title="Article Title">
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
          <img
            src={process.env.PUBLIC_URL + "/binary.svg"}
            color="white"
            alt={info.title}
          />
          <img
            src={process.env.PUBLIC_URL + "/object.svg"}
            color="white"
            alt={info.title}
          />
          <img
            src={process.env.PUBLIC_URL + "/finger-print.svg"}
            color="white"
            alt={info.title}
          />
        </IconButton>
      </BootstrapTooltip>
      <BootstrapTooltip title="Journal URL">
        <IconButton
          onClick={() => handleOpenWebsite(info.url)}
          aria-label={info.title}
          component="label"
        >
          <img
            src={process.env.PUBLIC_URL + "/satelite.svg"}
            color="white"
            alt={info.title}
          />
        </IconButton>
      </BootstrapTooltip>
      <BootstrapTooltip title="Journal Volume">
        <Chip
          avatar={
            <Avatar
              alt={info.title}
              src={process.env.PUBLIC_URL + "/volume.svg"}
            />
          }
          label={info.volume}
          sx={{ fontSize: 10, fontWeight: "bold" }}
          clickable={true}
        />
      </BootstrapTooltip>
      <BootstrapTooltip title="Journal Number">
        <Chip
          avatar={
            <Avatar
              alt={info.title}
              src={process.env.PUBLIC_URL + "/number.svg"}
            />
          }
          label={info.number}
          sx={{ fontSize: 10, fontWeight: "bold" }}
          clickable={true}
        />
      </BootstrapTooltip>
      <BootstrapTooltip title="Journal Pages">
        <Chip
          avatar={
            <Avatar
              alt={info.title}
              src={process.env.PUBLIC_URL + "/page.svg"}
            />
          }
          label={info.pages}
          sx={{ fontSize: 10, fontWeight: "bold" }}
          clickable={true}
        />
      </BootstrapTooltip>
      <BootstrapTooltip title="Journal Category">
        <Chip
          avatar={
            <Avatar
              alt={info.title}
              src={process.env.PUBLIC_URL + "/article.svg"}
            />
          }
          label={info.journal.toUpperCase()}
          sx={{ fontSize: 8, fontWeight: "bold" }}
          clickable={true}
        />
      </BootstrapTooltip>
      <Alert
        elevation={10}
        severity="info"
        sx={{
          opacity: "100%",
          background: `linear-gradient( 135deg, #EECE13 10%, #B210FF 100%)`,
          mt: 1,
        }}
        icon={
          <Avatar
            alt={info.title}
            src={process.env.PUBLIC_URL + "/keywords.svg"}
          />
        }
      >
        <AlertTitle>Keywords</AlertTitle>
        {info.keywords.map((kw) => (
          <Chip
            key={kw}
            avatar={
              <Avatar
                alt={kw}
                src={process.env.PUBLIC_URL + "/open-lock.svg"}
              />
            }
            label={kw.toUpperCase()}
            sx={{ fontSize: 11, fontWeight: "bold" }}
            clickable={true}
          />
        ))}
      </Alert>
      <CardActions disableSpacing>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <Chip
            avatar={
              <Avatar
                alt={info.title}
                src={process.env.PUBLIC_URL + "/expand.svg"}
              />
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

export default ISCJournalCardComponent;

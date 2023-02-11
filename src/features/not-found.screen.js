import React from "react";
import Typography from "@mui/material/Typography";
import styled from "styled-components";

const Container = styled.div`
  text-align: center;
  margin-top: 200px;
`;

const NotFoundScreen = () => {
  return (
    <Container>
      <Typography variant="h1">404</Typography>
      <Typography>Page Not Found</Typography>
    </Container>
  );
};

export default NotFoundScreen;

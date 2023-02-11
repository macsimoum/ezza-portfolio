import * as React from "react";

import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Paper from "@mui/material/Paper";
import ScienceIcon from "@mui/icons-material/Science";
import HistoryEduIcon from "@mui/icons-material/HistoryEdu";
import SchoolIcon from "@mui/icons-material/School";
import TuneIcon from "@mui/icons-material/Tune";
import { Link, useLocation, useNavigate } from "react-router-dom";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const SkeletonComponent = ({ children }) => {
  const [value, setValue] = React.useState(0);
  const ref = React.useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  React.useEffect(() => {
    ref.current.ownerDocument.body.scrollTop = 0;
  }, [value]);

  function handleGoHome() {
    navigate("/");
  }

  // noinspection JSValidateTypes
  return (
    <div
      style={{
        marginLeft: 10,
        marginRight: 10,
      }}
    >
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100%px)` },
        }}
      >
        <Toolbar
          sx={{
            backgroundColor: "white",
            color: "white",
            fontSize: "24px",
            fontWeight: "bold",
          }}
        >
          <Typography
            style={{ display: "inline-block" }}
            sx={{ backgroundColor: "grey", paddingX: 1 }}
            variant="text"
            noWrap
            component="div"
            onClick={handleGoHome}
          >
            ABOUT EZZA
            <Typography
              style={{ display: "inline-block" }}
              variant="overline"
              gutterBottom
            >
              {location.pathname.split("/")[1].toUpperCase()}
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
      <Box sx={{ pb: 7 }} ref={ref}>
        <Box marginBottom={9}></Box>
        {children}
        <Paper
          sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
          elevation={20}
        >
          <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
              setValue(newValue);
            }}
          >
            <BottomNavigationAction
              defaultChecked
              component={Link}
              to="/records"
              label="Records"
              icon={<ScienceIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/educations"
              label="Educations"
              icon={<SchoolIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/skills"
              label="Skills"
              icon={<TuneIcon />}
            />
            <BottomNavigationAction
              component={Link}
              to="/publications"
              label="Publications"
              icon={<HistoryEduIcon />}
            />
          </BottomNavigation>
        </Paper>
      </Box>
    </div>
  );
};

export default SkeletonComponent;

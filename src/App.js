import * as React from "react";
import RecordsScreen from "./features/records.screen";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./features/home.screen";
import EducationsScreen from "./features/educations.screen";
import SkillsScreen from "./features/skills.screen";
import PublicationsScreen from "./features/publications.screen";
import SkeletonComponent from "./components/skeleton.component";

// TODO: add whatsapp instagram telegram and arial labels
// TODO: explained used technologies
// TODO: change app title and logo
// TODO: minimized bundle size https://mui.com/material-ui/guides/minimizing-bundle-size/
// TODO: implement testing https://mui.com/material-ui/guides/testing/
// TODO: localisation https://mui.com/material-ui/guides/localization/
// TODO: create 404 page
// TODO: config shadow DOM https://mui.com/material-ui/guides/shadow-dom/
// TODO: create dark mode toggle https://mui.com/material-ui/customization/dark-mode/
// TODO: create logo icon
// TODO: Configure font

function App() {
  return (
    <React.Fragment>
      <SkeletonComponent>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/records" element={<RecordsScreen />} />
          <Route path="/educations" element={<EducationsScreen />} />
          <Route path="/skills" element={<SkillsScreen />} />
          <Route path="/publications" element={<PublicationsScreen />} />
        </Routes>
      </SkeletonComponent>
    </React.Fragment>
  );
}

export default App;

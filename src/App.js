import * as React from "react";
import RecordsScreen from "./features/records.screen";
import { Route, Routes } from "react-router-dom";
import HomeScreen from "./features/home.screen";
import EducationsScreen from "./features/educations.screen";
import SkillsScreen from "./features/skills.screen";
import PublicationsScreen from "./features/publications.screen";
import SkeletonComponent from "./components/skeleton.component";

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

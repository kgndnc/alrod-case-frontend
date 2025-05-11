import "./App.css";

import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import type React from "react";
import ProjectFormPage from "./pages/ProjectFormPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage";

/*
	TODO:
  - split Home to components	(DONE)
  - add "add project multi-step form" (DONE)
  - add project details page (DONE)
  - il / ilçe seçimi data (DONE)
  - fix home page (DONE)
  - fix form (DONE)
  - list project details on card click (DONE)
  - add new font (font-poppins) and preset color to tailwind (DONE) 
  - make sidebar buttons functional (LATER)
  - make final touches and fixes
	- deploy (ship it 🚀 :D)
*/

const App: React.FC = () => {
  return (
    <>
      <Routes>
        <Route index element={<Home />} />
        <Route
          path="about"
          element={
            <>
              <h1>About</h1>
            </>
          }
        />

        {/* <Route element={<AuthLayout />}>
					<Route path='login' element={<Login />} />
					<Route path='register' element={<Register />} />
				</Route> */}

        <Route path="projects">
          <Route index element={<>Projects home</>} />
          <Route path="new" element={<ProjectFormPage />} />
          <Route path=":project_id" element={<ProjectDetailsPage />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;

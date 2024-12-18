import React from "react";
// rename browserRouter as router
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

// import pages and components
import Home from "./pages/Home";
import History from "./pages/History";
import Exercise from "./pages/Exercise";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Error from "./pages/Error";
import SingleExercise from "./components/SingleExercise"
import Cardio from "./components/Cardio";
import Resistance from "./components/Resistance";
import UserForms from "./components/UserForms";
import Contact from "./pages/contact";
import ScienceOfFitness from "./pages/FitnessScience";
import Nutrition from "./pages/Nutrition"; 
import About_Exercise from "./pages/About_Exercises";
import Tracking from "./pages/Tracking";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/history" element={<History />} />
        <Route path="/history/:type/:id" element={<SingleExercise />} />
        <Route path="/exercise" element={<Exercise />} />
        <Route path="/exercise/cardio" element={<Cardio />} />
        <Route path="/exercise/resistance" element={<Resistance />} />
        <Route path="/exercise/userForms"  element={<UserForms />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/fitness-science" element={< ScienceOfFitness/>} />
        <Route path="/nutrition" element={< Nutrition/>} />
        <Route path="/exercise-info" element={<About_Exercise/>} />
        <Route path="/tracking" element={<Tracking/>} />

        <Route path="*" element={<Error />} />
      </Routes>
    </Router >
  );
}

export default App;

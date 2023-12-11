import React, { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Attibutes from "./steps/Attibutes";
import Test from "./components/Test";
import StepperWithContent from "./components/StepperWithContent";
import { StepContext } from "./context/StepsContext";

const App = () => {
  return (
    <>
      <Navbar></Navbar>
      <StepperWithContent></StepperWithContent>
    </>
  );
};

export default App;

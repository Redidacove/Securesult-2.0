import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
// import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Personal from "./RegdFormPages/Personal";
import Address from "./RegdFormPages/Address";
import RegdInfo from "./RegdFormPages/RegdInfo";
import { Button2, Title } from "./StyleComponents";

const steps = ["", "", ""];

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [completed, setCompleted] = React.useState({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((step, i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStep = (step) => () => {
    setActiveStep(step);
  };

  const handleComplete = () => {
    const newCompleted = completed;
    newCompleted[activeStep] = true;
    setCompleted(newCompleted);
    handleNext();
  };

  const handleReset = () => {
    setActiveStep(0);
    setCompleted({});
  };

  const SubmitForm = () => {};

  return (
    <Box sx={{ width: "100%", paddingTop: "40px" }}>
      <Title>Create Account</Title>
      <Stepper
        nonLinear
        activeStep={activeStep}
        sx={{ width: "100%", padding: "50px 50px 0px 50px" }}
      >
        {steps.map((label, index) => (
          <Step key={index} completed={completed[index]}>
            <StepButton color="inherit" onClick={handleStep(index)}>
              {label}
            </StepButton>
          </Step>
        ))}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent:"center",
                mt:30,
                padding: "20px 50px 0px 50px"
              }}
            >
              {/* <Box sx={{ flex: "1 1 auto" }} /> */}
              <Button2
                onClick={handleReset}
                color="inherit"
                sx={{ mr: 2 }}
              >
                Reset
              </Button2>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button2 onClick={SubmitForm}>Submit</Button2>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {activeStep === 0 && <Personal />}
            {activeStep === 1 && <Address />}
            {activeStep === 2 && <RegdInfo />}
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                padding: "20px 50px 0px 50px"
              }}
            >
              <Button2
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Back
              </Button2>
              <Box sx={{ flex: "1 1 auto" }} />
              {activeStep !== steps.length &&
                (completed[activeStep] ? (
                  <Typography
                    variant="caption"
                    sx={{ display: "inline-block" }}
                  ></Typography>
                ) : (
                  <Button2 onClick={handleComplete}>
                    {completedSteps() === totalSteps() - 1 ? "Finish" : "Next"}
                  </Button2>
                ))}
            </Box>
          </React.Fragment>
        )}
      </div>
    </Box>
  );
}

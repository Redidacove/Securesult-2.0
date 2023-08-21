import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Personal from "./RegdFormPages/Personal";
import Address from "./RegdFormPages/Address";
import RegdInfo from "./RegdFormPages/RegdInfo";
import { Button2, Title } from "./StyleComponents";
import { Link } from "react-router-dom";

const steps = ["", "", ""];

const initialData = {
  name: "",
  email: "",
  password: "",
  cpassword: "",
  address: "",
  state: "",
  country: "",
  pincode: "",
  rollno: "",
  regdno: "",
  year: "",
  sem: "",
};

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState(initialData);

  const clearData = () => {
    setFormData({ ...initialData });
  };

  const handleSubmitForm = () => {
    console.log("Form submitted!");
    console.log(formData);
    setActiveStep(0);
    clearData();
  };

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      handleSubmitForm();
    } else {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const PageDisplay = () => {
    if (activeStep === 0) {
      return <Personal formData={formData} setFormData={setFormData} />;
    } else if (activeStep === 1) {
      return <Address formData={formData} setFormData={setFormData} />;
    } else {
      return <RegdInfo formData={formData} setFormData={setFormData} />;
    }
  };

  return (
    <Box sx={{ width: "100%", paddingTop: "40px" }}>
      <Title>Create Account</Title>
      <Stepper
        activeStep={activeStep}
        sx={{ width: "100%", padding: "50px 50px 0px 50px" }}
      >
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={index} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {allStepsCompleted() ? (
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                mt: 30,
                padding: "20px 50px 0px 50px",
              }}
            >
              {/* <Box sx={{ flex: "1 1 auto" }} /> */}
              <Button2 onClick={handleReset} color="inherit" sx={{ mr: 2 }}>
                Reset
              </Button2>
              <Box sx={{ flex: "1 1 auto" }} />
              <Link to="/dashboard">
                <Button2 onClick={SubmitForm}>Submit</Button2>{" "}
              </Link>
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
                padding: "20px 50px 0px 50px",
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

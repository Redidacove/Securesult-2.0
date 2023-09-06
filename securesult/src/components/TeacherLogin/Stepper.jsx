import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Personal from "./RegdFormPages/Personal";
import Address from "./RegdFormPages/Address";
import RegdInfo from "./RegdFormPages/RegdInfo";
import { Button, Title } from "./StyleComponents";
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
  id: "",
  regdno: "",
};

export default function HorizontalStepper() {
  const [activeStep, setActiveStep] = React.useState(0);
  const [formData, setFormData] = React.useState(initialData);

  const clearData = () => {
    setFormData({ ...initialData });
  };

  const handleSubmitForm = async () => {
    try {
      const response = await fetch('http://localhost:5000/register_teacher', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
  
      // Handle the response as needed
    } catch (error) {
      console.error('Error submitting form:', error);
    }
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
    <Box sx={{ width: "100%", paddingTop: "30px" }}>
      <Title>Create Account</Title>
      <Stepper
        activeStep={activeStep}
        sx={{ width: "100%", padding: "30px 40px 0px 50px" }}
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
      <React.Fragment>
        {PageDisplay()}
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "30px 50px 0px 50px",
          }}
        >
          <Button
            color="inherit"
            disabled={activeStep === 0}
            onClick={handleBack}
            sx={{ mr: 1 }}
          >
            Back
          </Button>
          <Box sx={{ flex: "1 1 auto" }} />
          {activeStep === steps.length - 1 ? (
            <Link to="/dashboardTeacher">
              <Button onClick={handleNext}>Submit</Button>
            </Link>
          ) : (
            <Button onClick={handleNext}>Next</Button>
          )}
        </Box>
      </React.Fragment>
    </Box>
  );
}

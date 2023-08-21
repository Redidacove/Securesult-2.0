import React, { useState } from "react";
import Steps from "./Stepper";
import {
  Container,
  RegisterContainer,
  LoginContainer,
  OverlayContainer,
  Overlay,
  RightOverlayPanel,
  LeftOverlayPanel,
  Paragraph,
  GhostButton,
  Title,
  Form,
  Input,
  Anchor,
  Button,
} from "./StyleComponents";

function Student() {
  const [signIn, toggle] = useState(true);
  const [signinFormData, setSigninFormData] = React.useState({
    email: "",
    password: "",
  });

  const handleSubmitForm = () => {
    if (signinFormData.email !== "" && signinFormData.password !== "") {
      console.log("Login Data submitted!");
      console.log(signinFormData);
    }
  };

  return (
    <Container>
      <RegisterContainer signinIn={signIn}>
        <Steps />
      </RegisterContainer>

      <LoginContainer signinIn={signIn}>
        <Form action="/dashboard" method="GET">
          <Title>Sign in</Title>
          <Input
            type="email"
            name="email"
            value={signinFormData.email}
            onChange={(e) => {
              setSigninFormData({ ...signinFormData, email: e.target.value });
            }}
            placeholder="Email"
            required
          />
          <Input
            type="password"
            name="password"
            value={signinFormData.password}
            onChange={(e) => {
              setSigninFormData({
                ...signinFormData,
                password: e.target.value,
              });
            }}
            placeholder="Password"
            required
          />
          <Anchor href="#">Forgot your password?</Anchor>
          <Button onClick={handleSubmitForm}>Sigin In</Button>
        </Form>
      </LoginContainer>

      <OverlayContainer signinIn={signIn}>
        <Overlay signinIn={signIn}>
          <LeftOverlayPanel signinIn={signIn}>
            <Title>Welcome Back!</Title>
            <Paragraph>
              To keep connected with us please login with your personal info
            </Paragraph>
            <GhostButton onClick={() => toggle(true)}>Sign In</GhostButton>
          </LeftOverlayPanel>

          <RightOverlayPanel signinIn={signIn}>
            <Title>Hello, Student!</Title>
            <Paragraph>
              Enter Your personal details and start journey with us
            </Paragraph>
            <GhostButton onClick={() => toggle(false)}>Sigin Up</GhostButton>
          </RightOverlayPanel>
        </Overlay>
      </OverlayContainer>
    </Container>
  );
}

export default Student;

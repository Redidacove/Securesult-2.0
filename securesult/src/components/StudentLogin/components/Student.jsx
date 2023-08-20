import React from "react";
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
  const [signIn, toggle] = React.useState(true);
  return (
    <Container>
      <RegisterContainer signinIn={signIn}>
        <Steps />
      </RegisterContainer>

      <LoginContainer signinIn={signIn}>
        <Form>
          <Title>Sign in</Title>
          <Input type="email" placeholder="Email" />
          <Input type="password" placeholder="Password" />
          <Anchor href="#">Forgot your password?</Anchor>
          <Button>Sigin In</Button>
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

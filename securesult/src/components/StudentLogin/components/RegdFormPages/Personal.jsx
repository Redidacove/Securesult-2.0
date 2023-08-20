import { Input, Form } from "../StyleComponents";
// import { handleNext } from "../Stepper";

function Personal() {
  return (
    <Form>
      <h3>Personal Details</h3>
      <Input type="text" name="name" placeholder="Name" />
      <Input type="email" name="email" placeholder="Email" />
      <Input type="password" name="password" placeholder="Password" />
      <Input
        type="password"
        name="con-password"
        placeholder="Confirm Password"
      />
      {/* <Button onClick={handleNext}>Next</Button> */}
    </Form>
  );
}

export default Personal;

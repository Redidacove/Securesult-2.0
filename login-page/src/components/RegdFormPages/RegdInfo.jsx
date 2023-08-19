import { Input, Form } from "../StyleComponents";
// import { handleNext } from "../Stepper";

function RegdInfo() {
  return (
    <Form>
      <h3>Registration Details</h3>
      <Input type="text" placeholder="College Roll" />
      <Input type="text" placeholder="Regd. no" />
      <Input type="text" placeholder="year" />
      <Input type="text" placeholder="Semester" />
      {/* <Button>Next</Button> */}
    </Form>
  );
}

export default RegdInfo;

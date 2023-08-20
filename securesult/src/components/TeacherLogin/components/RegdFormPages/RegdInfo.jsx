import { Input, Form } from "../StyleComponents";
// import { handleNext } from "../Stepper";

function RegdInfo() {
  return (
    <Form>
      <h3>Registration Details</h3>
      <Input type="text" placeholder="ID no." />
      <Input type="text" placeholder="Regd. no" />
      
      {/* <Button>Next</Button> */}
    </Form>
  );
}

export default RegdInfo;

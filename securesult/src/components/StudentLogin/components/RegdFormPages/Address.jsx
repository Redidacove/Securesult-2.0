import { Input, Form } from "../StyleComponents";

function Address() {
  return (
    <Form>
      <h3>Address details</h3>
      <Input type="text" placeholder="Address" />
      <Input type="text" placeholder="State" />
      <Input type="text" placeholder="Country" />
      <Input type="type" placeholder="Pincode" />
    </Form>
  );
}

export default Address;

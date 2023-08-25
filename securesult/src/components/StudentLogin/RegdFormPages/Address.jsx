import { Input, FormDiv } from "../StyleComponents";

function Address({ formData, setFormData }) {
  return (
    <FormDiv>
      <h3>Address details</h3>
      <Input
        type="text"
        name="address"
        value={formData.address}
        onChange={(e) => {
          setFormData({ ...formData, address: e.target.value });
        }}
        placeholder="Address"
      />
      <Input
        type="text"
        name="state"
        value={formData.state}
        onChange={(e) => {
          setFormData({ ...formData, state: e.target.value });
        }}
        placeholder="State"
      />
      <Input
        type="text"
        name="country"
        value={formData.country}
        onChange={(e) => {
          setFormData({ ...formData, country: e.target.value });
        }}
        placeholder="Country"
      />
      <Input
        type="text"
        name="pincode"
        value={formData.pincode}
        onChange={(e) => {
          setFormData({ ...formData, pincode: e.target.value });
        }}
        placeholder="Pincode"
      />
    </FormDiv>
  );
}

export default Address;

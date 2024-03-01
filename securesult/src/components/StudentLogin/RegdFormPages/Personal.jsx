import { Input, FormDiv } from "../StyleComponents";

function Personal({ formData, setFormData }) {
  return (
    <FormDiv>
      <h3>Personal Details</h3>
      <Input
        type="text"
        name="name"
        value={formData.name}
        onChange={(e) => {
          setFormData({ ...formData, name: e.target.value });
        }}
        placeholder="Name"
      />
      <Input
        type="email"
        name="email"
        value={formData.email}
        onChange={(e) => {
          setFormData({ ...formData, email: e.target.value });
        }}
        placeholder="Email"
        required
      />
      <Input
        type="password"
        name="password"
        value={formData.password}
        onChange={(e) => {
          setFormData({ ...formData, password: e.target.value });
        }}
        placeholder="Password"
        required
      />
      <Input
        type="password"
        name="cpassword"
        value={formData.cpassword}
        onChange={(e) => {
          setFormData({ ...formData, cpassword: e.target.value });
        }}
        placeholder="Confirm Password"
        required
      />
    </FormDiv>
  );
}

export default Personal;

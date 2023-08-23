import { Input, FormDiv } from "../StyleComponents";

function RegdInfo({ formData, setFormData }) {
  return (
    <FormDiv>
      <h3>Registration Details</h3>
      <Input
        type="text"
        name="id"
        value={formData.id}
        onChange={(e) => {
          setFormData({ ...formData, id: e.target.value });
        }}
        placeholder="ID no."
      />
      <Input
        type="text"
        name="regdno"
        value={formData.regdno}
        onChange={(e) => {
          setFormData({ ...formData, regdno: e.target.value });
        }}
        placeholder="Regd. no"
      />
    </FormDiv>
  );
}

export default RegdInfo;

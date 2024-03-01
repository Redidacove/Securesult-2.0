import { Input, FormDiv } from "../StyleComponents";

function RegdInfo({ formData, setFormData }) {
  return (
    <FormDiv>
      <h3>Registration Details</h3>
      <Input
        type="text"
        name="rollno"
        value={formData.rollno}
        onChange={(e) => {
          setFormData({ ...formData, rollno: e.target.value });
        }}
        placeholder="Roll No"
      />
      <Input
        type="text"
        name="regdno"
        value={formData.regdno}
        onChange={(e) => {
          setFormData({ ...formData, regdno: e.target.value });
        }}
        placeholder="Regd. No"
      />
      <Input
        type="text"
        name="class"
        value={formData.class}
        onChange={(e) => {
          setFormData({ ...formData, class: e.target.value });
        }}
        placeholder="Class"
      />
      <Input
        type="text"
        name="sec"
        value={formData.sec}
        onChange={(e) => {
          setFormData({ ...formData, sec: e.target.value });
        }}
        placeholder="Section"
      />
    </FormDiv>
  );
}

export default RegdInfo;

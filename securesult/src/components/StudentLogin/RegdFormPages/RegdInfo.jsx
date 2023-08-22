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
        name="year"
        value={formData.year}
        onChange={(e) => {
          setFormData({ ...formData, year: e.target.value });
        }}
        placeholder="Year"
      />
      <Input
        type="text"
        name="sem"
        value={formData.sem}
        onChange={(e) => {
          setFormData({ ...formData, sem: e.target.value });
        }}
        placeholder="Semester"
      />
    </FormDiv>
  );
}

export default RegdInfo;

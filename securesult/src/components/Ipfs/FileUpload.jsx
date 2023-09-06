import { useState} from "react";
import axios from "axios";
import "./FileUpload.css";
import { Input } from "../StudentLogin/StyleComponents"

const FileUpload = ({ contract, account, provider }) => {

  const [file, setFile] = useState(null);
  const [studentData, setStudentData] = useState({
    class: '',
    sec: '',
    rollno: '',
    result: '',
  });
  const [hash, setHash] = useState();
  const [fileName, setFileName] = useState("No image selected");

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setStudentData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (file) {
      try {
        const formData = new FormData();
        formData.append("file", file);
        const resFile = await axios({
          method: "post",
          url: "https://api.pinata.cloud/pinning/pinFileToIPFS",
          data: formData,
          headers: {
            pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
            pinata_secret_api_key: process.env.REACT_APP_PINATA_API_SECRET,
            "Content-Type": "multipart/form-data",
          },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`;
        console.log("Your Cid1 is " + ImgHash);
        setHash(ImgHash);
        // alert("Your Cid is " + ImgHash);
        const updatedStudentData = { ...studentData, result: ImgHash };
        console.log("Your data1 is " + JSON.stringify(updatedStudentData));

        const response1 = await fetch('http://localhost:5000/teacher_dashboard', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(updatedStudentData),
        });
        if (!response1.ok) {
          throw new Error('Error sending data to route1');
        }
        console.log("done till here");

        // const signer = contract.connect(provider.getSigner());
        // signer.add(account, ImgHash);
      } catch (e) {
        alert("Unable to upload image to Pinata");
      }
    }

    alert("Successfully Image Uploaded");
    setFileName("No image selected");
    setFile(null);
  };

  const retrieveFile = (e) => {
    const data = e.target.files[0]; //files array of files object
    // console.log(data);
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(data);

    reader.onloadend = () => {
      setFile(e.target.files[0]);
    };

    setFileName(e.target.files[0].name);
    e.preventDefault();
  };
  return (
    <div className="top">
      <h1 className="text-2xl font-inter">Upload Results here</h1>
      <form className="form" onSubmit={handleSubmit}>
      <Input type="text" name="class" placeholder="Class" onChange={handleInputChange} />
        <Input type="text" name="sec" placeholder="Section" onChange={handleInputChange} />
        <Input type="text" name="rollno" placeholder="Roll no" onChange={handleInputChange} />
        <label htmlFor="file-upload" className="choose">
          Choose Image
        </label>
        <input
          disabled={!account}
          type="file"
          id="file-upload"
          name="data"
          onChange={retrieveFile}
        />
        <span className="textArea">Image: {fileName}</span>

        <button type="submit" className="upload" disabled={!file}>
          Upload
        </button>
      </form>
      <h2>{hash}</h2>
    </div>
  );
};
export default FileUpload;

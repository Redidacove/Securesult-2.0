import { useState} from "react";
import axios from "axios";
import "./FileUpload.css";
import { ethers } from 'ethers';
import abi from "./certificateabi.json"
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

  const sendresult=async()=>{
    const contractABI = abi;
    const contractAddress="0xC56D23651DC0789501EE6f290DAE56A74050D290"
    try {
      const { ethereum } = window;

      if (ethereum) {
        const account = await ethereum.request({
          method: "eth_requestAccounts",
        });

        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });

        const provider = new ethers.providers.Web3Provider(ethereum);
        const signer = provider.getSigner();
        const contract = new ethers.Contract(
          contractAddress,
          contractABI,
          signer
        );
        const Contract = new ethers.Contract("0xC56D23651DC0789501EE6f290DAE56A74050D290", abi, signer)
        const inp="https://gateway.pinata.cloud/ipfs/QmSy6JMosCj7zRhDMa6BiGfguDb1ESuJBoktbwFn29KxQE"
        // const txHash =await Contract.store(inp,71,1)
        const resultLink=await Contract.getResult(71,1)
        if(inp===resultLink){
          console.log("Yup Its working ")
        }
      } else {
        alert("Please install metamask");
      }
    } catch (error) {
      console.log(error);
    }
    
      // try{
      //       const provider = new ethers.providers.Web3Provider(window.ethereum, "any");
      //       // Prompt user for account connections
      //       const accounts=await provider.send("eth_requestAccounts", []);
      //       const signer = provider.getSigner();
      //       const Contract = new ethers.Contract("0xd9145CCE52D386f254917e481eB44e9943F39138", abi, signer)
      //       const inp="https://gateway.pinata.cloud/ipfs/QmSy6JMosCj7zRhDMa6BiGfguDb1ESuJBoktbwFn29KxQE"
      //       Contract.store(inp,71,14)
      //       const resultLink=Contract.getResult(71,14)

      //       if(inp===resultLink){
      //         console.log("Yup Its working ")
      //       }
      //       //console.log(contract);
      //       // setConnected(false);
      // }
      // catch(error){
      //       console.log(error);
      //       alert('Please Install Metamask');
      // }
}
  

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
            pinata_api_key: `${process.env.REACT_APP_PINATA_API_KEY}`,
            pinata_secret_api_key:`${process.env.REACT_APP_PINATA_API_SECRET}`,
            "Content-Type": "multipart/form-data",
          },
          //  headers: {
          //     pinata_api_key: "080adb3ef45a37cd355f",
          //     pinata_secret_api_key: "625de8a46a0e93f3f903f253c8777c662a9b318bee573de603cb26a740fb3a78",
          //     "Content-Type": "multipart/form-data",
          //   },
        });
        const ImgHash = `https://gateway.pinata.cloud/ipfs/${resFile.data.IpfsHash}`; 
        console.log("Your Cid1 is " + ImgHash);
        // sendresult(ImgHash);
        setHash(ImgHash);
        alert("Your Cid is " + ImgHash);
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
    // alert("Successfully Image Uploaded");
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
      <button onClick={sendresult}> 
        send
      </button>
      <h2>{hash}</h2>
    </div>
  );
  };


export default FileUpload;

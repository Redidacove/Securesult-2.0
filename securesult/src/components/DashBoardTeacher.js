import React from "react";
import { useState, useEffect } from "react";
import "../../src/index.css";
import Navbar from "./Navbar";
import { ethers } from "ethers";
import Upload from "./Ipfs/Upload.json";
import FileUpload from "./Ipfs/FileUpload.jsx";

const DashBoardTeacher = () => {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [provider, setProvider] = useState(null);

  useEffect(() => {
    const provider = new ethers.providers.Web3Provider(window.ethereum);

    const loadProvider = async () => {
      if (provider) {
        window.ethereum.on("chainChanged", () => {
          window.location.reload();
        });

        window.ethereum.on("accountsChanged", () => {
          window.location.reload();
        });
        await provider.send("eth_requestAccounts", []);
        const signer = provider.getSigner();
        const address = await signer.getAddress();
        setAccount(address);
        let contractAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";

        const contract = new ethers.Contract(
          contractAddress,
          Upload.abi,
          signer
        );
        console.log(contract);
        setContract(contract);
        setProvider(provider);
      } else {
        console.error("Metamask is not installed");
      }
    };
    provider && loadProvider();
  }, []);

  return (
    <div className="flex flex-row m-0">
      <Navbar />
      <p style={{ color: "white" }}>
        Account : {account ? account : "Not connected"}
      </p>
      <FileUpload
        account={account}
        provider={provider}
        contract={contract}
      ></FileUpload>

    </div>
  );
};

export default DashBoardTeacher;

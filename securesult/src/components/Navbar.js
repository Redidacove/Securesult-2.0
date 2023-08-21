import React from "react";

const Navbar = () => {

  const connectWallet =async()=>{   
    try{
      if(window.ethereum){
          const accounts = await window.ethereum.request({method:'eth_requestAccounts'});
          window.ethereum.on("chainChanged", () => {
              window.location.reload();
            });
    
            window.ethereum.on("accountsChanged", () => {
              window.location.reload();
            });
          
      }else{
          alert("Install Metamask")
      }
    }catch(error){
      console.error(error)
    }
 }


  return (
    <div className="flex flex-col justify-between bg-orange-500 w-52 h-screen text-white py-8 px-4 shadow-lg rounded-r-xl text-lg">
      <div>
        <h1 className="font-ubuntu font-bold text-2xl mb-1">Securesult</h1>
        <h2>user name</h2>
      </div>

      <div className="h-2/4">
        <ul>
          <li className="hover:text-amber-950">
            <i class="fa-solid fa-user mr-2"></i>Profile
          </li>
          <li className="my-5 hover:text-amber-950">
            <i className="fa-solid fa-table-list mr-2"></i>DashBoard
          </li>
          <li className="hover:text-amber-950">
            <i className="fa-solid fa-wallet mr-2" ></i>
            <button onClick={connectWallet}>
            Connect Wallet
            </button>
          </li>
        </ul>
      </div>
      <div>
        <h3 className="hover:text-amber-950">
          <i className="fa-solid fa-arrow-right-from-bracket mr-2"></i>Logout
        </h3>
      </div>
    </div>
  );
};

export default Navbar;

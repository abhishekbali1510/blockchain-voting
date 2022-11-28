import React from "react";
import Web3 from "web3";
import SimpleStorage from "../contracts/election.json";

export var contract;
export var myAccount;

function Connection() {
  let web3 = new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545",{mode:'cors'}));
  let abi = SimpleStorage["abi"];
  let contractAddress = SimpleStorage.networks[5777].address;

  // contract object
  contract = new web3.eth.Contract(abi, contractAddress);
  // Reterive Default Account
  function defAcc() {
    web3.eth.getAccounts().then((accounts) => {
      myAccount = accounts[0];
      console.log("my account set");
    });
  }

  defAcc();

  // Default account log
  setTimeout(() => {
    console.log(myAccount);
  }, 2000);

  return <></>;
}
export { Connection };

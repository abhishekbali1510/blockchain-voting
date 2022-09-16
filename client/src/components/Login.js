import React, { useState } from "react";
import axios from "axios";
import { contract } from "./Connection";

export default function Login() {
  const [epic, setEpic] = useState("");
  const [otp, setotp] = useState("xxxxxxxxx");
  const [userOtp, setUserOtp] = useState("");
  const [userData, setUserData] = useState("");

  async function sendOtp() {
    var data = await contract.methods.showVoterInfo(epic).call();
    console.log(data.voterEmail);
    if (data.voterEmail === "") console.log("not registered");
    else {
      setUserData(data);
      var tmpOtp = Math.floor(Math.random() * 1000000);
      console.log(tmpOtp);
      setotp(tmpOtp);
      const mailData = { mail: data.voterEmail, otp: tmpOtp };
      var res = await axios.post("http://localhost:5000/mailOtp", mailData, {});
      console.log(res);
    }
  }
  function checkVoter() {
    if (userOtp == otp) {
      console.log("VERIFIED");
      console.log(userData);
    } else {
      console.log("FAILED");
    }
  }
  // console.log(otp);
  return (
    <div>
      <br />
      <h1>Login</h1>
      <h3>
        epic id:
        <input
          type="text"
          onChange={(e) => {
            setEpic(e.target.value);
          }}
        />
        <br />
        <button onClick={sendOtp}>send otp</button>
        <br />
        otp :
        <input
          type="text"
          onChange={(e) => {
            setUserOtp(e.target.value);
          }}
        />
        <br />
        <button onClick={checkVoter}>Login</button>
      </h3>
    </div>
  );
}

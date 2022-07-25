import React,{useState} from "react";
import axios from "axios";
import {contract} from "./Connection";

export default function Login() {

  const [epic,setEpic]=useState("");

  async function sendOtp(){
      var data = await contract.methods.showVoterInfo(epic).call();
      console.log(data.voterEmail);
      var otp=Math.floor(Math.random()*1000000);
      console.log(otp);
      const mailData = {'mail':data.voterEmail,'otp':otp};
      var res=await axios.post('http://localhost:5000/mailOtp',mailData,{});
      console.log(res);
  }

  return (
    <div>
    <br/>
      <h1>Login</h1>
      <h3>

        epic id:
        <input type="text" onChange={(e)=>{setEpic(e.target.value)}} />
        <br />
      
        <button onClick={sendOtp}>send otp</button>
        <br />
      
        otp :
        <input type="text" />
        <br />

        <button>Login</button>
        </h3>

    </div>
  );
}

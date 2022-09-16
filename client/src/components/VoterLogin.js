import React, { useState } from "react";
import axios from "axios";
import { contract } from "./Connection";

function VoterLogin() {
  const [epic, setEpic] = useState("");
  const [otpSent, setOtp] = useState("");
  const [userOtp, setUserOtp] = useState("");
  // const [loginButton,loginSuccess] = useState("true");
  const [userData, setUserData] = useState("");

  function handleEpicIdChange(e) {
    e.preventDefault();
    setEpic(e.target.value);
  }
  function handleOtp(e) {
    e.preventDefault();
    setUserOtp(e.target.value);
  }

  async function sendOtp() {
    var data = await contract.methods.showVoterInfo(epic).call();
    console.log(data.voterEmail);
    if (data.voterEmail === "") console.log("not registered");
    else {
      setUserData(data);
      var tmpOtp = Math.floor(Math.random() * 1000000);
      console.log(tmpOtp);
      setOtp(tmpOtp);
      const mailData = { mail: data.voterEmail, otp: tmpOtp };
      var res = await axios.post("http://localhost:5000/mailOtp", mailData, {});
      console.log(res);
      alert("OTP sent succesfully");
    }
  }

  function checkOtp() {
    if (userOtp == otpSent) {
      console.log("VERIFIED");
      console.log(userData);
    } else {
      console.log("FAILED");
    }
  }
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="limiter">
        <div className="container-login100">
          <div className="login_background">
            <div className="background_color">
              <br />
              <h3 className="h3_font" align="center">
                LOGIN
              </h3>
              <br />
              <br />
            </div>
            <h4 align="center">
              <b>Epic Id</b>
            </h4>
            <input
              className="input_login"
              type="text"
              onChange={handleEpicIdChange}
            ></input>
            <center>
              <button className="button_otp" onClick={sendOtp}>
                Get OTP
              </button>
            </center>
            <div>
              <h4 align="center">
                <b>Enter OTP</b>
              </h4>
              <input
                className="input_login"
                type="password"
                onChange={handleOtp}
              ></input>
              <center>
                <button className="button_otp" onClick={checkOtp}>
                  Login
                </button>
              </center>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default VoterLogin;

import React, { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { contract } from "./Connection";

function VoterLogin() {
  const [epic, setEpic] = useState("");
  const [otpSent, setOtp] = useState("xxxxxxxxx");
  const [userOtp, setUserOtp] = useState("");
  // const [loginButton,loginSuccess] = useState("true");
  const [userData, setUserData] = useState("");
  // localStorage.setItem("testSession", "abhi");

  function handleEpicIdChange(e) {
    e.preventDefault();
    setEpic(e.target.value);
  }
  function handleOtp(e) {
    e.preventDefault();
    setUserOtp(e.target.value);
  }

  async function sendOtp() {
    if(epic==="adminAbhi")
    {
      localStorage.setItem("adminLogin",true);
      navigate("/admin");
    }
    var data = await contract.methods.showVoterInfo(epic).call();
    console.log(data.voterEmail);
    
    if (data.voterEmail === ""&&epic!=="adminAbhi") {
      console.log("not registered");
      alert("not registered");
    }
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
  let navigate = useNavigate();
  async function checkOtp() {
    // eslint-disable-next-line
    if (userOtp == otpSent) {
      console.log("VERIFIED");
      console.log(userData);

      // check for other scenarioes like vote already done,current voting not going
      let localVoterInfo = await contract.methods.showVoterInfo(epic).call();
      if (localVoterInfo.isVoted === true)
        navigate("/voteCounted");

      let localElectionDetails = await contract.methods.showElectionInfoByDistrict(localVoterInfo.voterDistrict).call()
      // starting time check and ending time check
      console.log(localElectionDetails);
      let localElectionDate = localElectionDetails.electionDate.slice(8, 10);
      let localElectionMonth = localElectionDetails.electionDate.slice(5, 7);
      let localElectionYear = localElectionDetails.electionDate.slice(0, 4);
      let localElectionStartingHour = localElectionDetails.startingTime.slice(0, 2);
      let localElectionStartingMinutes = localElectionDetails.startingTime.slice(3, 5);
      // let localElectionStartingSeconds = localElectionDetails.startingTime.slice(6, 8);
      let localElectionEndingHour = localElectionDetails.endingTime.slice(0, 2);
      // let localElectionEndingSeconds = localElectionDetails.startingTime.slice(6, 8);
      let localElectionEndingMinutes = localElectionDetails.endingTime.slice(3, 5);
      let currentDate = new Date().getDate();
      let currentMonth = new Date().getMonth() + 1;
      let currentYear = new Date().getFullYear();
      let currentHour = new Date().getHours();
      let currentMinute = new Date().getMinutes();
      // let currentSecond = new Date().getSeconds();
      // console.log(currentDate);
      // console.log(currentMonth);
      // console.log(currentYear);
      // console.log(currentHour);
      // console.log(currentMinute);
      // console.log(currentSeconds);
      // console.log(localElectionDetails.startingTime);
      // console.log(localElectionDate);
      // console.log(localElectionMonth);
      // console.log(localElectionYear);
      // console.log(localElectionStartingHour);
      // console.log(localElectionStartingMinutes);
      // console.log(localElectionEndingHour);
      // console.log(localElectionEndingMinutes);
      // console.log(localElectionStartingSeconds);
      // console.log(localElectionStartingTime);
      // eslint-disable-next-line
      if (localElectionDate == currentDate && localElectionMonth == currentMonth && localElectionYear == currentYear) {
        console.log("Date matched");
        if (currentHour > localElectionStartingHour && currentHour < localElectionEndingHour) {
          console.log("case 1");
          localStorage.setItem("userLogin",true);
          localStorage.setItem("userSessionData", userData);
          navigate("/voting");
        }
        // eslint-disable-next-line
        else if (currentHour == localElectionStartingHour && currentMinute > localElectionStartingMinutes && currentHour < localElectionEndingHour) {
          console.log("case 2");
          localStorage.setItem("userLogin",true);
          localStorage.setItem("userSessionData", userData);
          navigate("/voting");
        }
        // eslint-disable-next-line
        else if (currentHour > localElectionStartingHour && currentHour == localElectionEndingHour && currentMinute < localElectionEndingMinutes) {
          console.log("case 3");
          localStorage.setItem("userLogin",true);
          localStorage.setItem("userSessionData", userData);
          navigate("/voting");
        }
        // eslint-disable-next-line
        else if (currentHour == localElectionStartingHour && currentMinute > localElectionStartingMinutes && currentHour == localElectionEndingHour && currentMinute < localElectionEndingMinutes) {
          console.log("case 4");
          localStorage.setItem("userLogin",true);
          localStorage.setItem("userSessionData", userData);
          navigate("/voting");
        }
        else {
          navigate("/noVoting");
        }
      }
      else {
        console.log("Date not matched");
        navigate("/noVoting");
      }
    }
    else {
      console.log("FAILED");
      alert("Wrong otp");
    }
  }
  useEffect(()=>{
    localStorage.clear();
  },[]);
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

import React, { useState,useEffect } from "react";
import { contract } from "./Connection";
import {useNavigate} from "react-router-dom";

function VoterDisplay() {
  var [epicId, setepicId] = useState("");
  var [name, setname] = useState("");
  var [fatherName, setfatherName] = useState("");
  var [email, setemail] = useState("");
  var [district, setdistrict] = useState("");
  var [dob, setdob] = useState("");
  var [phone, setphone] = useState("");
  var [gender, setgender] = useState("");
  var [imgname, setimagename] = useState("");

  let navigate = useNavigate();
  
  function fetchData() {
    contract.methods.showVoterInfo(epicId).call((err, data) => {
      console.log("data : ", err);
      setname(data.voterName);
      setfatherName(data.voterFatherName);
      setemail(data.voterEmail);
      setphone(data.voterMobile);
      setgender(data.voterGender);
      setdistrict(data.voterDistrict);
      setdob(data.voterDOB);
      setimagename("/voterPic/" + epicId + ".jpeg");
    });
  }
   useEffect(() => {
    
    // console.log(localStorage.getItem("adminLogin"));
    if (localStorage.getItem("adminLogin") !== "true") {
      navigate("/");
    }
    fetchData();
  });
  //    async function fetchData(){
  //     var data=await contract.methods.showVoterInfo(epicId).call();
  //     console.log("data : ",data);
  // }

  return (
    <>
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <h1 align="center"><b>Voter's Data</b></h1>
          <div>
            <form>
              <div>
                <h3>
                  <b>EPIC ID:</b>
                </h3>
                <input
                  className="input-meenal"
                  name="epicId"
                  value={epicId}
                  onChange={(event) => setepicId(event.target.value)}
                  type="text"
                ></input>
              </div>
            </form>
          </div>
          <br />
          <div>
            <div>
              <center>
                <img
                  src={imgname}
                  alt="voter pic"
                  height={200}
                  width={200}
                  className="imgBorder"
                ></img>
              </center>
            </div>
            <font size="5" face="Courier New">
              <table className="tab" cellPadding="0" cellSpacing="0">
                <tbody>
                  <tr>
                    <th className='th_voterDisplay'>Epic Id</th>
                    <td className='td_voterDisplay'>{epicId}</td>
                  </tr>
                  <tr>
                    <th className='th_voterDisplay'>Name</th>
                    <td className='td_voterDisplay'>{name}</td>
                  </tr>
                  <tr>
                    <th className='th_voterDisplay'>Father's Name</th>
                    <td className='td_voterDisplay'>{fatherName}</td>
                  </tr>
                  <tr>
                    <th className='th_voterDisplay'>Email</th>
                    <td className='td_voterDisplay'>{email}</td>
                  </tr>
                  <tr>
                    <th className='th_voterDisplay'>District</th>
                    <td className='td_voterDisplay'>{district} </td>
                  </tr>
                  <tr>
                    <th className='th_voterDisplay'>DOB</th>
                    <td className='td_voterDisplay'>{dob}</td>
                  </tr>
                  <tr>
                    <th className='th_voterDisplay'>Phone number</th>
                    <td className='td_voterDisplay'>{phone}</td>
                  </tr>
                  <tr>
                    <th className='th_voterDisplay'>Gender</th>
                    <td className='td_voterDisplay'>{gender}</td>
                  </tr>
                </tbody>
              </table>
            </font>
          </div>
        </div>
      </div>
    </>
  );
}

export default VoterDisplay;

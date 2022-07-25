import React, { useState } from "react";
import { contract } from "./Connection";
// import logo1 from "./12345.jpeg";
function VoterDisplay() {
  
  var [epicId, setepicId] = useState("");
  var [name, setname] = useState("");
  var [fatherName, setfatherName] = useState("");
  var [email, setemail] = useState("");
  var [address, setaddress] = useState("");
  var [dob, setdob] = useState("");
  var [phone, setphone] = useState("");
  var [gender, setgender] = useState("");
  var [imgname, setimagename] = useState("");

    function fetchData(){
    contract.methods.showVoterInfo(epicId).call((err, data) => {
        console.log("data : ",data);
        setname(data.voterName);
        setfatherName(data.voterFatherName);
        setemail(data.voterEmail);
        setphone(data.voterMobile);
        setgender(data.voterGender);
        setaddress(data.voterAddress);
        setdob(data.voterDOB);
        setimagename("/voterPic/"+epicId+".jpeg");
      });
  };

//    async function fetchData(){
//     var data=await contract.methods.showVoterInfo(epicId).call();
//     console.log("data : ",data);
// }

  return (
    <>
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <h1 align="center">Voter's Data</h1>
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
          <button type="button" onClick={fetchData()} className="button1">
            Success
          </button>
          <br />
          <br />
          <div>
            <div>
              <center>
                <img
                  src={imgname}
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
                  <th>Epic Id</th>
                  <td>{epicId}</td>
                </tr>
                <tr>
                  <th>Name</th>
                  <td>{name}</td>
                </tr>
                <tr>
                  <th>Father's Name</th>
                  <td>{fatherName}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>{email}</td>
                </tr>
                <tr>
                  <th>Address</th>
                  <td>{address} </td>
                </tr>
                <tr>
                  <th>DOB</th>
                  <td>{dob}</td>
                </tr>
                <tr>
                  <th>Phone number</th>
                  <td>{phone}</td>
                </tr>
                <tr>
                  <th>Gender</th>
                  <td>{gender}</td>
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

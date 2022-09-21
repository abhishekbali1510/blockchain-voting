import React, { useState } from "react";
import vote from "../voted.png";
import vote_logo from "../vote_logo.png";
import {contract} from "./Connection";
import {useEffect} from "react";
import { ReactSession } from 'react-client-session';

function Voting() {
  const [vot, setVoter] = useState();
  const [totalCandidates, setTotalCandidates] = useState(0);
  
  async function fetchTotalCandidates(){
    setTotalCandidates(await contract.methods.totalCandidates().call());
  }
  
  async function fetchAllCandidates()
  {
    
    for(let i=0;i<await contract.methods.totalCandidates().call();i++)
    {
      let data=await contract.methods.fetchCandidateByIndex(i).call();
      console.log(data.candidateName)
    }
    
  }
  function onChangeValue(event) {
    setVoter(event.target.value);
    console.log(event.target.value);
  }

  // console.log(ReactSession.get("userData"));
  // console.log(sessionStorage.getItem("name"));
  useEffect(()=>{
    fetchTotalCandidates();
    fetchAllCandidates();

    
  },[]);


  return (
    <div className="back_color">
      <img className="logoVoting" src={vote_logo}></img>
      <div className="infor">
        <b>
          <i>{totalCandidates}</i><br/>
        </b>
        <b> NAME: {ReactSession.get("userData")}</b>
        <br />
        <b>EPIC ID: 03322140</b>
      </div>
      <br />
      <br />
      <br />
      <center>
        {" "}
        <font face="Serif" size="6">
          {" "}
          CHOOSE THE PARTY FOR VOTING
        </font>
      </center>
      <div className="table">
        <tr>
          <font face="Bedrock" size="5">
            {" "}
            <th>PARTY</th>
          </font>
          <th>
            <font face="Bedrock" size="5">
              {" "}
              VOTE
            </font>
          </th>
        </tr>
        <tr>
          <center>
            <td>
              <img src={vote} height={100} width={100} alt="P1"></img>
            </td>
          </center>
          <td className="wid">
            <input
              type="radio"
              value="P1"
              name="vot"
              onChange={onChangeValue}
              checked={vot === "P1"}
            ></input>
          </td>
        </tr>
        <tr>
          <center>
            <td>
              <img src={vote} height={100} width={100} alt="P2"></img>
            </td>
          </center>
          <td className="wid">
            <input
              type="radio"
              value="P2"
              name="vot"
              onChange={onChangeValue}
              checked={vot === "P2"}
            ></input>
          </td>
        </tr>
        <tr>
          <center>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <td>
              <button type="submit" className="button_V">
                Submit
              </button>
            </td>
          </center>
        </tr>
      </div>
    </div>
  );
}
export default Voting;

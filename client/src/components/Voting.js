import React, { useState } from "react";
import vote1 from "../voted.png";
import vote_logo from "../vote_logo.png";
import vote_logo2 from "../vote_logo2.png";
import { contract, myAccount } from "./Connection";
import { useEffect } from "react";
// import { ReactSession } from 'react-client-session';

function Voting() {
  const [vot, setVoter] = useState();
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [allCandidates, setAllCandidates] = useState([]);
  const [allCandidatesDisplayData, setAllCandidatesDisplayData] = useState([]);

  async function fetchTotalCandidates() {
    setTotalCandidates(await contract.methods.totalCandidates().call());
    console.log(localStorage.getItem("userSessionData"));
  }


  function onChangeValue(event) {
    setVoter(event.target.value);
    console.log(event.target.value);

  }

  function showlogcandidates() {
    console.log(allCandidates);
  }

  function vote() {
    contract.methods
      .increaseVote(
        vot
      )
      .send({ from: myAccount, gas: 800000 });
    console.log("Voted");

  }
  // console.log(ReactSession.get("userData"));
  // console.log(sessionStorage.getItem("name"));
  function allCandidatesDisplay() {
    setAllCandidatesDisplayData(allCandidates.filter(function (elem) {
      return elem.id != "";
  }).map((elem) => {
      return (
        <>
          <tr className="row_spacing">
            <center>
              <td>
                <img src={vote_logo2} height={100} width={100} alt="P2"></img>
                <b>{elem.candidateName}</b>
              </td>
            </center>
            <td className="wid">
              <input
                className="input_width"
                type="radio"
                value={elem.id}
                name="vot"
                onChange={onChangeValue}
                checked={vot === elem.id}
              ></input>
            </td>
          </tr>
        </>
      )
    }));

  }
  useEffect(() => {
    async function fetchAllCandidates() {

      for (let i = 0; i < await contract.methods.totalCandidates().call(); i++) {
        let localData = await contract.methods.fetchCandidateByIndex(i).call();
        setAllCandidates((prevState) => [...prevState, localData])
      }
    }


    fetchTotalCandidates();
    fetchAllCandidates();

  }, []);

  useEffect(() => {

    showlogcandidates();


  }, [allCandidates]);

  setTimeout(() => {
    allCandidatesDisplay();
  }, showlogcandidates);
  return (
    <div className="back_color">
      <img className="logoVoting" src={vote_logo}></img>
      <div className="infor">
        <b>
          <i>{totalCandidates}</i><br />
        </b>
        {/*<b> NAME: {localStorage.getItem("userSessionData").split(',')[1]}</b>
        <br />
  <b>EPIC ID: {localStorage.getItem("userSessionData").split(',')[0]}</b>*/}
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
      <div className="table1">
        <tr>
          <font face="Bedrock" size="5">
            {" "}
            <th>PARTY </th>
          </font>
          <th>
            <font face="Bedrock" size="5">
              {" "}
              VOTE
            </font>
          </th>
        </tr>

        {/* <tr className="row_spacing">
          <center>
            <td>
              <img src={vote1} height={100} width={100} alt="P1"></img>
              <b>P1</b>
            </td>
          </center>
          <td className="wid">
            <input
              className="input_width"
              type="radio"
              value="P1"
              name="vot"
              onChange={onChangeValue}
              checked={vot === "P1"}
            ></input>
          </td>
        </tr> */}

        {allCandidatesDisplayData}

        <tr>
          <center>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <td>
              <button type="submit" className="button_V" onClick={vote}>
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

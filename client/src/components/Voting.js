import React, { useState } from "react";
import vote_logo from "../vote_logo.png";
import vote_logo2 from "../vote_logo2.png";
import { contract, myAccount } from "./Connection";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

function Voting() {
  const [vot, setVoter] = useState();
  const [totalCandidates, setTotalCandidates] = useState(0);
  const [allCandidates, setAllCandidates] = useState([]);
  const [allCandidatesDisplayData, setAllCandidatesDisplayData] = useState([]);
  const navigate = useNavigate();

  async function fetchTotalCandidates() {
    setTotalCandidates(await contract.methods.totalCandidates().call());
    console.log(localStorage.getItem("userSessionData"));
  }


  function onChangeValue(event) {
    setVoter(event.target.value);
    console.log(event.target.value);
    // console.log(vot);

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

    contract.methods
      .voterVoted(localStorage.getItem("userSessionData").split(",")[0])
      .send({ from: myAccount, gas: 800000 });
    console.log("Voted");
    navigate("/voteCounted");

  }
  // console.log(ReactSession.get("userData"));
  // console.log(sessionStorage.getItem("name"));
  function allCandidatesDisplay() {
    setAllCandidatesDisplayData(allCandidates.filter(function (elem) {
      // eslint-disable-next-line
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
    if (localStorage.getItem("userLogin") !== "true")
      navigate("/");
    // eslint-disable-next-line
    if (localStorage.getItem("userSessionData").split(",")[8] == "true")
      navigate("/voteCounted");
    async function fetchAllCandidates() {

      for (let i = 0; i < await contract.methods.totalCandidates().call(); i++) {
        let localData = await contract.methods.fetchCandidateByIndex(i).call();
        // if localData.district === user district
        // eslint-disable-next-line
        if (localData.candidateDistrict == localStorage.getItem("userSessionData").split(",")[6])
          setAllCandidates((prevState) => [...prevState, localData]);
      }
    }


    fetchTotalCandidates();
    fetchAllCandidates();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    allCandidatesDisplay();
    showlogcandidates();

    // eslint-disable-next-line
  }, [allCandidates,vot]);

  // setTimeout(() => {

  // }, showlogcandidates);
  return (
    <div className="back_color">
      <img className="logoVoting" alt="voting logo" src={vote_logo}></img>
      <div className="infor">
        <b>
          <br />
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

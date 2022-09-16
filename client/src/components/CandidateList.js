import React from "react";
import Voted from "./Voted";
import novote from "./novote.png";
function CandidateList() {
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <center>
          <h1>
            <b>Choose your candidate</b>
          </h1>
        </center>
        <hr width="700px"></hr>
        <br />
        <br />
        <div>
          <form>
            <div className="show">
              <h3>Party name:</h3>
              <br></br>
              <center>
                <img src={novote} height="300px" width="200px"></img>
                <br />
              </center>
              <center>
                <button className="button2">Vote</button>{" "}
              </center>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
export default CandidateList;

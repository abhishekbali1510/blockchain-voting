import React from "react";
import vote from "./novote.png";
function NoVoting() {
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div>
          <br></br>
          <br />
          <br />
          <br />
          <br />
          <br />
          <center>
            <img src={vote} height={300} width={400}></img>
          </center>
          <h1 align="center">
            <i>NO VOTING RIGHT NOW!</i>
          </h1>
        </div>
      </div>
    </div>
  );
}
export default NoVoting;

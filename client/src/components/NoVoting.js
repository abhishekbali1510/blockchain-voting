import React from "react";
function NoVoting() {
  let novoteimg="/Images/novote.png";
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        <div>
          <br />
          <br />
          <br />
          <br />
          <center> 
		<h1 style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}><b>SORRY!</b></h1>
            <img src={novoteimg} alt="no voting" height={500} width={800}></img>
          </center>
          <h1 align="center" style={{fontFamily: "Roboto, Helvetica, Arial, sans-serif"}}>
            NO VOTING RIGHT NOW!
          </h1>
        </div>
      </div>
    </div>
  );
}
export default NoVoting;

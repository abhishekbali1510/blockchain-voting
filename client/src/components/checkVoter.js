import React, { useState } from "react";
import { useEffect } from "react";
import { contract } from "./Connection";
function CheckVoter() {
  async function fetchdata() {
    var data=await contract.methods.showVoterInfo(epic).call();
    console.log("data:",data);
    if(data.epic!=="")
    {
        setmail(data.voterEmail);
    }
    else
    {
        setmail("not exist");
    }
  }
  const [epic, setepic] = useState("");
  const [mail, setmail] = useState("");
  useEffect(()=>{
    fetchdata()
  })
  return (
    <div>
      hello
      <input type="text" onChange={(e) => setepic(e.target.value)}></input>
      {/* {fetchdata()} */}
      {mail}
    </div>
  );
}
export default CheckVoter;

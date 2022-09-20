import React, { useState } from "react";
import { useEffect } from "react";
import { contract } from "./Connection";
function CheckVoter() {
  async function fetchdata() {
    var data=await contract.methods.showCandidateInfo(uniq_id).call();
    console.log("data:",data);
    if(data.uniq_id!=="") 
    {
        setmail(data.voterEmail);
    }
    else
    {
        setmail("not exist");
    }
  }
  const [uniq_id, setepic] = useState("");
  const [mail, setmail] = useState("");
  useEffect(()=>{
    fetchdata()
  });
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

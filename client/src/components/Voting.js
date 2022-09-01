import React, { useState } from 'react'
import vote from './voted.png'
import vote_logo from './vote_logo.png'
import VotingDesign from './VotingDesign.css'
function Voting() {
     const [vot, setVoter] = useState();
     function onChangeValue(event) {
       setVoter(event.target.value);
       console.log(event.target.value);
     }
  return (
    <div class='back_color'>
       <img class="logoVoting" src={vote_logo} ></img>
        <div className='infor'>
          <b><i>VOTER'S INFORMATION</i></b>
           <b> NAME: MEENAL SINGH</b>
           <br/><b>EPIC ID: 03322140</b>
        </div>
        <br/><br/><br/>
        <center> <font  face = "Serif" size = "6"> CHOOSE THE PARTY FOR VOTING</font></center>
        <div class="table">
         <tr>
         <font  face = "Bedrock" size = "5"> <th>PARTY</th></font>
          <th><font  face = "Bedrock" size = "5"> VOTE</font></th>
         </tr>
         <tr>
         <center><td><img src={vote} height={100} width={100} alt="P1"></img></td></center>
         <td className='wid'><input
          type="radio" 
          value="P1" 
          name="vot" 
          onChange={onChangeValue}
          checked={vot==="P1"} >
          </input></td>
         </tr>
         <tr>
         <center><td><img src={vote} height={100} width={100} alt="P2"></img></td></center>
         <td className='wid'><input 
         type="radio" 
         value="P2" 
         name="vot" 
         onChange={onChangeValue}
         checked={vot==="P2"} >
          </input></td>
         </tr>
         <tr>
         <center>&nbsp;&nbsp;&nbsp;&nbsp;<td><button type="submit" className='button_V'>Submit</button></td></center>
         </tr>
        </div>
        </div>
  )
}
export default Voting;
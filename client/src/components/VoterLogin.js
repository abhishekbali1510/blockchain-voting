import './VoterLogin.css'
import React, { useState } from "react";
function VoterLogin() {
	const [epic_id, setEpic] = useState("");
    const [otp, setOtp] = useState("");
	const [otpSent,otpSent1] = useState("true");
	const [loginButton,loginSuccess] = useState("true");
	function handleEpicIdChange(e) {
		e.preventDefault();
		setEpic(e.target.value);
	};
	function handleOtp(e) {
		e.preventDefault();
		setOtp(e.target.value);
	};
  return (
	<div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
		<div class="limiter">
	<div class="container-login100">
		<div class="login_background">
				<div class="background_color">
			    <br/>
				<h3 class="h3_font" align="center">LOGIN</h3>
				<br/><br/>
				</div>
				<h4 align="center"><b>Epic Id</b></h4>
				<input class="input_login" type="text" value={epic_id} onChange={handleEpicIdChange}></input>
				<center><button class="button_otp" value={otpSent} onClick={()=>otpSent(alert("OTP sent succesfully"))}>Get OTP</button></center>
				<div>
				<h4 align="center"><b>Enter OTP</b></h4>
				<input class="input_login" type="password" value={otp} onChange={handleOtp}></input>
				<center><button class="button_otp" value={loginButton} onClick={()=>loginSuccess(alert("Login sucessful"))} >Login</button></center>
				</div>
		</div>
	</div>
</div>
        </div>
 
  )
}
export default VoterLogin;
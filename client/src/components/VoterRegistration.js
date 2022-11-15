import React, { Component } from "react";
import { contract, myAccount } from "./Connection";
import axios from "axios";
// import { useNavigate } from "react-router-dom";

class VoterRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      father_first_name: "",
      father_last_name: "",
      Epic_id: "",
      email: "",
      district: "",
      dob: "",
      area_code: "",
      phone: "",
      gender: "male",
      selectedFile: null,
    };
    // let navigate = useNavigate();
    // if (localStorage.getItem("adminLogin") !== true) {
    //   navigate("/");
    // }
  }

  handleFirstNameChange = (event) => {
    this.setState({ first_name: event.target.value });
  };
  handleLastNameChange = (event) => {
    this.setState({ last_name: event.target.value });
  };
  handleFatherFirstNameChange = (event) => {
    this.setState({ father_first_name: event.target.value });
  };
  handleFatherLastNameChange = (event) => {
    this.setState({ father_last_name: event.target.value });
  };
  handleEpicChange = (event) => {
    this.setState({ Epic_id: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleAddressChange = (event) => {
    this.setState({ district: event.target.value });
  };
  handleDobChange = (event) => {
    this.setState({ dob: event.target.value });
  };
  handleAreaChange = (event) => {
    this.setState({ area_code: event.target.value });
  };
  handlePhoneChange = (event) => {
    this.setState({ phone: event.target.value });
  };
  handleGChange = (event) => {
    this.setState({ gender: event.target.value });
  };

  handleimageChange = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    // console.log(this.state);
    var name = this.state.first_name + " " + this.state.last_name;
    var fatherName =
      this.state.father_first_name + " " + this.state.father_last_name;
    var mobile = this.state.area_code + this.state.phone;

    // send registration  mail to voter
    const votermail = { mail: this.state.email };
    axios
      .post("http://localhost:5000/mail", votermail, {})
      .then((res) => console.log(res));

    // send image to folder
    const data = new FormData();
    data.append("file", this.state.selectedFile);
    data.append("name", this.state.Epic_id);
    console.log(this.state.selectedFile);
    let url = "http://localhost:8080/upload.php";

    axios.post(url, data, {}).then((res) => {
      console.log(res);
    });

    // send data to blockchain
    contract.methods
      .registerVoter(
        this.state.Epic_id,
        name,
        fatherName,
        this.state.email,
        mobile,
        this.state.dob,
        this.state.district,
        this.state.gender
      )
      .send({ from: myAccount, gas: 800000 });
    console.log("data sent");
    alert("Voter Registered !!");
  };

  render() {
    return (
      <>
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
          <div className="wrapper wrapper--w790">
            <div className="card card-5">
              <div className="card-heading">
                <h2 className="title">Voter Registration Form</h2>
              </div>
              <div className="card-body">
                <form method="POST" onSubmit={this.handleSubmit}>
                  <div className="form-row">
                    <div className="name">Epic Id</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-5 input-meenal"
                          type="text"
                          value={this.state.Epic_id}
                          onChange={this.handleEpicChange}
                          name="Epic_id"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-row m-b-55">
                    <div className="name">Name</div>
                    <div className="value">
                      <div className="row row-space">
                        <div className="col-2">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5 input-meenal"
                              type="text"
                              value={this.state.first_name}
                              onChange={this.handleFirstNameChange}
                              name="first_name"
                            ></input>
                            <label className="label--desc">first name</label>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5 input-meenal"
                              type="text"
                              value={this.state.last_name}
                              onChange={this.handleLastNameChange}
                              name="last_name"
                            ></input>
                            <label className="label--desc">last name</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row m-b-55">
                    <div className="name">Father's Name</div>
                    <div className="value">
                      <div className="row row-space">
                        <div className="col-2">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5 input-meenal"
                              type="text"
                              value={this.state.father_first_name}
                              onChange={this.handleFatherFirstNameChange}
                              name="first_name"
                            ></input>
                            <label className="label--desc">first name</label>
                          </div>
                        </div>
                        <div className="col-2">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5 input-meenal"
                              type="text"
                              value={this.state.father_last_name}
                              onChange={this.handleFatherLastNameChange}
                              name="last_name"
                            ></input>
                            <label className="label--desc">last name</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Email</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-5 input-meenal"
                          type="email"
                          value={this.state.email}
                          onChange={this.handleEmailChange}
                          name="email"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">District</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-5 input-meenal"
                          type="text"
                          value={this.state.district}
                          onChange={this.handleAddressChange}
                          name="district"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">DOB</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-5 input-meenal"
                          type="date"
                          value={this.state.dob}
                          onChange={this.handleDobChange}
                          name="dob"
                        ></input>
                      </div>
                    </div>
                  </div>
                  <div className="form-row m-b-55">
                    <div className="name">Phone</div>
                    <div className="value">
                      <div className="row row-refine">
                        <div className="col-3">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5 input-meenal"
                              type="text"
                              value={this.state.area_code}
                              onChange={this.handleAreaChange}
                              name="area_code"
                            ></input>
                            <label className="label--desc">Area Code</label>
                          </div>
                        </div>
                        <div className="col-9">
                          <div className="input-group-desc">
                            <input
                              className="input--style-5 input-meenal"
                              type="text"
                              value={this.state.phone}
                              onChange={this.handlePhoneChange}
                              name="phone"
                            ></input>
                            <label className="label--desc">Phone Number</label>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Gender</div>
                    <div className="value">
                      <div className="input-group">
                        <div className="rs-select2 js-select-simple select--no-search">
                          <select
                            name="subject"
                            value={this.state.gender}
                            onChange={this.handleGChange}
                          >
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                            <option value="other">Other</option>
                          </select>
                          <div className="select-dropdown"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="name">Image</div>
                    <div className="value">
                      <div className="input-group">
                        <input
                          className="input--style-5"
                          type="file"
                          // value={this.state.selectedFile}
                          onChange={this.handleimageChange}
                          name="image"
                        ></input>
                        <br />
                      </div>
                    </div>
                  </div>
                  <div>
                    <button
                      className="btn btn--radius-2 btn--red"
                      type="submit"
                    >
                      Register
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </>
    );
  }
}

export default VoterRegistration;

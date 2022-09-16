import React, { Component } from "react";
import { contract, myAccount } from "./Connection";
import axios from "axios";

class CandidateRegistration extends Component {
  constructor(props) {
    super(props);
    this.state = {
      first_name: "",
      last_name: "",
      Uniq_id: "",
      email: "",
      address: "",
      fatherName: "",
      dob: "",
      partyName: "",
      area_code: "",
      phone: "",
      gender: "",
      image: null,
      symbol: null,
    };
  }
  handleUsernameChange = (event) => {
    this.setState({ first_name: event.target.value });
  };
  handleNameChange = (event) => {
    this.setState({ last_name: event.target.value });
  };
  handleUniqChange = (event) => {
    this.setState({ Uniq_id: event.target.value });
  };
  handleEmailChange = (event) => {
    this.setState({ email: event.target.value });
  };
  handleAddressChange = (event) => {
    this.setState({ address: event.target.value });
  };
  handleFnameChange = (event) => {
    this.setState({ fatherName: event.target.value });
  };
  handlePartyNameChange = (event) => {
    this.setState({ partyName: event.target.value });
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
    this.setState({ image: event.target.files[0] });
  };
  handleSymbolChange = (event) => {
    this.setState({ symbol: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    // console.log(this.state);
    var name = this.state.first_name + " " + this.state.last_name;

    // send registration  mail to candidate
    const candidateMail = { mail: this.state.email };
    axios
      .post("http://localhost:5000/candidateMail", candidateMail, {})
      .then((res) => console.log(res));

    // send image to folder
    const data = new FormData();
    data.append("fileImage", this.state.image);
    data.append("fileSymbol", this.state.symbol);
    data.append("name", this.state.Uniq_id);
    console.log(this.state.selectedFile);
    let url = "http://localhost:8080/candidateUpload.php";

    axios.post(url, data, {}).then((res) => {
      console.log(res);
    });

    // send data to blockchain
    contract.methods
      .registerCandidate(
        this.state.Uniq_id,
        name,
        this.state.partyName,
        this.state.email,
        this.state.fatherName,
        this.state.phone,
        this.state.address,
        this.state.dob,
        this.state.gender
      )
      .send({ from: myAccount, gas: 800000 });
    console.log("Candidate data sent");
  };

  render() {
    return (
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
          <div className="card card-5">
            <div className="card-heading">
              <h2 className="title">Candidate Registration Form</h2>
            </div>
            <div className="card-body">
              <form method="POST" onSubmit={this.handleSubmit}>
                <div className="form-row m-b-55">
                  <div className="name">Name</div>
                  <div className="value">
                    <div className="row row-space">
                      <div className="col-2">
                        <div className="input-group-desc">
                          <input
                            className="input--style-5"
                            type="text"
                            value={this.state.first_name}
                            onChange={this.handleUsernameChange}
                            name="first_name"
                            required
                          ></input>
                          <label className="label--desc">first name</label>
                        </div>
                      </div>
                      <div className="col-2">
                        <div className="input-group-desc">
                          <input
                            className="input--style-5"
                            type="text"
                            value={this.state.last_name}
                            onChange={this.handleNameChange}
                            name="last_name"
                          ></input>
                          <label className="label--desc">last name</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Uniq Id</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="text"
                        value={this.state.Uniq_id}
                        onChange={this.handleUniqChange}
                        name="Uniq_id"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Email</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="email"
                        value={this.state.email}
                        onChange={this.handleEmailChange}
                        name="email"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Address</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="address"
                        value={this.state.address}
                        onChange={this.handleAddressChange}
                        name="address"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Father's Name</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="text"
                        value={this.state.fatherName}
                        onChange={this.handleFnameChange}
                        name="fatherName"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">DOB</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="date"
                        value={this.state.dob}
                        onChange={this.handleDobChange}
                        name="dob"
                        required
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
                            className="input--style-5"
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
                            className="input--style-5"
                            type="text"
                            value={this.state.phone}
                            onChange={this.handlePhoneChange}
                            name="phone"
                            required
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
                        <select name="subject">
                          <option
                            value={this.state.gender}
                            onChange={this.handleGChange}
                            name="gender"
                            required
                          >
                            Choose option
                          </option>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Other</option>
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
                        onChange={this.handleimageChange}
                        name="image"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Party Name</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="text"
                        value={this.state.partyName}
                        onChange={this.handlePartyNameChange}
                        name="partyName"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="form-row">
                  <div className="name">Party Symbol</div>
                  <div className="value">
                    <div className="input-group">
                      <input
                        className="input--style-5"
                        type="file"
                        onChange={this.handleSymbolChange}
                        name="symbol"
                        required
                      ></input>
                    </div>
                  </div>
                </div>
                <div>
                  <button className="btn btn--radius-2 btn--red" type="submit">
                    Register
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    );
  }
}

export default CandidateRegistration;

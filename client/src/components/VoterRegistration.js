
import './App.css';

import React, {Component } from 'react'

class VoterRegistration extends Component {
  constructor(props){
    super(props);
    this.state={
      first_name:'',
      last_name:'',
      Epic_id:'',
      email:'',
      address:'',
      dob:'',
      area_code:'',
      phone:'',
      gender:'',
      selectedFile:null
    }
  }
handleUsernameChange=(event)=>{
    this.setState({first_name: event.target.value})
}
handleNameChange=(event)=>{
    this.setState({last_name: event.target.value})
}
handleEpicChange=(event)=>{
    this.setState({Epic_id: event.target.value})
}
handleEmailChange=(event)=>{
    this.setState({email: event.target.value})
}
handleAddressChange=(event)=>{
    this.setState({address: event.target.value})
}
handleDobChange=(event)=>{
    this.setState({dob: event.target.value})
}
handleAreaChange=(event)=>{
    this.setState({area_code: event.target.value})
}
handlePhoneChange=(event)=>{
    this.setState({phone: event.target.value})
}
handleGChange=(event)=>{
    this.setState({gender: event.target.value})
}/*
handleSubmit= event =>{
    event.preventDefault();
}
handleimageChange = event =>{
    this.setState({selectedFile:event.target.files[0]})
}
handleimage=event=>{
    event.preventDefault();
    console.log(this.state.selectedFile)
}
onFileUpload = () => {
    
    // Create an object of formData
    const formData = new FormData();
  
    // Update the formData object
    formData.append(
      "myFile",
      this.state.selectedFile,
      this.state.selectedFile.name
    );
    console.log(this.state.selectedFile);
}*/
 render(){
    return (
      <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
          <div className="card card-5">
              <div className="card-heading">
                  <h2 className="title">Voter Registration Form</h2>
              </div>
              <div className="card-body">
                  <form method="POST" onSubmit={this.handleSubmit}>
                      <div className="form-row m-b-55">
                          <div className="name">Name</div>
                          <div className="value">
                              <div className="row row-space">
                                  <div className="col-2">
                                      <div className="input-group-desc">
                                          <input className="input--style-5" type="text" value={this.state.first_name} onChange={this.handleUsernameChange} name="first_name" required></input>
                                          <label className="label--desc">first name</label>
                                      </div>
                                  </div>
                                  <div className="col-2">
                                      <div className="input-group-desc">
                                          <input className="input--style-5" type="text" value={this.state.last_name} onChange={this.handleNameChange} name="last_name"></input>
                                          <label className="label--desc">last name</label>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                      <div className="form-row">
                          <div className="name">Epic Id</div>
                          <div className="value">
                              <div className="input-group">
                                  <input className="input--style-5" type="text" value={this.state.Epic_id} onChange={this.handleEpicChange} name="Epic_id" required></input>
                              </div>
                          </div>
                      </div>
                      <div className="form-row">
                          <div class="name">Email</div>
                          <div class="value">
                              <div className="input-group">
                                  <input className="input--style-5" type="email" value={this.state.email} onChange={this.handleEmailChange} name="email" required></input>
                              </div>
                          </div>
                      </div>
                      <div className="form-row">
                          <div className="name">Address</div>
                          <div className="value">
                              <div className="input-group">
                                  <input className="input--style-5" type="address" value={this.state.address} onChange={this.handleAddressChange} name="address" required></input>
                              </div>
                          </div>
                      </div>
                      <div className="form-row">
                          <div className="name">DOB</div>
                          <div className="value">
                              <div className='input-group'>
                                  <input className='input--style-5' type="date" value={this.state.dob} onChange={this.handleDobChange} name="dob" required></input>
                              </div>
                          </div>
                      </div>
                      <div className="form-row m-b-55">
                          <div className="name">Phone</div>
                          <div className="value">
                              <div className="row row-refine">
                                  <div className="col-3">
                                      <div className="input-group-desc">
                                         <input className="input--style-5" type="text" value={this.state.area_code} onChange={this.handleAreaChange} name="area_code"></input>
                                          <label className="label--desc">Area Code</label>
                                      </div>
                                  </div>
                                  <div className="col-9">
                                      <div className="input-group-desc">
                                          <input className="input--style-5" type="text" value={this.state.phone} onChange={this.handlePhoneChange} name="phone" required></input>
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
                                          <option  value={this.state.gender} onChange={this.handleGChange} name="gender" required>Choose option</option>
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
                              <div className='input-group'>
                                  <input className='input--style-5' type="file" value={this.state.selectedFile} onChange={this.handleimageChange} name="image"></input>
                                  <br/><form onSubmit={this.handleimage}><button type="submit" className='button1' required>Upload</button></form>
                              </div>
                          </div>
                      </div>
                      <div>
                          <button className="btn btn--radius-2 btn--red" type="submit">Register</button>
                      </div>
                  </form>
              </div>
          </div>
      </div>
      <div>
       
      </div>
  </div>

    );
  }
  }
  
  export default VoterRegistration;
  
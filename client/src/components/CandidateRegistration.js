import React from "react";
import { useState, useEffect } from "react";
import { contract, myAccount } from "./Connection";
import axios from "axios";

function CandidateRegister() {
    const initialValues = {
        first_name: "", last_name: "", father_first_name: "", father_last_name: "",
        Uniq_id: "", email: "", district: "", dob: "", phone: "", gender: "", pname: ""
    };

    const [selectedFile, setSelectedFile] = useState(null);
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);

   const handleimageChange = (event) => {
    setSelectedFile(event.target.files[0]);
     };


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        console.log(formValues);
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));

        // send registration  mail to candidate
        const candidateMail = { mail: formValues.email };
        axios
            .post("http://192.168.0.112:5000/candidateMail", candidateMail, {})
            .then((res) => console.log(res));

        // send image to folder
        const data = new FormData();
        // data.append("fileImage", this.state.image);
        // data.append("fileSymbol", this.state.symbol);
        data.append("name", formValues.Uniq_id);
        // console.log(this.state.selectedFile);
        let url = "http://192.168.0.112:8080/candidateUpload.php";

        axios.post(url, data, {}).then((res) => {
            console.log(res);
        });

        let name = formValues.first_name + " " + formValues.last_name;
        let fatherName = formValues.father_first_name + " " + formValues.father_last_name;
        // send data to blockchain
        contract.methods
            .registerCandidate(
                formValues.Uniq_id,
                name,
                formValues.pname,
                formValues.email,
                fatherName,
                formValues.phone,
                formValues.district,
                formValues.dob,
                formValues.gender
            )
            .send({ from: myAccount, gas: 800000 });
        console.log("Candidate data sent");

        //alert("Registration successful!");
        //window.location.reload();
        setIsSubmit(true);

    };

    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    }, [formErrors]);

    //Validations
    const validate = (values) => {
        const errors = {};
        const regName = /^[ a-zA-Z\-\’]+$/;
        const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        const phoneNo = /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/;
        var userName = values.first_name + " " + values.last_name;
        var fatherName = values.father_first_name + " " + values.father_last_name;

        if (!values.first_name) {
            errors.first_name = "Please enter your name!";
        }else if (!regName.test(values.userName)) {
            errors.first_name = "Please enter valid name!";
          }

        if (!values.father_first_name) {
            errors.father_first_name = "Please enter your father's name!";
        }else if (!regName.test(values.fatherName)) {
            errors.father_first_name = "Please enter valid name!";
          }
          
        if (!values.Uniq_id) {
            errors.Uniq_id = "Please enter your Unique id!";
        }else if (values.Uniq_id.trim().length != 4) {
            errors.Uniq_id = "Please enter a valid uniq id!";
          }

        if (!values.email) {
            errors.email = "Please enter your email!";
        }else if (!mailFormat.test(values.email)) {
            errors.email = "Please enter valid name!";
          }

        if (!values.district) {
            errors.district = "Please enter your district!";
        }else if (!regName.test(values.district)) {
            errors.district = "Please enter valid name!";
        }

        if (!values.dob) {
            errors.dob = "Please enter your Date of Birth!";
        }
        if (!values.phone) {
            errors.phone = "Please enter your name!";
        }else if (!phoneNo.test(values.phone)) {
            errors.phone = "Please enter valid phone number!";
        }

        if (!values.pname) {
            errors.pname = "Please enter party name!";
        }
        return errors;
    }

    return (
        <>
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                <button type="button" className="back_button" >Back</button>

                <div className="wrapper wrapper--w790">
                    <div className="card card-5">
                        <div className="card-heading">
                            <h2 className="title">Candidate Registration Form</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleSubmit}>
                                <div className="form-row m-b-55">
                                    <div className="name">Name</div>
                                    <div className="value">
                                        <div className="row row-space">
                                            <div className="col-2">
                                                <div className="input-group-desc">
                                                    <input className="input--style-5 input-meenal"
                                                        type="text"
                                                        value={formValues.first_name}
                                                        name="first_name"
                                                        onChange={handleChange} />
                                                    <label className="label--desc">first name</label>
                                                </div>
                                                <br></br><p className="errorColor">{formErrors.first_name}</p>
                                            </div>
                                            <div className="col-2">
                                                <div className="input-group-desc">
                                                    <input className="input--style-5 input-meenal"
                                                        type="text"
                                                        value={formValues.last_name}
                                                        name="last_name"
                                                        onChange={handleChange} />
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
                                                    <input className="input--style-5 input-meenal"
                                                        type="text"
                                                        value={formValues.father_first_name}
                                                        name="father_first_name"
                                                        onChange={handleChange} />
                                                    <label className="label--desc">first name</label>
                                                </div>
                                                <br /><p className="errorColor">{formErrors.father_first_name}</p>
                                            </div>
                                            <div className="col-2">
                                                <div className="input-group-desc">
                                                    <input className="input--style-5 input-meenal"
                                                        type="text"
                                                        value={formValues.father_last_name}
                                                        name="father_last_name"
                                                        onChange={handleChange}
                                                    />
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
                                            <input className="input--style-5 input-meenal"
                                                type="text"
                                                value={formValues.Uniq_id}
                                                onChange={handleChange}
                                                name="Uniq_id" />
                                        </div>
                                        <p className="errorColor">{formErrors.Uniq_id}</p>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="name">Email</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5 input-meenal"
                                                type="email"
                                                value={formValues.email}
                                                name="email"
                                                onChange={handleChange} />
                                        </div>
                                        <p className="errorColor">{formErrors.email}</p>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="name">district</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5 input-meenal"
                                                type="text"
                                                value={formValues.district}
                                                name="district"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p className="errorColor">{formErrors.district}</p>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="name">DOB</div>
                                    <div className="value">
                                        <div className='input-group'>
                                            <input className="input--style-5 input-meenal"
                                                type="date"
                                                value={formValues.dob}
                                                name="dob"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p className="errorColor">{formErrors.dob}</p>
                                    </div>
                                </div>
                                <div className="form-row m-b-55">
                                    <div className="name">Phone</div>
                                    <div className="value">
                                        <div className="input-group-desc">
                                            <input className="input--style-5 input-meenal"
                                                type="text"
                                                name="phone"
                                                value={formValues.phone}
                                                onChange={handleChange} />
                                        </div>
                                        <p className="errorColor">{formErrors.phone}</p>
                                    </div>
                                </div>

                                <div className="form-row">
                                    <div className="name">Gender</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <div className="rs-select2 js-select-simple select--no-search">
                                                <select name="subject">
                                                    <option name="gender" >Choose option</option>
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
                                            <input className="input--style-5 input-meenal"
                                                type="file"
                                                name="image"
						value={formValues.selectedFile}
                                  		onChange={(e) => setSelectedFile(e.target.files[0])}  />
                                                <button type="submit" className='button1'>Upload</button>
                                            
                                        </div>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="name">Party Name</div>
                                    <div className="value">
                                        <div className="input-group">
                                            <input className="input--style-5 input-meenal"
                                                type="text"
                                                value={formValues.pname}
                                                name="pname"
                                                onChange={handleChange}
                                            />
                                        </div>
                                        <p className="errorColor">{formErrors.pname}</p>
                                    </div>
                                </div>
                                <div className="form-row">
                                    <div className="name">Party Symbol</div>
                                    <div className="value">
                                        <div className='input-group'>
                                            <input className="input--style-5 input-meenal"
                                                type="file"
                                                name="symbol"
						value={formValues.selectedFile}
                                  		onChange={(e) => setSelectedFile(e.target.files[0])}  />
                                            <button type="submit" className='button1'>Upload</button>
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
        </>
    )
}
export default CandidateRegister;

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { contract, myAccount } from "./Connection";

function ElectionCreation() {
    const initialValues = { e_name: "", district: "", e_date: "", start_time: "", end_time: "" };
    const [formValues, setFormValues] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const [isSubmit, setIsSubmit] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        //console.log(e.target);
        const { name, value } = e.target;
        setFormValues({ ...formValues, [name]: value });
        //console.log(formValues);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));


        // send data to blockchain
        contract.methods
            .createElection(
                formValues.e_name,
                formValues.district,
                formValues.e_date,
                formValues.start_time,
                formValues.end_time
            ).send({ from: myAccount, gas: 800000 });
        console.log("Election Created");
        alert("Election Created!")

        setIsSubmit(true);
    };
    useEffect(() => {
        console.log(formErrors);
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
        // eslint-disable-next-line
    }, [formErrors]);
    const validate = (values) => {
        const errors = {};
        if (!values.e_name) {
            errors.e_name = "Please provide election name!";
        }
        if (!values.district) {
            errors.district = "Please give provide district!";
        }
        if (!values.e_date) {
            errors.e_date = "Please provide election date!";
        }
        if (!values.start_time) {
            errors.start_time = "Please provide start time of election!";
        }
        if (!values.end_time) {
            errors.end_time = "Please provide end time of election!";
        }
        return errors;
    };
    useEffect(() => {
        
        if (localStorage.getItem("adminLogin") !== "true")
            navigate("/");
            // eslint-disable-next-line
    }, []);
    return (<>
        {/* <div className="container">
      {Object.keys(formErrors).length === 0 && isSubmit ? 
        alert("Sucess!")
    : (
        //<pre>{JSON.stringify(formValues, undefined, 2)}</pre>
        alert("Failed!")
      )}
    </div>*/}
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
	<button type="button" className="back_button" >Back</button>
            <div className="wrapper wrapper--w790">
                <div className="card card-5">
                    <div className="card-heading">
                        <h2 className="title">Election Creation</h2>
                    </div>
                    <div className="card-body">
                        {/*<pre>{JSON.stringify(formValues)} </pre>*/}
                        <form method="POST" onSubmit={handleSubmit}>

                            <div className="form-row">
                                <div className="name">Election Name</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input
                                            className="input--style-5 input-meenal"
                                            type="text"
                                            name="e_name"
                                            value={formValues.e_name}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <p className="errorColor">{formErrors.e_name}</p>
                            </div>
                            <div className="form-row">
                                <div className="name">District</div>
                                <div className="value">
                                    <div className="input-group">
                                        <input
                                            className="input--style-5 input-meenal"
                                            type="text"
                                            name="district"
                                            value={formValues.district}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <p className="errorColor">{formErrors.district}</p>
                            </div>

                            <div className="form-row">
                                <div className="name">Date</div>
                                <div className="value">
                                    <div className='input-group'>
                                        <input
                                            className='input--style-5 input-meenal'
                                            type="date"
                                            name="e_date"
                                            value={formValues.e_date}
                                            onChange={handleChange}
                                        />
                                    </div>
                                </div>
                                <p className="errorColor">{formErrors.e_date}</p>
                            </div>
                            <div className="form-row m-b-55">
                                <div className="name">Start Time</div>
                                <div className="value">
                                    <div className="row row-refine">
                                        <div className="col-3">
                                            <div className="input-group-desc">
                                                <input type="time"
                                                    step="1"
                                                    placeholder="Time"
                                                    name="start_time"
                                                    value={formValues.start_time}
                                                    onChange={handleChange} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="errorColor">{formErrors.start_time}</p>

                            </div>
                            <div className="form-row m-b-55">
                                <div className="name">End Time</div>
                                <div className="value">
                                    <div className="row row-refine">
                                        <div className="col-3">
                                            <div className="input-group-desc">
                                                <input type="time"
                                                    step="1"
                                                    placeholder="Time"
                                                    name="end_time"
                                                    value={formValues.end_time}
                                                    onChange={handleChange}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <p className="errorColor">{formErrors.end_time}</p>
                            </div>
                            <div>
                                <center>
                                    <button
                                        className="btn btn--radius-2 btn--red"
                                        type="submit">
                                        Register
                                    </button>
                                </center>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div>
            </div>
        </div>
    </>);
}
export default ElectionCreation;

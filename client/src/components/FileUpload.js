//import './FileUpload.css'
import React from "react";
import { contract, myAccount } from "./Connection";
import { useCSVReader } from "react-papaparse";

function FileUpload() {
  const { CSVReader } = useCSVReader();
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
      <div className="wrapper wrapper--w790">
        {/* <form method="post" action="#" id="#"> */}
        <div className="form-group files">
          <label>
            <h1 align="center">Upload the Voter's Data file </h1>
          </label>
          <br />
          <br />
          <br />
          <CSVReader
            onUploadAccepted={(results) => {
              console.log("---------------------------");
              for (let temp = 0; temp < results.data.length - 1; temp++) {
                // console.log(results.data[temp][1]);
                // console.log(results.data);
                contract.methods
      .registerVoter(
        results.data[temp][0],
        results.data[temp][1],
        results.data[temp][2],
        results.data[temp][3],
        results.data[temp][4],
        results.data[temp][5],
        results.data[temp][6],
        results.data[temp][7]
      )
      .send({ from: myAccount, gas: 800000 });
      console.log(temp);
              }
            }}
          >
            {({ getRootProps, acceptedFile }) => (
              <>
                <button
                  class="form-control "
                  {...getRootProps()}
                ><p className="csvButton">Browse</p></button>
                {/* <input {...getRootProps()} type="file" className="form-control" multiple="" /> */}
                <div>{acceptedFile && acceptedFile.name}</div>
              </>
            )}
            {/* <input type="file" class="form-control" multiple="" /> */}
          </CSVReader>
        </div>
        {/* <center><button className='Register_button'>Register</button></center> */}
        {/* </form> */}
      </div>
    </div>
  );
}
export default FileUpload;

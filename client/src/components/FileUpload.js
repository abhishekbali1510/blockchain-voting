//import './FileUpload.css'
import React from 'react'
function FileUpload() {
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
        <form method="post" action="#" id="#">
           <div class="form-group files">
                <label><h1 align="center">Upload the Voter's Data file </h1></label><br/><br/><br/>
                <input type="file" class="form-control" multiple=""/>
              </div>
              <center><button className='Register_button'>Register</button></center>
          </form>
        </div>
    </div>
  )
}
export default FileUpload

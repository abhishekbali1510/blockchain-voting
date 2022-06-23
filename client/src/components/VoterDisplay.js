import React from 'react';
import logo1 from './logo1.jpg'
function VoterDisplay() {
    return (<>
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
        <h1 align="center">Voter's Data</h1>
            <div >
                <form>
                    <div>
                        <h3 ><b>EPIC ID:</b></h3>
                            <input name="epicId" type="text"></input> 
                    </div>
                </form>
                
            </div>
            <br/><button type="button" className="button1">Success</button><br/><br/>
            <div>
            <div>
            <center><img src={logo1} height={200} width={200} className="imgBorder"></img></center>
            </div>
            <font size="5" face="Courier New" >
                <table className='tab' cellPadding="0" cellSpacing="0">    
                <tr>
                    <th >Epic Id</th>
                    <td>123</td>
                </tr>
                <tr>
                    <th>Name</th>
                    <td>Meenal</td>
                </tr>
                <tr>
                    <th >Email</th>
                    <td>meenal199s</td>
                </tr>
                <tr>
                    <th>Address</th>
                    <td>Vasant Vihar </td>
                </tr>
                <tr>
                    <th>DOB</th>
                    <td>6722</td>
                </tr>
                <tr>
                    <th>Phone number</th>
                    <td>2321090</td>
                </tr>
                <tr>
                    <th>Gender</th>
                    <td>FEmale</td>
                </tr>
                <tr>
                    <th>Father's Name</th>
                    <td>XYZ</td>
                </tr>
                </table>
               </font> 
            </div> 
        </div>     
        </div>
      </>);
    }

export default VoterDisplay

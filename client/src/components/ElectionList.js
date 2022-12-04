import React from "react";
import { useState, useEffect } from "react";
import { contract } from "./Connection";
import { useNavigate } from "react-router-dom";
function ElectionList() {

    const [allElectionDisplayData, setAllElectionDisplayData] = useState([]);
    const [allElections, setAllElection] = useState([]);
    
    useEffect(()=>{
        async function fetchAllElection() {
            for (let i = 0; i < await contract.methods.totalElections().call(); i++) {
                let localData = await contract.methods.showElectionInfo(i).call();
                // console.log(localData);
                // if localData.district === user district
                // eslint-disable-next-line
                setAllElection((prevState) => [...prevState, localData]);
                
            }
    
        }
        fetchAllElection();
    },[])
    
    let navigate=useNavigate();
    useEffect(() => {
      
      // console.log(localStorage.getItem("adminLogin"));
      if (localStorage.getItem("adminLogin") !== "true") {
        navigate("/");
      }
  
    });
    useEffect(() => {
        console.log(allElections);
        function allElectionDisplay() {
            setAllElectionDisplayData(allElections.filter(function (elem) {
                // eslint-disable-next-line
                return elem.id != 0;
            }).map((elem) => {
                return (
                    <>
                        <tr>
                            
                            <td className="tdDecor">{elem.electionName}</td>
                            <td className="tdDecor"><a href={"/result/" + elem.electionDistrict}>{elem.electionDistrict}</a></td>
                            
                            {/* <td className="tdDecor">Pending</td> */}
                        </tr>
                    </>
                )
            }));

        }
        allElectionDisplay();
    }, [allElections]);
    return (
        <>
            <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                <center>
                <h1 className="h1Class">ELECTION LIST</h1>
                </center>
                <table className="tableDecor">
                    <thead>
                        <tr>
                            <th className="tdDecor">Election Name</th>
                            <th className="tdDecor">District</th>
                            {/* <th className="tdDecor">Status</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {allElectionDisplayData}
                    </tbody>
                </table>
            </div>
        </>
    )
}
export default ElectionList;

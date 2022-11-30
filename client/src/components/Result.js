import React, { useState, useEffect } from "react";
import { contract } from "./Connection";
import Chart from 'react-apexcharts';
import { useParams } from 'react-router-dom';
function Result() {
    const [countryname, setCountryname] = useState([]);
    const [medal, setMedal] = useState([]);
    const [electionResults, setElectionResults] = useState([]);
    const params = useParams();
    const [electionDate,setElectionDate]=useState();
    const [totalVoters,setTotalVoters]=useState(0);
    useEffect(() => {

        console.log(electionResults);
        async function getData() {
            const countryname = [];
            const getmedal = [];
            // const resData = [{ "name": "Abhi", "money": "5" }, { "name": "shiv", "money": "5" }];
            // const resData = await reqData.json();
            // console.log(resData);
            for (let i = 0; i < electionResults.length; i++) {
                countryname.push(electionResults[i].candidateName);
                getmedal.push(parseInt(electionResults[i].totalVotes));
            }
            setCountryname(countryname);
            setMedal(getmedal);
        }
        getData();
    }, [electionResults]);

    useEffect(() => {
        async function fetchAllCandidates() {

            for (let i = 0; i < await contract.methods.totalCandidates().call(); i++) {
                let localData = await contract.methods.fetchCandidateByIndex(i).call();
                // eslint-disable-next-line
                if (localData.candidateDistrict == params.electionDistrict)
                    setElectionResults((prevState) => [...prevState, localData]);
            }
        }
        async function fetchElectionDate() {

            for (let i = 0; i < await contract.methods.totalElections().call(); i++) {
                let localData = await contract.methods.showElectionInfo(i).call();
                // eslint-disable-next-line
                if (localData.electionDistrict == params.electionDistrict)
                    setElectionDate(localData.electionDate);
            }
        }
       
        fetchAllCandidates();
        fetchElectionDate();
        
        // eslint-disable-next-line
    }, [])

    useEffect(()=>{
        async function fetchTotalVoters() {

            for (let i = 0; i < await contract.methods.totalVoters().call(); i++) {
                let localData = await contract.methods.fetchVoterByIndex(i).call();
                console.log(localData);
                // eslint-disable-next-line
                if (localData.voterDistrict == params.electionDistrict)
                    setTotalVoters(totalVoters+1);
            }
        }
        fetchTotalVoters();
    },[electionResults]);
    return (
        <>
            <center>
                <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
                    <h1 className='h1Class'>ELECTION RESULT</h1>
                    <br></br>
                    <table className='widthClass'>
                        <tbody>
                            <tr>
                                <td className='tdPadding'>Election District: {params.electionDistrict} </td>
                                <td>Election Date: {electionDate}</td>
                            </tr>
                            <tr>
                                <td className='tdPadding'>Total registered Voters: {totalVoters} </td>
                                {/* <td>Total Votes:  </td> */}
                                <td className='tdPadding'>Total Candidates: {countryname.length} </td>
                            </tr>
                        </tbody>
                    </table>
                    <Chart
                        type="donut"
                        width={1349}
                        height={550}
                        series={medal}
                        options={
                            {
                                legend: {
                                    fontSize: "18px",
                                    position: "bottom"
                                },
                                labels: countryname,
                                plotOptions: {
                                    pie: {
                                        donut: {
                                            labels: {
                                                show: true,
                                                total: {
                                                    show: true,
                                                    fontSize: 30,
                                                    color: 'black'
                                                }
                                            }
                                        }
                                    }
                                }
                            }} />
                </div>
            </center>
        </>
    )
}
export default Result;







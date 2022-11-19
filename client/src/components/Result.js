import React, { useState,useEffect } from "react";
import Chart from 'react-apexcharts';
function Result() {
    const[countryname,setCountryname]=useState([]);
    const [medal,setMedal]=useState([]);
    useEffect(()=>{
        const getData = async()=>{
            const countryname = [];
            const getmedal = [];
            const reqData = await fetch('  ');
            const resData = await reqData.json();
            console.log(resData);
            for(let i =0 ;i<resData.length;i++){
                countryname.push(resData[i].country);
                getmedal.push(parseInt(resData[i].medals));
            }
            setCountryname(countryname);
            setMedal(getmedal);
        }
    },[]);
  return (
    <>
    <center>
        <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <h1 className='h1Class'>ELECTION RESULT</h1>
        <table className='widthClass'>
        <tr>
            <td className='tdPadding'>Election Name: </td>
            <td>Election Date: </td>
        </tr>
        <tr>
            <td className='tdPadding'>Total registered Voters: </td>
            <td>Total Voters: </td>
        </tr>
        <tr>
            <td className='tdPadding'>Total Candidates: </td>
        </tr>
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
            labels:countryname,
            plotOptions:{
                pie:{
                    donut:{
                        labels:{
                            show:true,
                            total:{
                                show:true,
                                fontSize:30,
                                color:'black'
                            }
                        }
                    }
                }
            }
         } }/>
    </div>
    </center>
    </>
  )
}
export default Result;







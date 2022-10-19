import React from 'react'
import vote from './voted.png'

function DashBoard() {
  return (
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
        <div className='Voted_class'>
            <center><h1> Start Poll</h1></center><br/>
                <center><img src={vote} height={150} width={150} ></img></center>
                <center><button class='startButton' type="submit">Start</button></center>
            </div>
            <div className='Voted_class'>
            <center><h1> Voter</h1></center><br/>
                <center><img src={vote} height={150} width={150} ></img></center>
                <center><button class='startButton' type="submit">Start</button></center>
            </div>
            <div className='Voted_class'>
            <center><h1>R_Candidate</h1></center><br/>
                <center><img src={vote} height={150} width={150} ></img></center>
                <center><button class='startButton' type="submit">Start</button></center>
            </div>
            <div className='Voted_class'>
                <center><h1>Show Results</h1></center><br/>
                <center><img src={vote} height={150} width={150} ></img></center>
                <center><button class='startButton' type="submit">Start</button></center>
            </div>
            <div className='Voted_class'>
            <center><h1>Upload voters</h1></center><br/>
                <center><img src={vote} height={150} width={150} ></img></center>
                <center><button class='startButton' type="submit">Start</button></center>
            </div>
            <div className='Voted_class'>
            <center><h1>Upload cane</h1></center><br/>
                <center><img src={vote} height={150} width={150} ></img></center>
                <center><button class='startButton' type="submit">Start</button></center>
            </div>
            
            </div>
    </div>
  )
}
export default DashBoard;
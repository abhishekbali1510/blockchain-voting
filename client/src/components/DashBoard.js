import React from 'react'
import voter_register from './voter_registration.PNG'
import voter_display from './voter_display.png'
import create_election from './create_election.jpg'
import election_list from './election_list.png'
import candidate_register from './candidate_register.png'
import logout from './logout.jpg'
function DashBoard() {
  return (
    <>
    <div className='dashboard_div'>
    <h1 className='dashboard_heading'>ADMIN DASHBOARD</h1>
    </div> 
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">  
    <div className="wrapper wrapper--w790">
    <div className="row row-cols-1 row-cols-md-2 g-4">
      <div className="col">
        <div className="card">
        <img src={voter_register} className='card_img' alt="Voter Registration" />
          <div className="card-body">
            <h5 className="card-title">Voter Registration</h5>
            <p className="card-text">
            Click on the registration button to register the eligible voters for the voting.
            </p>
            <button type="submit" className='nav_button'>Register</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img src={candidate_register} className='card_img' alt="Candidate Registeration" />
          <div className="card-body">
            <h5 className="card-title">Candidate Register</h5>
            <p className="card-text">
            Click on the registration button to register the eligible candidates for the election.
            </p>
            <button type="submit" className='nav_button'>Register</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img src={create_election} className='card_img' alt="Election Creation" />
          <div className="card-body">
            <h5 className="card-title">Create Election</h5>
            <p className="card-text">By just one click create election! For any domain in which you want to conduct voting.</p>
              <button type="submit" className='nav_button'>Create</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img src={voter_display} className='card_img' alt="Voters" />
          <div className="card-body">
            <h5 className="card-title">Voter Display</h5>
            <p className="card-text">Provide the epic ID to see the information of the voter.</p>
              <button type="submit" className='nav_button'>View List</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img src={election_list} className='card_img' alt="Election List" />
          <div className="card-body">
            <h5 className="card-title">Election List</h5>
            <p className="card-text">
            Check the list of the elections which are currently going on.  
            </p>
            <button type="submit" className='nav_button'>View</button>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
        <img src={logout} className='card_img' alt="Logout" />
          <div className="card-body">
            <h5 className="card-title">Logout</h5>
            <p className="card-text">Click on the below button to logout from the dashboard.</p>
              <button type="submit" className='nav_button'>Logout</button>
          </div>
        </div>
      </div>
    </div>
      </div>
      </div>
    </>);
}
export default DashBoard;
import React from 'react'
let voter_register = '/Images/voter_registration.PNG'
let voter_display  ='/Images/voter_display.png'
let create_election = '/Images/create_election.jpg'
let election_list  ='/Images/election_list.png'
let candidate_register = '/Images/candidate_register.png'
let logout = '/Images/logout.jpg'
function Dashboard2() {
  return (
    <>
    <div className='dashboard_div'>
    <h1 className='dashboard_heading'>ADMIN DASHBOARD</h1>
    </div>
    <div className="page-wrapper bg-gra-03 p-t-45 p-b-50">
        <div className="wrapper wrapper--w790">
        <div className='flex_container'>

        <div className='dashBod'>
            
        <img src={voter_register} className='card_img' alt="Voter Registration" />
        <h4>&nbsp;&nbsp;Voter register</h4>
        <p className='para'>Click on the registration button to register the eligible voters for the voting.</p>
            <button type="submit" className='nav_button'>Register</button>
        </div>

        <div className='dashBod'>
        <img src={candidate_register} className='card_img' alt="Candidate Registration" />
        <h4>&nbsp;&nbsp;Candidate register</h4>
        <p className='para'>Click on the registration button to register the eligible candidates for the election.</p>
            <button type="submit" className='nav_button'>Register</button>
        </div>
        
        </div>
        <div className='flex_container'>

        <div className='dashBod'>
        <img src={create_election} className='card_img' alt="Create Election" />
        <h4>&nbsp;&nbsp;Create Election</h4>
        <p className='para'>By just one click create election! For any domain in which you want to conduct voting.</p>
            <button type="submit" className='nav_button'>Create</button>
        </div>

        <div className='dashBod'>
        <img src={voter_display} className='card_img' alt="Voter Display" />
        <h4>&nbsp;&nbsp;Voter Display</h4>
        <p className='para'>Provide the epic ID to see the information of the voter.</p>
            <button type="submit" className='nav_button'>View</button>
        </div>
        </div>

        <div className='flex_container'>
        <div className='dashBod'>
        <img src={election_list} className='card_img' alt="Election List" />
        <h4>&nbsp;&nbsp;Election List</h4>
        <p className='para'>Check the list of the elections which are currently going on.</p>
            <button type="submit" className='nav_button'>View</button>
        </div>

        <div className='dashBod'>
        <img src={logout} className='card_img' alt="Logout" />
        <h4>&nbsp;&nbsp;Logout</h4>
        <p className='para'>Click on the below button to logout from the dashboard.</p>
            <button type="submit" className='nav_button'>Logout</button>
        </div>
        </div>

    </div>
    </div>
  </>)
}
export default Dashboard2;
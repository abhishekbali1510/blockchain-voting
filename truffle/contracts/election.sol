//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


contract election
{

    // voter info structure
    struct voterInfo
    {
        string epic;
        string voterName;
        string voterFatherName;
        string voterEmail;
        string voterMobile;
        string voterDOB;
        string voterAddress;
        string voterGender;
        bool isVoted;
    }

    voterInfo[] allVoters;
    mapping(string => uint) public voterSearch ;      // epic => index

    // stores voter info on blockchain
    function registerVoter(string memory _epic,string memory _voterName,string memory _voterFatherName,string memory _voterEmail,string memory _voterMobile,string memory _voterDOB,string memory _voterAddress,string memory _voterGender) public 
    {
        allVoters.push(voterInfo(_epic,_voterName,_voterFatherName,_voterEmail,_voterMobile,_voterDOB,_voterAddress,_voterGender,false));
        voterSearch[_epic]=allVoters.length-1;
    }
    
    // reterive voter info from blockchain
    function showVoterInfo(string memory _epic) view public returns(voterInfo memory)
    {
        return allVoters[voterSearch[_epic]];
    }

    // count total voters
    function totalVoters() view public  returns(uint)
    {
        return allVoters.length;
    }


    // candidate info structure
    struct candidateInfo
    {
        string id;
        string candidateName;
        string party;
        string candidateAddress;
        string candidateDOB;
        string candidateGender;
        
    }

    candidateInfo[] allCandidates;
    mapping(string => uint) public candidateSearch ;      // id => index

    // stores candidate info on blockchain
    function registerCandidate(string memory _id,string memory _candidateName,string memory party,string memory _candidateAddress,string memory _candidateDOB,string memory _candidateGender) public 
    {
        allCandidates.push( candidateInfo(_id,_candidateName,party,_candidateAddress,_candidateDOB,_candidateGender) );
        candidateSearch[_id]=allCandidates.length-1;
    
    }
    
    // reterive candidate info from blockchain
    function showCandidateInfo(string memory _id) view public returns(candidateInfo memory)
    {
        return allCandidates[candidateSearch[_id]];
    }

    // count total candidates
    function totalCandidates() view public  returns(uint)
    {
        return allCandidates.length;
    }



}
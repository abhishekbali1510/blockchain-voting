fs = require('fs');
Web3=require('web3');
import SimpleStorage from '../contracts/SimpleStorage.json';

// making connection to ganache
web3=new Web3(new Web3.providers.HttpProvider("http://127.0.0.1:7545"));


jsonContract=JSON.parse(fs.readFileSync("index.html").toString());
console.log(jsonContract);
console.log(SimpleStorage);

ABI=jsonContract["abi"];
address=jsonContract.networks[5777].address;

// contract object
contract = new web3.eth.Contract(ABI, address);

// function to reterive default account
defAcc=()=>{
    web3.eth.getAccounts().then((accounts) => {
    defaultAccount = accounts[0];   //reterive default account
    console.log("Default account done");
})
};

defAcc();



function getVoter()
{
    let value=document.getElementById("epicInfo").value;
    contract.methods.showVoterInfo(value).call(function(err,data)
    {
        console.log(data);
        
        document.getElementById("epicShow").innerText=data.epic;
        document.getElementById("voterNameShow").innerText=data.voterName;
        document.getElementById("voterMobileShow").innerText=data.voterMobile;
        document.getElementById("voterEmailShow").innerText=data.voterEmail;
        document.getElementById("voterDOBShow").innerText=data.voterDOB;
        document.getElementById("voterAddressShow").innerText=data.voterAddress;
        document.getElementById("voterGenderShow").innerText=data.voterGender;
    });
}


function storeVoter()
{
    let epic=document.getElementById("epicID").value;
    let firstName=document.getElementById("firstName").value;
    let middleName=document.getElementById("middleName").value;
    let lastName=document.getElementById("lastName").value;
    let voterName=firstName.concat(" ",middleName," ",lastName);
    let voterMobile=document.getElementById("voterMobile").value;
    let voterEmail=document.getElementById("voterEmail").value;
    let voterAddress=document.getElementById("voterAddress").value;
    let voterDOB=document.getElementById("voterDOB").value;
    if (document.getElementById('r1').checked) {
  voterGender = document.getElementById('r1').value;
}
if (document.getElementById('r2').checked) {
  voterGender = document.getElementById('r2').value;
}
if (document.getElementById('r3').checked) {
  voterGender = document.getElementById('r3').value;
}
    //let voterGender=document.getElementById("voterGender").value;
    
    console.log(epic);
    console.log(voterName);
    //console.log(voterFatherName);
    console.log(voterAddress);
    console.log(voterDOB);
    console.log(voterGender);
    contract.methods.registerVoter(epic,voterName,voterEmail,voterMobile,voterDOB,voterAddress,voterGender).send({ from: defaultAccount,gas:800000 });
    console.log("data sent");
    setTimeout(()=>{
        location.reload();
    },6000);
    
    
}


function getVoterCount()
{
    contract.methods.totalVoters().call(function(err,data)
    {
        console.log(data);
        document.getElementById("count").innerText=data;
    });
}
getVoterCount();
document.getElementById("send").addEventListener ("click",storeVoter,false);
document.getElementById("fetch").addEventListener ("click",getVoter,false);
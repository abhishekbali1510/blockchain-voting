import React,{useState} from "react";
import { contract } from "./Connection";


function Reterive() {
    var [value,setvalue]=useState("");
    setTimeout(() => {
        contract.methods.read().call((err, data) => {
            setvalue(data);
            console.log("data : ",data);
          });
    }, 2000);
    

  return <>
        value =
            {value}
        </>;
}
export default Reterive;

import React,{useState} from "react";
import { contract ,myAccount} from "./Connection";


function Store() {
    contract.methods.write(35).send({ from: myAccount,gas:800000 });
    console.log("data sent");

  return (
        <>
            <br/>
            {/* {value} */}
        </>
        );
}
export default Store;

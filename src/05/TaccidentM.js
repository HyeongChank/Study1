

import Thead from "./Thead";
import Tc1 from "./Tc1";
import Tc2 from "./Tc2";
import Tdetail from "./Tdetail";
import "./Taccident.css";
import { useState } from "react";

const TaccidentM = ({c1, c2, data}) =>{
    console.log("c1", c1)
    console.log("c2", c2)
    console.log("data", data)

    let [c1use, setc1use] = useState();
    let [c2use, setc2use] = useState();

    return(
        <>
        <div className="content">
            <div className="head">
              <Thead/>    
            </div>
            <div className="main">
                <Tc1 c1={c1} setc1use={setc1use}/>
                <Tc2 c1use={c1use} c2use={c2use} c2={c2}/>
                <Tdetail/>
            </div>
        </div>

        </>
    )
}
export default TaccidentM;
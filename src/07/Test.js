import { useEffect, useState } from "react";
import './box.css'
const Test = () =>{
    // const [detail, setdatail] = useState();
    // const [mvcd, setmvcd] = useState();


   
     useEffect(()=>{
        const url = "http://apis.data.go.kr/B550624/fctryRegistPrdctnInfo/getFctryPrdctnService?&serviceKey=n10J1U3TXuzNqRQkALNyYk8YzRRN2g8s%2Fz2kM7omSrzjBvLfPkim%2Fg%2FOi4fp%2By1Qu6bDPnlpD0uw5tOlTyl3%2FA%3D%3D&numOfRows=10&pageNo=1&cmpnyNm=삼성전자&type=JSON";        
         console.log(url);
         fetch(url)
         .then((resp)=>resp.json())
         .then((data)=>{
            console.log(data);
            let temp = data.response.body.items.item;
            console.log(temp);            
         })
         .catch((err)=>console.log(err));

     },[])
    

    
    
    
    
    
    return(
        <>
        {/* <div>sds</div>
        {detail}
        <div>{mvcd}</div> */}
        </>
    )
}

export default Test;
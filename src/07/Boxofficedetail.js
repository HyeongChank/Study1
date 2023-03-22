import { useEffect, useState } from "react";
import './box.css'
const Boxofficedetail = () =>{
    const [detail, setdatail] = useState();
    const [mvcd, setmvcd] = useState();
    let cd = [];
    const showDetail = (cd) =>{
        setmvcd(cd);
        console.log(cd);
    }
    useEffect(()=>{
        const url = "http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=20120101";
        console.log(url);
        fetch(url)
        .then((resp)=>resp.json())
        .then((data)=>{
            console.log(data);
            let temp = data.boxOfficeResult.dailyBoxOfficeList;
            console.log(temp);
            setdatail(temp.map((k)=><div className="div1" key={k.movieCd} onClick={()=>showDetail([k.movieNm, k.openDt, k.audiInten])}>{k.movieNm}</div>));
        })
        .catch((err)=>console.log(err));

    },[])
    

    
    
    
    
    
    return(
        <>
        <div>sds</div>
        {detail}
        <div>{mvcd}</div>
        </>
    )
}

export default Boxofficedetail;
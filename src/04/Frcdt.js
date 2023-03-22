const Frcdt=({fcrdt, setDt}) => {
    console.log("dt",fcrdt, setDt);
    // setDt 는 함수
    let dtdiv1Tag = [...fcrdt];
    console.log("setDt",setDt);
    const show= (v) => {
        console.log("show", v);
        setDt(v);
        console.log("setDtttt" ,setDt);
    }
    console.log("frcdttt",dtdiv1Tag);
    //v는 dtdic1Tag 안에 값들
    dtdiv1Tag = dtdiv1Tag.map((v) =>
    <div className='dtdiv1' key={v} onClick={()=>show(v)}>{v}</div>
    );
    
    
    
    return(
        <div className="mainbox1" >
            {dtdiv1Tag}
        </div>
    )
}
export default Frcdt;
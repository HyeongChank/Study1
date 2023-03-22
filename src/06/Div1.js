const Div1 = ({c1, c2, selc1, setselc1, selc2}) =>{
    console.log("selc1",selc1);

    const show=(v) =>{
        setselc1(v);
    };
    const c1Tag = c1.map((v)=>
    <div onClick={()=>show(v)}>{v}</div>)
    return(
        <>
        <div className="div1">
        <div>{c1Tag}</div>
    
        </div>
        </>
    );
}
export default Div1;
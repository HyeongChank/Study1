const Tc1 =({c1, setc1use}) =>{

    let c1Tag = [...c1];
   
    const show =(v)=>{
        setc1use(v);
    };
    c1Tag = c1Tag.map((v) => 
    <div className="c1List" onClick={() => show(v)}>{v}</div>
    );

    return(
        <>
        <div className="Tc1">
            <h1>대분류</h1>
            <div className="Tc1Card">
                {c1Tag}
            </div>
        </div>
        </>
    )
}
export default Tc1;
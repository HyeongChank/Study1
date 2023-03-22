const Tc2 =({c1use, c2use, c2}) =>{
    console.log("c2use", c2use, "c2", c2);

    let infoArry = [...c2];
    console.log(infoArry);
    return(
        <>
        <div className="Tc2">
            <h2>중분류</h2>
            <div className="Tc2Card">항목</div>
        </div>
            </>
    )
}
export default Tc2;
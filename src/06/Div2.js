const Div2 = ({selc2}) =>{
    console.log("selc2",selc2)
    
    let dTag;
    if(selc2.length>0){
       dTag =  <div>{selc2[0]}</div>
       console.log("dTag",dTag);
    }
    return(
        <>
           <div>{dTag}</div>
        </>
    );
}
export default Div2;
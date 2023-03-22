

const Frccn = ({cn, dt}) => {
    console.log("cn ",cn);
    let infoArry = cn.split(',');
    let kn =0;
    infoArry = infoArry.map((item2) => 
    
    <li key ={dt+kn++}>
        <span>{item2.split(':')[0]}</span>(
            {
            item2.includes('높음') ?
            <span className = 'lired'>{item2.split(':')[1]}</span> :
            <span>{item2.split(':')[1]}</span>   
            }
            )
    </li>
    );
    return (
        <>
            <div className="mainbox2">
        
                <div className="detail1">
                    <ul>
                    {infoArry}
                    </ul>
                </div>
            </div>
        
        </>
    )
}
export default Frccn;
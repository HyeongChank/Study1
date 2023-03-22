import xml2js from 'xml2js';
const Dbs = () =>{

//모듈로 cd 해서 xml2js 설치하고


    fetch('http://apis.data.go.kr/B550624/fctryRegistPrdctnInfo/getFctryPrdctnService?&type=json&serviceKey=n10J1U3TXuzNqRQkALNyYk8YzRRN2g8s%2Fz2kM7omSrzjBvLfPkim%2Fg%2FOi4fp%2By1Qu6bDPnlpD0uw5tOlTyl3%2FA%3D%3D&numOfRows=10&pageNo=1&cmpnyNm=삼성전자')
      .then(response => response.text())
      .then(xml => {
        xml2js.parseString(xml, (err, result) => {
          const json = JSON.stringify(result);
          console.log(json);
          console.log(json.allEmplyCo);
        });
      });

    return(
        <>
        </>
    )
}
export default Dbs;

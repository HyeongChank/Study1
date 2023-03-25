import * as XLSX from "xlsx";
import { useState } from "react";


const ConvertXlsx = () => {

  const generateExcelFile = (data) => {
    const ws = XLSX.utils.json_to_sheet(data);
    const wb = XLSX.utils.book_new();
    console.log("abc")
    console.log(ws)
    console.log(wb)
    XLSX.utils.book_append_sheet(wb, ws, "Sheet1");
    const wbout = XLSX.write(wb, {bookType:'xlsx', type:'binary'});
    const blob = new Blob([s2ab(wbout)], {type: 'application/octet-stream'});
    const url = window.URL.createObjectURL(blob);
    return url;
  }

  const s2ab = (s) => {
    const buf = new ArrayBuffer(s.length);
    const view = new Uint8Array(buf);
    for (let i=0; i<s.length; i++) view[i] = s.charCodeAt(i) & 0xFF;
    return buf;
  }

  const handleDownload = () => {
    fetch('http://apis.data.go.kr/B550624/fctryRegistPrdctnInfo/getFctryPrdctnService?&serviceKey=n10J1U3TXuzNqRQkALNyYk8YzRRN2g8s%2Fz2kM7omSrzjBvLfPkim%2Fg%2FOi4fp%2By1Qu6bDPnlpD0uw5tOlTyl3%2FA%3D%3D&numOfRows=10&pageNo=1&cmpnyNm=삼성전자&type=JSON')
      .then(response => response.json())
      .then(data => {
        const url = generateExcelFile(data.response.body.items.item);
        const link = document.createElement("a");
        link.href = url;
        link.download = "excel-file.xlsx";
        link.click();
        console.log("Excel file generated and downloaded");

      })

      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }
  
  return (
    <>
      <button onClick={handleDownload}>Download Excel file</button>

    </>
  );
}

export default ConvertXlsx;
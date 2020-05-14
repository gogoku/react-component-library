import React from 'react';
import html2canvas from 'html2canvas';
import { Button } from '../Button';
import { FaDownload } from 'react-icons/fa';

export default function UiToImage({ children }) {
  let DivRef = React.createRef();
  function PrintDiv() {
      debugger
    html2canvas(DivRef.current).then((canvas) => {
      var myImage = canvas.toDataURL();
      downloadURI(myImage, 'MaSimulation.png');
    });
  }

  function downloadURI(uri, name) {
    var link = document.createElement('a');

    link.download = name;
    link.href = uri;
    document.body.appendChild(link);
    link.click();
    //after creating link you should delete dynamic link
    //clearDynamicLink(link);
  }
  return (
    <div>
      <Button title={<FaDownload />} size="small" onClick={PrintDiv} />
      <div ref={DivRef} style={{ marginTop: '8px'}}>
        {children}
      </div>
    </div>
  );
}

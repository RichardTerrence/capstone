import React from 'react'
import "./ViVdeo.css";


const ViVdeo = () => {
  
  var elem = document.getElementById("");
  function openFullscreen() {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
  }
}
  return (
    <div className='vivid'>
    <video width="400" controls>
      <source src="mov_bbb.mp4" type="video/mp4"/>
      <source src="mov_bbb.ogg" type="video/ogg"/>
      Your browser does not support HTML5 video.
    </video>
    </div>
  )
}

export default ViVdeo;
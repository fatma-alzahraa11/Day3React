import { useState } from 'react'
import "./toggle.css"

function Toggle() {
    let [text,setText]=useState("toggle")
function disApper(){
setText(text)

}

  return (
    <>
    
        <p>Toggle Me on click </p>
<button onClick={disApper}>Disaper Text</button>

    </>
  )
}

export default Toggle
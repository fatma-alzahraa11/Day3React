import { useState } from 'react'

function Count() {
  
      let [autoinc, setCount] = useState(0)
    
 function changeNumb() {
   setCount(autoinc+1)  
        
       }
       function changeNumbdec() {
   setCount(autoinc-1)  
        
       }
       function reset(){
           setCount(0)  

       }
         return (
    <>
    
    <p> {autoinc}</p>
      <div className="card">
        <button onClick={changeNumb}>
          Autoincrement is
        </button>
         <button onClick={changeNumbdec}>
          Decrement is 
        </button>
        <button onClick={reset}>
          Reset is 
        </button>
        
      </div>
      
    </>
  )

  
}

export default Count
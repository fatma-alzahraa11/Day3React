import { useState } from 'react'
import image from "./assets/-1670172748-0.jpg"
import image2 from "./assets/images (2).jpeg"


function CoinFlipping() {
    let [images,setImage]=useState(image)
    function random(){
       let src = Math.ceil(Math.random()*2)
       console.log(src)
       if(src==1){
        setImage(images)

            
       }else{
        setImage(image2)
       }
    }
  return (
    
    <>
    <img src={images}  />
            <button onClick={random}>Random</button>
    </>
  )
}

export default CoinFlipping
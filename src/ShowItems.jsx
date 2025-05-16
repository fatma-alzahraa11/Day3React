import { useState } from "react";
import getAll from "./products";
import Cards from "./Cards";
function ShowItems() {
  let [arr, setArr] = useState(getAll());
  function brutyItems() {
    arr = arr.filter((item) => item.category == "beauty");
    setArr(arr);
  }
  function menItems() {
    arr = arr.filter((item) => item.category == "Men");
    setArr(arr);
  }
  function phoneItems() {
    arr = arr.filter((item) => item.category == "Phone");
    setArr(arr);
  }
//   function searchItems(){
//     if(input.include(value)){
//         arr = arr.filter((item) => item.category == "Men");
//     setArr(arr);
//     }
//     }
    function priceItems (){
        arr = arr.filter((item) => item.price <= 50);
        
    setArr(arr);
    }
  return (

    <>
    <div>
    <input type="text" placeholder="Search" style={{width:"50%",height:"80%"}}  />
    </div>
    <br />
    <div>
      <button onClick={brutyItems}>Beauty</button>
      <button onClick={menItems}>Men</button>
      <button onClick={phoneItems}>Phone</button>
      </div>
      <br />
      <div>
     <button onClick={priceItems}>less than 50 $</button>

</div>
      <div>
        {arr.map((item, index) => (
          <Cards key={index} data={item} />
        ))}
      </div>
    </>
  );
}

export default ShowItems;

import React, { useState } from 'react'
import Cards from './Cards'
import getAll from './getData'


function showProduct() {
  let [arr, setArr] = useState(getAll());
    function getbeauty() {
        arr = arr.filter((item) => item.category == "Beauty products")
        setArr([...arr]);
    }
    return (
        <>
            <button onClick={getbeauty}>Beauty</button>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                {arr.map((item, index) => <Cards key={index} data={item} />)}
            </div>
        </>
    )
}

export default showProduct
import React from "react";

function Cards({ data }) {
  return (
    <div className="card">
      <h2>Title is :</h2>

      <h2>{data.title}</h2>
      <img src={data.thumbnail} />
      <h2>Description is :</h2>
      <p>{data.description}</p>
      <h2>Category is :</h2>

      <h4>{data.category}</h4>
      <h2>price is :</h2>
      <h3> {data.price}</h3>
    </div>
  );
}

export default Cards;

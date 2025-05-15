import React from 'react'

function Cards({ data }) {
  return (
    <div>

        <div className="card" style={{ width: "15rem" }}>
            <img src={data.thumbnail} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">
                    {data.descrption}
                </p>
                <a href="#" className="btn btn-primary">
                    Go somewhere
                </a>
            </div>
        </div>

    </div>
  )
}

export default Cards
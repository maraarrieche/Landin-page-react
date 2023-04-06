import React from 'react'

export const Card = ({title,text, img, href}) => {

return (

<div className="card" style={{width: "18rem"}}>
  <img src={img} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <p className="card-text">{text}</p>
    <a href={href} className="btn d-flex justify-content-center mx-5" id="boton">Recipe here!</a>
  </div>
</div>

)
}

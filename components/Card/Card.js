import React from 'react'
import style from './Card.module.css'

function Card({ description, location, name, srcImg, rating }) {
  return (
    <div className={style.card}>
      <div className={style.card_img} style={{backgroundImage: `URL('${srcImg}')`}}>
        <div className={style.card_loc}>{location}</div>
      </div>
      <div className={style.card_body}>
        <small className={style.card_rating}>Rating : {rating}</small>
        <p className={style.card_title}>{name}</p>
        <p className={style.card_desc}>{description}</p>
      </div>
    </div>
  )
}

export default Card

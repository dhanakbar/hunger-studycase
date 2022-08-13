import React from 'react'
import style from './Card.module.css'

function Card({ description, name, srcImg }) {
  return (
    <div className={style.card}>
      <div className={style.card_img} style={{backgroundImage: `URL('${srcImg}')`}}></div>
      <div className={style.card_body}>
        <small className={style.card_rating}>Rating : 4.5</small>
        <h5 className={style.card_title}>{name}</h5>
        <p className={style.card_desc}>{description}</p>
      </div>
    </div>
  )
}

export default Card

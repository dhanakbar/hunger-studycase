import React from 'react'
import style from './Card.module.css'

function Card() {
  return (
    <div className={style.card}>
      <div className={style.card_img} style={{backgroundImage: "URL('https://media.istockphoto.com/photos/delicious-fresh-watermelon-slices-on-white-wooden-table-top-view-picture-id1403425152?k=20&m=1403425152&s=612x612&w=0&h=GL5p0yUkaaoHyl56nNJY4PQhLTvi29g1Mf-etCDjvZE=')"}}></div>
      <div className={style.card_body}>
        <small className={style.card_rating}>Rating : 4.5</small>
        <h5 className={style.card_title}>Lorem ipsum dolor</h5>
        <p className={style.card_desc}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, a similique! Suscipit eligendi cumque illo optio odit necessitatibus corrupti nulla?</p>
      </div>
    </div>
  )
}

export default Card

import Link from 'next/link';
import React, { useState } from 'react';
import style from './Card.module.css';
import {useRouter} from 'next/router';

function Card({ description, location, name, id, srcImg, rating }) {
  const [count, setCount] = useState(0);
  const { asPath } = useRouter();

  const increase = ()=>{
    setCount(counter => count + 1)
  }
  
  const decrease = ()=>{
    if(count != 0){
      setCount(counter => count - 1)
    }
  }


  return (
    
      <div className={style.card}>
        <Link href={id? `/favorites/${id}` : '/'}>
          <div className={style.card_img} style={{backgroundImage: `URL('${srcImg}')`}}>
            {location && <div className={style.card_loc}>{location}</div>}
          </div>
        </Link>
        <div className={style.card_body}>
          {rating && <small className={style.card_rating}>Rating : {rating}</small>}
          <p className={style.card_title}>{name}</p>
          <p className={style.card_desc}>{description}</p>
        </div>
        {
          asPath.includes('favorites') && <div className={style.quantity}>
          <button onClick={decrease} className={style.decrease}>-</button>
          {count}
          <button onClick={increase} className={style.increase}>+</button>
        </div>

        }
      </div>
  )
}

export default Card

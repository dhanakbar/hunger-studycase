import Head from 'next/head'
import style from '../styles/Home.module.css'
import Layout from '../components/Layout/Layout'
import Card from '../components/Card/Card'
import Button from '../components/Button/Button'
import { useEffect, useState } from 'react'

function Home() {
  const [restaurants, setRestaurants] = useState([])

  useEffect( ()=>{
    fetch('/api/restaurants')
      .then((res) => res.json())
      .then((data) => {
        setRestaurants(data)
      })
  },[])

  return (
    <div>
      <Head>
        <title>Hunger App | Home</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
          <header className={style.hero}>
            <div className={style.banner}>
              <div className={style.display}>
                Find Your Favorite Restaurant.
              </div>
              <p className={style.lead}>
                Fulfill your nutritional needs with healthy and nutritious food at the best restaurants
              </p>
              <Button/>
            </div>
          </header>
          <section className={style.products}>
            <h4 className={style.section_title}>Explore Restaurant</h4>
            <div className={style.cards}>
              {
                restaurants.map(restaurant =>{
                  return(
                    <Card key={restaurant.id} description={restaurant.description} location={restaurant.location} name={restaurant.name} srcImg={restaurant.image} rating={restaurant.rating}/>
                  )
                })
              }
            </div>
          </section>
        </Layout>
    </div>
  )
}

export default Home

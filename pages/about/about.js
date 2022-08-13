import React from 'react'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout/Layout'
import Card from '../../components/Card/Card'
import Button from '../../components/Button/Button'

import style from './about.module.css'

function About() {
    return (
        <Layout>
            <header className={style.hero}>
                <div className={style.banner}>
                    <h3 className={style.display}>
                        Find Your Favorite Restaurant.
                    </h3>
                    <p className={style.lead}>
                    Fulfill your nutritional needs with healthy and nutritious food at the best restaurants
                    </p>
                    <Button/>
                </div>
            </header>
            <section className={style.products}>
                <h4 className={style.section_title}>Explore Restaurant</h4>
                <div className={style.cards}>
                    <Card description="Maulana's Resto is one of the restaurant in Bandung which is luxurious and elegant. This restaurant is perfect for any occasion with family and friends. In addition, this restaurant is famous for its very friendly service and a clean spacious place." name="Maulana's Resto" srcImg="https://media-cdn.tripadvisor.com/media/photo-s/17/75/3f/d1/restaurant-in-valkenswaard.jpg"/>
                    <Card description="This restaurant will make you feel like you’re in the sanctuary with its interior which is mostly made of wood and also surrounded by plants. It is suitable for those of you who are looking for a place to eat while relaxing with friends" name="Akbar's Resto" srcImg="https://indonesia.tripcanvas.co/wp-content/uploads/2017/01/jakarta-dining-with-a-view-feature.jpg"/>
                    <Card description="With the unfinished building design, Garland Social House has succeeded in making this restaurant an aesthetic and popular place for young people, not to mention that good service and a clean place make this restaurant even more famous." name="Ramadhan's Resto" srcImg="https://a.cdn-hotels.com/gdcs/production70/d1612/e770458c-1d0a-4db2-bda6-54dd62d794de.jpg"/>
                </div>
            </section>
            <Footer/>
        </Layout>
    )
}

export default About

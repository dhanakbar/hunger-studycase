import React from 'react'
import Footer from '../../components/Footer/Footer'
import Layout from '../../components/Layout/Layout'
import Card from '../../components/Card/Card'

import style from './about.module.css'

function About() {
    return (
        <Layout>
            <header className={style.hero}>
            </header>
            <section className={style.products}>
                <h4 className={style.section_title}>Explore Restaurant</h4>
                <div className={style.cards}>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </section>
            <Footer/>
        </Layout>
    )
}

export default About

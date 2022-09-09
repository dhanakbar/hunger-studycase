import Head from 'next/head'
import { useEffect, useState } from "react";
import Layout from "../../components/Layout/Layout";
import style from "./Galery.module.css";
import Card from "../../components/Card/Card";

function Galery() {
    const [restaurantsAsyncAwait, setRestaurantsAsyncAwait] = useState([])
    const [restaurantsPromise, setRestaurantsPromise] = useState([])

    const fetchApiAsyncAwait = async () => {
        try{
            const response = await fetch('/api/restaurants');
            const data = await response.json();
            setRestaurantsAsyncAwait(data) 
        }catch(err){
            console.error('Error' + err);
        }
    };

    const fetchApiPromise = () => {
        const response = fetch('/api/restaurants');
        response
            .then((res) => res.json())
            .then((data) => {
                setRestaurantsPromise(data)
            }).catch(err=>{
                console.log("error" + err.message);
            });
    };

    useEffect( ()=>{
        fetchApiPromise();
        fetchApiAsyncAwait();
    },[])

    return <>
        <Head>
            <title>Hunger App | Galery</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Layout>
            <section className={style.products}>
                <h4 className={style.section_title}>Explore Restaurant 'Async/Await'</h4>
                <div className={style.cards}>
                    {
                        restaurantsAsyncAwait.map(restaurant =>{
                        return(
                            <Card key={restaurant.id} description={restaurant.description} location={restaurant.location} name={restaurant.name} srcImg={restaurant.image} rating={restaurant.rating}/>
                        )
                        })
                    }
                </div>
            </section>
            <section className={style.products}>
                <h4 className={style.section_title}>Explore Restaurant 'Promise'</h4>
                <div className={style.cards}>
                    {
                        restaurantsPromise.map(restaurant =>{
                        return(
                            <Card key={restaurant.id} description={restaurant.description} location={restaurant.location} name={restaurant.name} srcImg={restaurant.image} rating={restaurant.rating}/>
                        )
                        })
                    }
                </div>
            </section>
        </Layout>
    </>;
}

export default Galery;

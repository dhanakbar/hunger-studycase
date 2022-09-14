import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";
import style from "./Favorite.module.css";
import Layout from "../../../components/Layout/Layout";
import { restaurants } from "../../../data/restaurants";

function Favorite() {
    const [foods, setFoods] = useState([]);
    const router = useRouter();
    const { id } = router.query;

    useEffect(() => {
        // const result = restaurants.filter((restaurant) => {
        //     return restaurant.id == parseInt(id);
        // });
        // setFoods(result);
        // console.log(result);
        fetch(`/api/restaurant/${id}`)
        .then(res => res.json())
        .then(data => setFoods(data))
    }, [id]);

    return (
        <>
            <Head>
                <title>Hunger App | Favorite</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Layout>
                <section>
                <div className={style.cards}>
                    
                    {

                        foods[0].menus.map(menu => {
                            return <Card navigate={"/"} description={menu.description} name={menu.menuname} srcImg={menu.images} key={menu.id} />
                        })

                        // console.log(foods)
                    }
                    
                </div>
                </section>
            </Layout>
            </>
        );
    }

    export default Favorite;
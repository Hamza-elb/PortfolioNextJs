import * as React from 'react';
import Head from "next/head";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import styles from "../styles/Home.module.css";
import HomePage from "./homePage";
import Services from "./services";
import Works from "./works";
import Contact from "./contact";

export default function Home() {
    return (<div className={styles.container}>
        <Head>
            <title>bienvenido</title>
            <meta name="description" content="Generated by create next app"/>
            <link rel="icon" href="/w.png"/>
        </Head>
        <Navbar/>
        <HomePage/>
        <Services/>
        <Works/>
        <Contact/>
        <Footer/>
    </div>);

}

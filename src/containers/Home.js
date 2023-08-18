import React from "react";
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Nexus from '../components/Nexus';
import Community from "../components/Community";
import Wallet from "../components/Wallet"

export default () => {
    return (
        <>
            <Hero />
            <Overview />
            <Nexus />
            <Community />
            <Wallet />
        </>
    )
}


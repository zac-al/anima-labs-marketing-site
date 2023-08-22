import React from "react";
import Hero from '../components/Hero';
import Overview from '../components/Overview';
import Nexus from '../components/Nexus';
import Community from "../components/Community";
import Wallet from "../components/Wallet"
import Backpack from "../components/Backpack";
import Roadmap from "../components/Roadmap";
import Contact from "../components/Contact";

export default () => {
    return (
        <>
            <Hero />
            <Overview />
            <Nexus />
            <Community />
            <Wallet />
            <Backpack />
            <Roadmap />
            <Contact />
        </>
    )
}


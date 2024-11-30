'use client'
import React, { useEffect } from "react";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('./components/Navbar'));
const HeroOne = dynamic(() => import('./components/HeroOne'));
const HeroThree = dynamic(() => import('./components/HeroThree'));
const HeroTwo = dynamic(() => import('./components/HeroTwo'));
const AboutUs = dynamic(() => import('./components/AboutUs'));
const Footer = dynamic(() => import('./components/Footer'));
const Switcher = dynamic(() => import('./components/Switcher'));
const Feed = dynamic(() => import('./components/Feed'));

export default function Index() {
    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.setAttribute("dir", "ltr");
            document.documentElement.classList.add('dark');
        }
    }, []);
    return (
        <>
            <Navbar />
            <HeroOne />
            <Feed/>
            <AboutUs />
            <Footer />
            <Switcher />
        </>
    )
}

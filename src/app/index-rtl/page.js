'use client'
import React,{useEffect} from "react";
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/Navbar'));
const HeroOne = dynamic(() => import('../components/HeroOne'));
const AboutUs = dynamic(() => import('../components/AboutUs'));
const Footer = dynamic(() => import('../components/Footer'));
const Switcher = dynamic(() => import('../components/Switcher'));

export default function IndexRtl(){
    useEffect(() => {
        if (typeof window !== "undefined"){
            document.documentElement.setAttribute("dir", "rtl");
            document.documentElement.classList.add('light');
        }
      }, []);
    return(
        <>
            <Navbar/>
            <HeroOne/>
            <AboutUs/>
            <Footer/>
            <Switcher/>
        </>
    )
}

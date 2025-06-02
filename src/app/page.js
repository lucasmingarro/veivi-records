'use client'
import React, { useEffect } from "react";
import dynamic from 'next/dynamic';
import { useSearchParams } from 'next/navigation';
import { scroller } from 'react-scroll';

const Navbar = dynamic(() => import('./components/Navbar'));
const HeroOne = dynamic(() => import('./components/HeroOne'));
const HeroThree = dynamic(() => import('./components/HeroThree'));
const HeroTwo = dynamic(() => import('./components/HeroTwo'));
const AboutUs = dynamic(() => import('./components/AboutUs'));
const Footer = dynamic(() => import('./components/Footer'));
const Switcher = dynamic(() => import('./components/Switcher'));
const Feed = dynamic(() => import('./components/Feed'));

export default function Index() {
    const searchParams = useSearchParams();

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.setAttribute("dir", "ltr");
            document.documentElement.classList.add('dark');

            const target = searchParams.get('scrollTo');
            if (target) {
                setTimeout(() => {
                    scroller.scrollTo(target, {
                        duration: 500,
                        smooth: true,
                        offset: -50, // Ajustá esto si necesitás compensar por el navbar
                    });
                }, 100);
            }
        }
    }, [searchParams]);
    return (
        <>
            <Navbar />
            <HeroOne />
            <Feed />
            <Footer />
            <Switcher />
        </>
    )
}

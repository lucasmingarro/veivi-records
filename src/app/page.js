'use client'
import React, { useEffect, useState } from "react";
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
    const [isReady, setIsReady] = useState(false);
    const scrollTarget = searchParams.get('scrollTo');

    useEffect(() => {
        if (typeof window !== "undefined") {
            document.documentElement.setAttribute("dir", "ltr");
            document.documentElement.classList.add('dark');
            setIsReady(true);
        }
    }, []);

    useEffect(() => {
        if (isReady && scrollTarget) {
            const attemptScroll = (attempts = 0) => {
                const element = document.getElementById(scrollTarget);

                if (element) {
                    // Calculate navbar height dynamically
                    const navbar = document.querySelector('nav') || document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;
                    const additionalOffset = 20; // Extra spacing

                    // Get element position
                    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                    const offsetPosition = elementPosition - navbarHeight - additionalOffset;

                    // Use native scroll for more reliable behavior
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });

                    // Alternative: Use react-scroll with calculated offset
                    // scroller.scrollTo(scrollTarget, {
                    //     duration: 500,
                    //     smooth: true,
                    //     offset: -(navbarHeight + additionalOffset),
                    // });

                    console.log('Scrolled to element:', scrollTarget, 'at position:', offsetPosition);
                } else if (attempts < 30) { // Increased attempts for slower connections
                    console.log(`Attempt ${attempts + 1}: Element '${scrollTarget}' not found, retrying...`);
                    setTimeout(() => attemptScroll(attempts + 1), 100);
                } else {
                    console.warn(`Element with id '${scrollTarget}' not found after ${attempts} attempts`);
                }
            };

            // Wait longer in production and after images might load
            const delay = process.env.NODE_ENV === 'production' ? 1000 : 300;
            setTimeout(attemptScroll, delay);
        }
    }, [isReady, scrollTarget]);

    // Also add this effect to handle window resize (if navbar height changes)
    useEffect(() => {
        const handleResize = () => {
            if (scrollTarget && document.getElementById(scrollTarget)) {
                // Re-scroll on resize after a delay
                setTimeout(() => {
                    const element = document.getElementById(scrollTarget);
                    if (element) {
                        const navbar = document.querySelector('nav') || document.querySelector('.navbar');
                        const navbarHeight = navbar ? navbar.offsetHeight : 0;
                        const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                        const offsetPosition = elementPosition - navbarHeight - 20;

                        window.scrollTo({
                            top: offsetPosition,
                            behavior: 'smooth'
                        });
                    }
                }, 100);
            }
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, [scrollTarget]);

    return (
        <>
            <Navbar />
            <HeroOne />
            <Feed scrollTarget={scrollTarget} />
            <Footer />
            <Switcher />
        </>
    )
}

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
                    const navbar = document.querySelector('nav') || document.querySelector('.navbar');
                    const navbarHeight = navbar ? navbar.offsetHeight : 0;

                    // Get element position
                    const elementRect = element.getBoundingClientRect();
                    const elementPosition = elementRect.top + window.pageYOffset;

                    // Dynamic offset based on element position or use viewport-based positioning
                    let offsetPosition;

                    // Option 1: Center the element in the viewport
                    const viewportCenter = window.innerHeight / 2;
                    offsetPosition = elementPosition - viewportCenter;

                    // Option 2: Or use a percentage-based approach
                    // const offsetFromTop = window.innerHeight * 0.2; // 20% from top
                    // offsetPosition = elementPosition - navbarHeight - offsetFromTop;

                    console.log('Window height:', window.innerHeight);
                    console.log('Viewport center:', viewportCenter);
                    console.log('Element position:', elementPosition);
                    console.log('Final offset position:', offsetPosition);

                    window.scrollTo({
                        top: Math.max(0, offsetPosition), // Prevent negative scroll
                        behavior: 'smooth'
                    });

                    console.log('Scrolled to element:', scrollTarget, 'at position:', offsetPosition);
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

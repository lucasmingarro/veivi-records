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

    // Scroll to ?scrollTo=<element id>. Feed is loaded dynamically and images
    // can shift the layout, so: poll until the target exists, scroll, then keep
    // it aligned while the layout settles, until the user scrolls on their own.
    useEffect(() => {
        if (!isReady || !scrollTarget) return;

        const POLL_MS = 200;
        const MAX_WAIT_MS = 10000;   // give up looking for the target after this
        const SETTLE_MS = 6000;      // keep re-aligning for this long after the first scroll
        const FALLBACK_ID = 'feed';  // unknown/legacy ids land on the feed

        let pollTimer;
        let settleTimer;
        let observer;
        let userInteracted = false;
        const startedAt = Date.now();

        const targetTop = (element) => {
            const navbar = document.querySelector('nav') || document.querySelector('.navbar');
            const navbarHeight = navbar ? navbar.offsetHeight : 0;
            return Math.max(0, element.getBoundingClientRect().top + window.scrollY - navbarHeight - 20);
        };

        const stopAligning = () => {
            userInteracted = true;
            observer?.disconnect();
            clearTimeout(settleTimer);
        };
        const interactionEvents = ['wheel', 'touchstart', 'keydown', 'mousedown'];
        interactionEvents.forEach((e) => window.addEventListener(e, stopAligning, { passive: true }));

        const scrollToElement = (element) => {
            window.scrollTo({ top: targetTop(element), behavior: 'smooth' });

            // Re-align if content above the target changes size (images, fonts, audio players)
            observer = new ResizeObserver(() => {
                if (userInteracted) return;
                const top = targetTop(element);
                if (Math.abs(window.scrollY - top) > 4) {
                    window.scrollTo({ top, behavior: 'auto' });
                }
            });
            observer.observe(document.body);
            settleTimer = setTimeout(() => observer.disconnect(), SETTLE_MS);
        };

        const poll = () => {
            if (userInteracted) return;
            const element = document.getElementById(scrollTarget);
            if (element) {
                scrollToElement(element);
                return;
            }
            // Feed renders every post when a target is set, so once any post is on
            // screen a missing id is unknown/legacy: fall back to the feed section.
            const feedRendered = document.querySelector(`#${FALLBACK_ID} [id^="post-"]`);
            if (feedRendered || Date.now() - startedAt >= MAX_WAIT_MS) {
                const fallback = document.getElementById(FALLBACK_ID);
                if (fallback) scrollToElement(fallback);
                return;
            }
            pollTimer = setTimeout(poll, POLL_MS);
        };

        poll();

        return () => {
            clearTimeout(pollTimer);
            clearTimeout(settleTimer);
            observer?.disconnect();
            interactionEvents.forEach((e) => window.removeEventListener(e, stopAligning));
        };
    }, [isReady, scrollTarget]);

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

'use client'
import React,{useEffect, useState} from "react";
import Link from "next/link";
import { Link as Link1 } from 'react-scroll';
import * as Unicons from "@iconscout/react-unicons";
import Image from "next/image";

export default function Navbar(){
    let [stickyNavbar, setstickyNavbar] = useState(false);

    useEffect(()=>{
        if (typeof window !== "undefined"){
            window.addEventListener("scroll", windowScroll);
        }
    })

    function windowScroll() {
        setstickyNavbar( document.body.scrollTop >= 50 ||  document.documentElement.scrollTop >= 50)

    }
    return(
        <nav className={`${stickyNavbar ? "is-sticky" : ""} navbar`} id="navbar">
        <div className="container flex flex-wrap items-center justify-between">
            <Link href="/" className="navbar-brand md:me-8" >
                <Image width={183} height={20} src="/images/logo-dark.png" className="inline-block dark:hidden" alt=""/>
                <Image width={183} height={20} src="/images/logo-light.png" className="hidden dark:inline-block" alt=""/>
            </Link>
            {/* <!-- Navbar Manu --> */}
            <div className="navigation lg_992:order-1 lg_992:flex hidden ms-auto" id="menu-collapse">
                <ul className="navbar-nav" id="navbar-navlist">
                    <li className="nav-item">
                        <Link1 to="home" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Home</Link1>
                    </li>
                    <li className="nav-item">
                        <Link1 to="about" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">What’s This All About?</Link1>
                    </li>
                    <li className="nav-item">
                        <Link1 to="feed" activeClass="active" spy={true} smooth={true} duration={500} className="nav-link">Feed</Link1>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
}
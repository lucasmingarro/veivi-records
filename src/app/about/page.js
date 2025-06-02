'use client'
import dynamic from 'next/dynamic';

const Navbar = dynamic(() => import('../components/Navbar'));
const AboutUs = dynamic(() => import('../components/AboutUs'));
const Footer = dynamic(() => import('../components/Footer'));
const Switcher = dynamic(() => import('../components/Switcher'));

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <AboutUs />
      <Footer />
      <Switcher />
    </>
  );
}

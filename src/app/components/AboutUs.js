'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { expertiseData } from "../Data/data"
import CountUp from 'react-countup';

export default function AboutUs() {

    return (
        <section className="relative md:py-24 py-16" id="about">
            <div className="container">
                <div className="grid lg:grid-cols-12 md:grid-cols-2 grid-cols-1 items-center gap-[30px]">
                    <div className="lg:col-span-5 lg:px-8">
                        <div className="relative">
                            <div className="absolute inset-0 border dark:border-gray-800 rounded-full -mt-[10px] -ms-3 h-[100%] w-[100%] -z-1"></div>
                            <Image src="/images/low-section-of-young-musician-holding-saxophone-in-2024-11-09-01-01-58-utc.jpg" alt="" height={0} width={0} sizes="100vw" style={{ height: "auto", width: "100%" }} className="rounded-full shadow-md shadow-gray-200 dark:shadow-gray-800" />

                            <div className="absolute lg:bottom-20 md:bottom-10 bottom-6 ltr:lg:-right-16 rtl:lg:-left-16 ltr:md:-right-8 rtl:md:-left-8 ltr:right-0 rtl:left-0 p-4 rounded-lg shadow-md dark:shadow-gray-800 bg-white dark:bg-slate-900 m-3 w-44 text-center">
                                <h6 className="font-semibold">Music Curator</h6>
                                <span className="text-2xl font-medium text-amber-500 mb-0"><span className="counter-value font-bold" data-target="7"><CountUp
                                    start={7}
                                    className="counter-value"
                                    end={100}
                                    duration={2.75} /></span>+</span>
                                <span className="text-sm text-slate-400">Tracks <br /> and counting!</span>
                            </div>
                        </div>
                    </div>

                    <div className="lg:col-span-7">
                        <div className="lg:ms-5">
                            <h3 className="mb-6 md:text-2xl text-xl md:leading-normal leading-normal font-semibold">What’s This All About?</h3>

                            <p className="text-slate-400 max-w-xl text-[15px]">Welcome to this little corner where we’re breaking the circle. Guille shares all this—music, texts, images, and more—with his friends on WhatsApp. It’s meant just for them, but here, we’re archiving it all. This page is simply a way to keep those creative sparks alive and accessible.

Take a dive, explore the vibes, and enjoy this collection of moments that were once shared among friends.</p>
                            <p className="text-slate-400 max-w-xl text-[15px]">Saludos,
                                 Veivi Récords</p>

                            <div className="mt-6">
                                <Link href="#project" className="btn bg-amber-500/10 hover:bg-amber-500 border-amber-500/10 hover:border-amber-500 text-amber-500 hover:text-white rounded-md me-2 mt-2">Feed</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

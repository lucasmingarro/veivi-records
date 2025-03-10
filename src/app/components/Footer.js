'use client'
import React from "react";
import Link from "next/link";
import Image from "next/image";
import TidalIcon from "../assets/icons/TidalIcon";
import * as Unicons from "@iconscout/react-unicons"
export default function Footer() {
    return (
        <footer className="footer bg-dark-footer relative text-gray-200 dark:text-gray-200">
            <div className="py-[30px] px-0 border-t border-slate-800">
                <div className="container text-center">
                    <div className="grid lg:grid-cols-12 md:grid-cols-3 grid-cols-1 items-center">
                        <div className="lg:col-span-3 md:text-start text-center">
                            <Link href="#" className="text-[22px] focus:outline-none">
                                <Image src="/images/logo-light.png" width={96} height={20} className="mx-auto md:me-auto md:ms-0" alt="" />
                            </Link>
                        </div>

                        <div className="lg:col-span-5 text-center mt-6 md:mt-0">
                            <p className="mb-0">© {new Date().getFullYear()}</p>
                        </div>


                    </div>
                </div>
            </div>
        </footer>
    )
}

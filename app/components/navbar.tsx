'use client'
import Link from "next/link"
import useResize from "../lib/util/useResize"
import React, { useState } from "react"


export default function Navbar({ info }){
    const {winX,winY,mobile} = useResize()
    const [mobileMenu, setMenu] = useState(false)

    const updateMenu=()=>{
        if(!mobileMenu){
            setMenu(true)
        }else{setMenu(false)}
      }

      const closeMenu=()=>{
        setMenu(false)
      }

    return(
        <nav className="w-full relative grid px-[20px] uppercase py-5 items-start grid-cols-12">
            <div className="relative flex items-start col-span-6 col-start-0 z-20">
                <Link href="/" className="font-nav mr-5">{info.title}</Link>
                <p className="font-nav">{info.desc}</p>
            </div>
           
                {!mobile?(
                     <div className="relative flex items-end pl-[20px] col-span-3 col-start-10">
                     < div className="mr-5 w-1/2">
                            <div><Link href="/projects" className="navItem w-full"> Projects</Link></div>
                            <div><Link href="/about" className="navItem w-full"> about</Link></div>
                      </div>
                    <div className="w-1/2">
                       <div> <a href="https://www.instagram.com/van_alpert/" className="navItem w-full"> instagram</a></div>
                       <div> <a href={`mailto:${info.email}`} className="navItem w-full"> Email</a></div>
                    </div>
                    </div>
                ):(

                    <div className="relative pl-[20px] col-span-3 col-start-10 z-20">
                        <div><p className="navItem w-full cursor-pointer text-right" onClick={updateMenu}> {mobileMenu?('Close'):('Menu')}</p></div>
                    </div>
                  
                    
                )}

            <div onClick={closeMenu} className={`grid grid-cols-12 px-[20px] z-10 fixed top-0 left-0 w-[100vw] h-[100vh] bg-[white] ${mobileMenu?(`opacity-100 pointer-events-auto`):( `opacity-0 pointer-events-none`)}`}>
                    <div className="menuHold mt-[100px]">
                    <div className="mb-[20px]"><Link href="/projects" className="navItem w-full"> <p>Projects</p></Link></div>
                    <div className="mb-[20px]"><Link href="/about" className="navItem w-full"> <p>about</p></Link></div>
                    <div className="mb-[20px]"> <a href="https://www.instagram.com/van_alpert/" className="navItem w-full"> <p>instagram</p></a></div>
                    <div className="mb-[20px]"> <a href={`mailto:${info.email}`} className="navItem w-full]"> <p>Email</p></a></div>
                    </div>
                </div>   
         
        </nav>
    );
}
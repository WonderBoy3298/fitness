import React from 'react';
import {SelectedPage} from "../shared/SelectedPage";
import useMediaQuery from "../hooks/useMediaQuery";
import ActionButton from "../shared/ActionButton";
import HomePageGraphic from "../assets/HomePageGraphic.png"
import HomePageText from "../assets/HomePageText.png"
import SponsporRedbull from "../assets/SponsorRedBull.png"
import Forbes from "../assets/SponsorForbes.png"
import SponsporFortune from "../assets/SponsorFortune.png"

import AnchorLink from "react-anchor-link-smooth-scroll"

interface  Props {
    setSelectedPage:(value:SelectedPage)=>void
}

function Home({setSelectedPage}:Props) {

    const isAboveMediaQuery = useMediaQuery("(min-width: 1060px)")


    return (
        <section id="#home" className="gap-16 bg-gray-20 py-20 md:h-full md:pb-0 ">
            {/*Image and main header */}
            <div className="md:flex mx-auto w-5/6 justify-center items-center md:h-5/6">
                {/*Main Header*/}
                <div  className="z-10 mt-32 md:basis-3/5">
                    {/*Heading*/}
                    <div className="md:-mt-20">
                        <div className="relative border">
                            <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1]  md:before:content-evolvetext">
                                <img src={HomePageText}/>
                            </div>
                        </div>
                        <p className="mt-8 text-sm">
                            Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
                            Studios to get the Body Shapes That you Dream of.. Get Your Dream
                            Body Now.
                        </p>


                    </div>
                    {/*Actions*/}
                    <div className="mt-8 flex items-center gap-8 md:justify-start ">
                        <ActionButton childern={"join Now "} setSelectedPage={setSelectedPage} />
                        <AnchorLink className="text-sm font-bold text-primary-500  underline hover:text-secondary-500"
                        onClick={()=>{setSelectedPage(SelectedPage.ContactUs)} }
                         href={`#${SelectedPage.ContactUs}`}>
                           <p>Learn More. </p>
                        </AnchorLink>
                    </div>

                </div>
                {/*Big Image*/}
                <div className="flex basis-4/5 justify-center  md:ml-40 md:mt-16 ">
                    <img  src={HomePageGraphic} />
                </div>
            </div>
            {/*Sponsors*/}
            {isAboveMediaQuery &&(
                <div className="h-[150px] w-full bg-primary-100 py-10  flex items-center justify-center ">
                    <div className="mx-auto w-3/6" >
                        <div className="flex  w-full items-center justify-between border-red ">
                            <img src={SponsporRedbull}/>
                            <img src={Forbes}/>
                            <img src={SponsporFortune}/>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default Home;
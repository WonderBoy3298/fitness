import React, {useState} from 'react';
import {Bars3Icon,XMarkIcon} from "@heroicons/react/24/solid"

import Logo from "../assets/Logo.png"
import Link from "./Link";
import  {SelectedPage} from "../shared/SelectedPage";
import useMediaQuery from "../hooks/useMediaQuery";
import ActionButton from "../shared/ActionButton";

interface Props {
    selectedPage:string,
    setSelectedPage: (value:SelectedPage) => void
    isTopOfPage:boolean
}

function Navbars({selectedPage,setSelectedPage,isTopOfPage}:Props) {

    const flexBetween = "flex justify-between items-center"
    const isAboveMediaQuery = useMediaQuery("(min-width: 1060px)") // est ce au dessus fo9
    const  [isToogle,setisToogle] = useState<boolean>(false)
    const navBg = (!isTopOfPage)? `bg-primary-100 drop-shadow`: ``

    return (
        <nav>
            <div className={`${flexBetween} fixed top-0 w-full z-30 py-6 ${navBg}`}>

                <div className={`${flexBetween} mx-auto w-5/6`}>
                        <div className={`${flexBetween}  gap-16 w-full `}>
                            {/*  Left side*/}
                            <img alt="alt" src={Logo}/>

                            {isAboveMediaQuery ? (
                                <div className={`${flexBetween} w-full`}>
                                    {/*  Left side*/}
                                    <div className={`${flexBetween} gap-8 text-sm`}>
                                        <Link page={"Home"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                        <Link page={"Benefits"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                        <Link page={"Our Classes"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                                        <Link page={"Contact Us"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

                                    </div>

                                    {/*  Right side*/}
                                    <div className={`${flexBetween} gap-8`}>
                                        <p>Sign In</p>
                                        <ActionButton childern={"Become A member"} setSelectedPage={setSelectedPage} />

                                    </div>


                                </div>
                            ):(
                                <button className="rounded-full bg-secondary-500 p-2"
                                onClick={()=>{setisToogle(!isToogle)} }>
                                    <Bars3Icon className="h-6 w-6 text-white"/>
                                </button>
                            )}
                        </div>
                </div>
            </div>


            {/* Mobile menu div */}
            {!isAboveMediaQuery && isToogle && (
                <div className="fixed right-0 button-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
                    {/* close icone*/}
                    <div className="flex justify-end p-12 ">
                        <button onClick={()=>{setisToogle(!isToogle)}}>
                            <XMarkIcon className="text-gray-400 h-6 w-6 "/>
                        </button>
                    </div>
                    {/* Menu Items */}
                    <div className={`border ml-[33%] flex  flex-col gap-10 text-2xl`}>
                        <Link page={"Home"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page={"Benefits"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page={"Our Classes"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
                        <Link page={"Contact Us"} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>

                    </div>
                </div>
            )}

        </nav>
    );
}

export default Navbars;
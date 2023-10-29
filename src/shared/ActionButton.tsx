import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll"
import {SelectedPage} from "./SelectedPage";


interface  Props {
    childern : React.ReactNode
    setSelectedPage : (value : SelectedPage) => void
}
function ActionButton({childern,setSelectedPage}:Props) {

    return (
        <AnchorLink className="rounded-md bg-secondary-500 px-10 py-2 hover:bg-primary-500 hover:text-white transition duration-500"
        onClick={()=>setSelectedPage(SelectedPage.ContactUs)} href={`#${SelectedPage.ContactUs}`}
        >

            {childern}

        </AnchorLink>
    );


}

export default ActionButton;
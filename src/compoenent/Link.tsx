import React from 'react';
import AnchorLink from "react-anchor-link-smooth-scroll"
import  {SelectedPage} from "../shared/SelectedPage";

interface  Props  {
    page:string,
    selectedPage:string,
    setSelectedPage: (value:SelectedPage) => void
}

function Link({page,selectedPage,setSelectedPage}:Props) {

    const toLowerCase = page.toLowerCase().replace(/ /g,"") as SelectedPage
    return (
    <AnchorLink
        className={`${selectedPage === toLowerCase?"text-primary-500":"" }
        transition duration-500 hover:text-primary-300
        ` }
        href={`#${toLowerCase}`}
        onClick={()=>setSelectedPage(toLowerCase)}
    >
        {page}
    </AnchorLink>


        );
}

export default Link;
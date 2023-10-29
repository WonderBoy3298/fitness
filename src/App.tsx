import {useEffect, useState} from 'react'

import Navbars from './compoenent/Navbars'

import {SelectedPage} from "./shared/SelectedPage"
import Home from "./compoenent/Home";


function App() {

    const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home)
    const [isTopOfPage,setisTopOfPage] = useState<boolean>(true)

    useEffect(()=>{
        const handleScroll  = ()=>{
            if (window.scrollY === 0 ){
                setisTopOfPage(true)
                setSelectedPage(SelectedPage.Home)
            }
            else {
                setisTopOfPage(false)
            }
        }
        window.addEventListener("scoll",handleScroll)

    },[])

  return (
    <div className="app bg-gray-20">

        <Navbars isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
        <Home setSelectedPage={setSelectedPage} />
    </div>
  )
}

export default App

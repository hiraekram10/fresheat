import { useEffect } from "react"
import WelLoader from "../utils/WelLoader"

export default function Temlate({children}){
    useEffect(()=>{
        WelLoader()
    },[])
    return(
        <div className="h-screen">
            <div id="banner1"  className="h-screen bg-black z-10 fixed top-0 left-0 w-1/4"></div>
            <div id="banner2" className="h-screen bg-black z-10 fixed top-0 left-1/4 w-1/4"></div>
            <div id="banner3" className="h-screen bg-black z-10 fixed top-0 left-2/4 w-1/4" ></div>
            <div id="banner4"  className="h-screen bg-black z-10 fixed top-0 left-3/4 w-1/4"></div>
            {children}
        </div>
    )
}
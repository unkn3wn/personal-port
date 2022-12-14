import react, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css"

export default function Skills(){
    
    useEffect(()=>{
        Aos.init({duration:2500})
    },[])

return(
    <h1 data-aos="fade-up">this i my skills page </h1>
)



}
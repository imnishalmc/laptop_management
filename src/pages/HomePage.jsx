import { useEffect, useState } from "react"
import Card from "../Component/Card"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import axios from "axios"

const HomePage=()=>{
    

    const[laptop,setLaptop]=useState([])
    //yo usesatate ko empty array le chai uta bata aauni data haru array form ma hunxa ani easily we can use the map() function

    const fetchLaptops =async()=>{
        const response =await axios.get("http://localhost:3000/laptop")
        // console.log(response.data.datas)
        setLaptop(response.data.datas)
    }
     useEffect(()=>{
        fetchLaptops()
     },[])

    return(
    
        <>
    <Navbar/>
    <div className="flex flex-wrap justify-center m-10 gap-6 ">
 {
    laptop.map((x)=>(
        
            <Card  key ={x.id} value ={x}/>
        )
    )
 }
    </div>
    <Footer/>
        </>
    )
}

export default HomePage

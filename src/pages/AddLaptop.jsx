import { useNavigate } from "react-router-dom"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import { useState } from "react"
import axios from "axios"

const AddLaptop=()=>{
const navigate =useNavigate()
const[laptopDetails, setLaptopDetails]=useState({
    laptopModel:"",
    laptopPrice:"",
    laptopWarrenty:"",
    laptopColor:"",
    laptopCompany:""
});

const handelChange=(event)=>{
const{name,value}=event.target;
setLaptopDetails({
    ...laptopDetails,
    [name]:value,
})
}
const addDetails =async (event)=>{
    alert("hi  nisha ")
event.PreventDefault();
const response= await axios.post("http://localhost:3000/laptop",laptopDetails)
if(response.status==200){
    alert("laptop added sucessfully ")
    navigate("/homepage")
    
}
else{
    alert("something went wrong")
}
};

    return(
        <>
        <Navbar/>
         <form onSubmit={addDetails} >
                
            <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
                <div className="mt-10 text-center font-bold">Here we goooo</div>
                <div className="mt-3 text-center text-4xl font-bold"> Add info of laptop</div>
                <div className="p-10">
                    <div className="flex gap-4">
                        <input
                            type="text"
                          onChange={handelChange}
                            name="laptopModel"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
                            placeholder="laptopModel *"
                        />
                        <input
                            type="order"
                            onChange={handelChange}
                            name="laptopPrice"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
                            placeholder="laptop price *"
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            onChange={handelChange}
                            name="laptopWarrenty"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
                            placeholder="laptopWarrenty"
                        />
                        <input
                            type="price"
                            onChange={handelChange}
                            name="laptopColor"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm  m-5"
                            placeholder="Laptopcolor"
                        />
                    </div>

                    <div className="flex gap-">
                        <input
                            type="text"
                            onChange={handelChange}
                            name="laptopCompany"
                            className="w-full rounded-md border border-slate-300 bg-white px-5 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 m-3"
                            placeholder="laptop Company *"
                        />
                    </div>

                    <div className="text-center">
                        <button  onClick={addDetails} className="px-8 py-4  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg m-4">
                            Add
                        </button>
                    </div>
                </div>
            </div>
        </form >
        <Footer/>   

        </>
    )
}

export default AddLaptop

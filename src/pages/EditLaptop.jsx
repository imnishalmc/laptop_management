import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../Component/Navbar";

const EditLaptop = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [laptop, setLaptop] = useState({});

    const fetchLaptop = async () => {
        const response = await axios.get("http://localhost:3000/laptop/" + id);
        setLaptop(response.data.datas);
    };

    useEffect(() => {
        fetchLaptop();
    }, []);


    const handelChange = (event) => {
    console.log(event,"this is the event ")
       const {name,value}= event.target
       setLaptop({
        ...laptop,
        [name]:value
       })
    }

    const editLaptop =async(event)=>{
    const userConfirmed= confirm("Are you sure you want to edit ")

        event.preventDefault()//unusual url behaviour 
        if(userConfirmed){
        const response=await axios.patch("http://localhost:3000/laptop/" + id,laptop)
        if(response.status==200){
            alert("edited sucessfully")
            navigate("/homepage")
        }else{
            alert("something went wrong ")
        }
    }
    else{
        alert("unsucessfull editing process")
        navigate("/homepage")
    }
}

    return (
        <>
            <Navbar />
            <form onSubmit={editLaptop}>
                
            <div className="mx-14 mt-10 border-2 border-blue-400 rounded-lg">
                <div className="mt-10 text-center font-bold">Here we goooo</div>
                <div className="mt-3 text-center text-4xl font-bold">Edit Order</div>
                <div className="p-10">
                    <div className="flex gap-4">
                        <input
                            type="text"
                            onChange={handelChange}
                            value={laptop.laptopModel}
                            name="laptopModel"
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
                            placeholder="laptopModel *"
                        />
                        <input
                            type="order"
                            onChange={handelChange}
                            name="laptopPrice"
                            value={laptop.laptopPrice}
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
                            placeholder="laptop price *"
                        />
                    </div>
                    <div className="flex gap-4">
                        <input
                            type="text"
                            onChange={handelChange}
                            name="laptopWarrenty"
                            value={laptop.laptopWarrenty}
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm m-5"
                            placeholder="laptopwarrenty"
                        />
                        <input
                            type="price"
                            onChange={handelChange}
                            name="laptopColor"
                            value={laptop.laptopColor}
                            className="mt-1 block w-1/2 rounded-md border border-slate-300 bg-white px-3 py-4  shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 sm:text-sm  m-5"
                            placeholder="Laptopcolor"
                        />
                    </div>

                    <div className="flex gap-">
                        <input
                            type="text"
                            onChange={handelChange}
                            name="laptopCompany"
                            value={laptop.laptopCompany}
                            className="w-full rounded-md border border-slate-300 bg-white px-5 py-3 placeholder-slate-400 shadow-sm placeholder:font-semibold placeholder:text-gray-500 focus:border-sky-500 focus:outline-none focus:ring-1 focus:ring-sky-500 m-3"
                            placeholder="laptop Company *"
                        />
                    </div>

                    <div className="text-center">
                        <button className="px-8 py-4  bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold rounded-full transition-transform transform-gpu hover:-translate-y-1 hover:shadow-lg m-4">
                            Confirm Edits
                        </button>
                    </div>
                </div>
            </div>
        </form >
    </>
  );
};

export default EditLaptop;

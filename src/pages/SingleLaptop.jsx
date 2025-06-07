import { Link, useNavigate, useParams } from "react-router-dom"
import Footer from "../Component/Footer"
import Navbar from "../Component/Navbar"
import { useEffect, useState } from "react"
import axios from "axios"

const SinglePage = () => {
    const navigate = useNavigate()//yo change the page 
    const { id } = useParams()

    const [laptop, setLaptop] = useState({})

    const fetchLaptops = async () => {
        const response = await axios.get("http://localhost:3000/laptop/" + id)
        setLaptop(response.data.datas)
    }
    useEffect(() => {
        fetchLaptops()
    }, [])


    const deleteLaptop = async () => {
        const userConfirmed =confirm("Are You sure ypu want to delete ?" )
        if(userConfirmed){
        const response = await axios.delete("http://localhost:3000/laptop/" + id)
        if (response.status == 200) {
            alert("Deleted Sucessfully")
            navigate("/homepage")
        }
        else {

            alert("something went wrong")
        }
    }
    else{
        alert("Deletion Action Unsucessful")
        navigate("/homepage")
    }
    }
    return (
        <>
            <Navbar />
            <div className="justify-center flex flex-wrap m-10">
                <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                    <img className="w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJOBc888horStIw5v_cpA6OOGG39NMeDgEg&s" alt="Product Image" />
                    <div className="p-5">
                        <h3 className="text-lg font-semibold text-gray-800">{laptop.laptopModel}</h3>
                        <p className="text-gray-600 text-sm mt-2">{laptop.laptopPrice}</p>
                        <div className="flex items-center justify-between mt-4">
                            <span className="text-xl font-bold text-orange-500">{laptop.laptopCompany}</span>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={deleteLaptop} className="inline-block px-7 py-1.5  m-5 overflow-hidden text-sm font-semibold transition-transform rounded-full group text text-white bg-orange-600 hover:bg-orange-800 hover:text-white">
                Delete
            </button>


<div>
    <Link to={`/editpage/${laptop.id}`}>
      <button  className="inline-block px-7 py-1.5  m-5 overflow-hidden text-sm font-semibold transition-transform rounded-full group text text-white bg-orange-600 hover:bg-orange-800 hover:text-white">
                Edit
            </button>
            </Link>
</div>

            <Footer />
        </>
    )
}

export default SinglePage

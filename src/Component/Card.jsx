import { Link } from "react-router-dom"

function Card({value})
{
  return (
    <>
      <Link to={`/singlepage/${value.id}`}>
        {/* Product Card */}
        <div className="max-w-sm bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
          <img className="w-full object-cover" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzJOBc888horStIw5v_cpA6OOGG39NMeDgEg&s" alt="Product Image" />
          <div className="p-5">
            <h3 className="text-lg font-semibold text-gray-800">{value.laptopModel}</h3>
            <p className="text-gray-600 text-sm mt-2">{value.laptopPrice}</p>
            <div className="flex items-center justify-between mt-4">
              <span className="text-xl font-bold text-orange-500">{value.laptopCompany}</span>
              <button className="bg-orange-500 hover:bg-orange-600 text-white text-sm font-semibold px-4 py-2 rounded-lg transition duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </Link>


    </>
  )
}

export default Card

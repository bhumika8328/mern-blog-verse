const ProductCard = () => {
    return (

        <div className="border-1 border-black  w-[300px] flex flex-col items-center gap-10 py-4 round-4x1">
            <img src="vite.svg" alt="" className="h-[100px] b-[200px] border-2  border-blue-300 rounded-full" />
            <div className="flex flex-col gap-5 items-center">
                <p className="front-bold text-4x1 text-green-600">pencil</p>
                <p className="text-1 text-pink-700 text-center"> it is a sample product</p>
                <p className="font-bold text-4x1 text-green-100"></p>
                    <p className="font-bold text-4x1 text-yellow-500 ">10</p>
                    <p className="font-bold text-4x1 text-purple-300">$100..00</p>
            
              

            </div>
            <button className=" bg-blue-600 text-white w-[90%] py-4 rounded-2x1 cursor-pointer hover:bg-blue-900">add to cart</button>
        </div>
    )

}


export default ProductCard
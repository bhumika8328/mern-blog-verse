import react from 'react'
const NavBar = () => {
    return (

        <div className='flex justify-around h-17 items-center border-2 text-gray-900'>
            <h1 className="text-2x1 font-bold">BlogVerse</h1>
            <button ClassName="text-gray-400 bg-amber-200 px-5 py-2 rounded cursor-pointer">Home</button>
            <div className=" flex gap-6">
                <button className="font-semibold text-gray-600">Sign In</button>
                <button ClassName="bg-blue-600 text-white px-5 py-2 rounded-x1 cursor-pointer">SignUp</button>

            </div>
        </div>
    )
}
export default NavBar
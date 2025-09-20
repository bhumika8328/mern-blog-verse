import react from 'react'
import {Link} from 'react-router-dom'
const NavBar = () => {
    return (

        <div className='flex justify-around h-17 w-full items-center border-2 text-gray-900'>
            <h1 className="text-2x1 font-bold">BlogVerse</h1>
            <Link to="/Home" className="text-gray-400 bg-amber-200 px-5 py-2 rounded cursor-pointer">Home</Link>
            <div className=" flex gap-6">
                <Link to="/SignUp" className="font-semibold text-gray-600">SignUp</Link>
                <Link to="/SignIn" className="bg-blue-600 text-white px-5 py-2 rounded-x1 cursor-pointer">SignIn</Link>

            </div>
        </div>
    )
}
export default NavBar
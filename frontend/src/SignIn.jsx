import NavBar from "./NavBar.jsx"
const SignIn = () => {
    return (
        <div className="flex justify-center" >
            <NavBar/>
            <div className="border-2 w-100 flex flex-col">
                <h1 className="flex items-center flex-col mt-10 gap-5">SignIN</h1>
                <p className=" flex items-center flex-col mt-5 gap-1">access your account</p>

                <div className="w-[80%] px-4 gap-1">
                    <p>email address</p>
                    <p className="text-md text-gray-700 font-semibold"></p>
                    <input type="text" placeholder="sample@ gmail.com" className="border-4 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-gray-500" />
                </div>
                <div className="w-[80%] px-4 py-2">
                    <p>password</p>
                    <p className="text-md text-gray-700 font-semibold"></p>
                    <input type="Password" Placeholder="sample 123" className="border-4 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-gray-500" />
                </div>
                <div className="w-full flex  gap-3">
                     <input type="checkbox" gap-2/> 
                    <p>remember me</p>
                    <p className="text-blue-700">forgot password?</p>

                </div>
                <div className="w-[80%] px-4 py-2">
                    <p className="text-md text bg-blue-500 font-semihold px-30 py-4">SignIn</p>
                    {/* <input type=" text" placeholder="signin" className="border-1 w-full border-blue-800 px-2 py-1 rounded-x1 focus:outline-none focus:border-gray-500" /> */}
                </div>
                <div className="border-[0.5px] w-[80%]"></div>
                <div >
                    <button className="text-white rounded-x1"></button>
                    <p>already have an account?<span className="text-blue-500">create one here</span></p>
                </div>
            </div>
        

        </div>
    )
}

export default SignIn
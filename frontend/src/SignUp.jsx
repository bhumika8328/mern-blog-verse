const SignUp = () => {
    return (
        <div className="flex items-center flex-col mt-10 gap-5">
            <h1 className="text-3xl text-blue-600 font-bold">join BlogVerse</h1>
            <p className="text-gray-600 text-center text-2x1"></p>
            <p>create your account and start your blogging journey tday</p>
            <form action="" className="border-black w-1/3 p-7 border-1 items-center">


                <div className="w-[90%]" >
                    {/* <div className="w-[90%]"></div>
                <p className="text-md text-gray-700"></p> */}
                    <p>Full Name</p>
                    <input type="text"
                     placeholder="enter your full name " className="border-1 w-full border-1gray-700 px-4  py-3 rounded-2x1 focus: outline-none focus border-purple-500" />
                </div>

                <div className="w-[90%]" >
                    {/* <div className="w-[90%]"></div>
                <p className="text-md text-gray-700"></p> */}
                    <p>email</p>
                    <input type="email"
                     placeholder="enter your email " className="border-1 w-full border-1gray-700 px-4 py-3 rounded-2x1 focus: outline-none focus border-purple-500" />
                </div>

                <div className="w-[90%]" >
                    {/* <div className="w-[90%]"></div>
                <p className="text-md text-gray-700"></p> */}
                    <p>password</p>
                    <input type="password"
                        placeholder="enter your password " className="border-1 w-full border-1gray-700 px-4 py-3 rounded-2x1 focus: outline-none focus border-purple-500" />
                </div>

                <div className="w-[90%]" >
                    {/* <div className="w-[90%]"></div>
                <p className="text-md text-gray-700"></p> */}
                    <p>confirm your password</p>
                    <input type="confirm your password"
                     placeholder="confirm your password" className="border-1 w-full border1-gray-700 px-4 py-3  rounded-2x1 focus: outline-none focus border-purple-500" />
                </div>
                <div>
                    <input type="check box name=" id="" />
                    <p>i agree to the terms of service and privacy of policy</p>
                </div>
                <div className="flex gap-2 border-1  border-gray-800 w-[90%] py-5 px-4 rounded=xl items-center justify content ">
                    <input type="check box name=" id="" 
                    className="h-5 w-5"/>
                    <p>i agree to the terms of service and privacy of policy</p>

                </div>
                <button className="w-[90%] bg-purple-500 py-4 text-white rounded-x1">create account</button>
                <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
                <p>already have an account?<span className="text-purple-500">sign in here</span></p>
                <button className="text-gray font-semibold hover :bg-gray-200 py-4 w-[90%] rounded -x1 cursor-pointer" >back to home</button>


            </form>
        </div>
    )  
}
export default SignUp
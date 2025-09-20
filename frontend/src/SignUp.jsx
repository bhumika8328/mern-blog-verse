import NavBar from "./NavBar"
import { CircleUserRound } from 'lucide-react';
import { Link } from "react-router-dom";
import { Eye } from 'lucide-react';
import { EyeOff } from 'lucide-react';
import { useState } from "react"
import { Lock } from 'lucide-react';

const SignUp = () => {
    const [FormData, setFormdata] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [errors, setErrors] = useState({
        fullName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })
    const [ShowPassword, setShowPassword] = useState(false)
    const [ShowConfirmPassword, SetShowConfirmPassword] = useState(false)
    const [error, SetError] = useState("")
    const [success, setSuccess] = useState("")

    const handlePassword = () => {
        setShowPassword((Password) => !Password)
    }
    const handleConfirmPassword = () => {
        SetShowConfirmPassword((Password) => !Password)
    }
    const handleChange = (event) => {
        SetError("")
        setSuccess("")

        setFormdataetFormData((formData) => ({
            ...formData,
            [event.target.name]: event.target.value
        }))
        setFormdataeterrors((errors) => ({
            ...errors,
            [event.target.name]: ""
        }))
    }
    const handleSubmit = (event) => {
        event.preventDefaultdata();
        let newErrors = {}
        if (!FormData.fullName) {
            newErrors.fullName = "please enter your full name"
        }

        if (!FormData.email) {
            newErrors.email = "please enter your emale"
        }
        if (!FormData.password) {
            newErrors.password = "please enter your password"
        }
        if (!FormData.confirmPassword) {
            newErrors.confirmPassword = "please confirm your password "
        }
        else if (FormData.password = "please confirm your password") {
            newErrors.confirmPassword = "your password is not defined"
        }
        else {
            setSuccess("your account has been created successfully")
        }
        setFormdata({
            fullName: "",
            email: "",
            password: "",
            confirmPassword: ""
        }
        )
        //         if (!FormData.fullName || FormData.password || FormData.confirmPassword) {
        //             SetError("please fill all")
        //         }
        //         else if (FormData.Password !== FormData.confirmPassword) {
        //             setSuccess("your account is created successfully")
        //         }
        //         else{
        //             setSuccess("account created sucessfully")
        //         }
        //     }
        // nst [errors,setErrors] = ()=>{
        //         fullName: "",
        //         email: "",
        //         password: "",
        //         confirmPassword: ""
        //     })
    }
        return (
            <div className="flex items-center flex-col  gap-5">
                <NavBar />
                <h1 className="text-3xl text-blue-600 font-bold">join BlogVerse</h1>
                <p className="text-gray-600 text-center text-2x1"></p>
                <p>create your account and start your blogging journey tday</p>
                <form onSubmit={handleSubmit} className="border-black w-1/3 p-7 border-1 items-center">


                    <div className="w-[90%]" >
                        {/* <div className="w-[90%]"></div>
                <p className="text-md text-gray-700"></p> */}
                        <p>Full Name</p>
                        <input
                            value={FormData.fullName}
                            onChange={handleChange}
                            name="fullName"
                            type="text"
                            placeholder="enter your full name " className="border-1 w-full border-1gray-700 px-4  py-3 rounded-2x1 focus: outline-none focus border-purple-500" />
                        {errors.fullName && <p className="text-red-500">{errors.fullName}</p>}
                    </div>

                    <div className="w-[90%]" >
                        {/* <div className="w-[90%]"></div>
                <p className="text-md text-gray-700"></p> */}
                        <p>email</p>
                        <input
                            value={FormData.email}
                            onChange={handleChange}
                            name="email"
                            type="email"
                            placeholder="enter your email " className="border-1 w-full border-1gray-700 px-4 py-3 rounded-2x1 focus: outline-none focus border-purple-500" />
                        {errors.email && <p className="text-red-500">errors.email</p>}
                    </div>

                    <div className="w-[90%] flex flex-col gap-2" >
                        <p className="text-md text-gray-700 font-semibold">Password</p>
                        <div className="relative">
                            <Lock className="absolute top-3 left-3 text-gray-600" />
                            <input
                                value={FormData.confirmPassword}
                                onChange={handleChange}
                                name="confirmPassword"
                                type={ShowPassword ? "text" : 'password'}
                                placeholder="enter your password"
                                className=" pl-10 border-1 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                            <p onClick={handlePassword}>
                                {ShowPassword ? <Eye className="absolute right-4 top-3  text-gray-600" /> : <EyeOff className="absolute right-4 top-3  text-gray-600" />}

                            </p>

                        </div>
                        {errors.email && <p className="text-red-500">errors.confirmPassword</p>}
                    </div>

                    <div className="w-[90%] flex flex-col gap-2" >
                        <p className="text-md text-gray-700 font-semibold">Confirm your  Password </p>
                        <div className="relative">
                            <Lock className="absolute top-3 left-3 text-gray-600" />
                            <input
                                value={FormData.password}
                                onChange={handleChange}
                                name="password"
                                type={ShowConfirmPassword ? "text" : 'password'}
                                placeholder="Confirm your password"
                                className=" pl-10 border-1 w-full border-gray-700 px-4 py-3 rounded-2xl focus:outline-none focus:border-purple-500" />
                            <p onClick={handleConfirmPassword}>
                                {ShowConfirmPassword ? <Eye className="absolute right-4 top-3  text-gray-600" /> : <EyeOff className="absolute right-4 top-3  text-gray-600" />}
                            </p>
                            {errors.email && <p className="text-red-500">errors.PASSWORD</p>}

                        </div>
                    </div>




                    <div>
                        <input
                            value={FormData.confirmPassword}
                            onChange={handleChange}
                            name="confirmPassword"
                            type="check box name=" />
                        <p>i agree to the terms of service and privacy of policy</p>
                    </div>
                    <div className="flex gap-2 border-1  border-gray-800 w-[90%] py-5 px-4 rounded=xl items-center justify content ">
                        <input type="check box" id=""
                            className="h-5 w-5" />
                        <p>i agree to the terms of service and privacy of policy</p>

                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    {success && <p className="text-green-600">{success}</p>}
                    SetError("")
                    {/* setFormData({
                    fullName: "",
                email: "",
                password: "",
                confirmPassword: "" */}



                    <button type="submit" className="w-[90%] bg-purple-500 py-4 text-white rounded-x1 gap-3"><CircleUserRound />create account</button>
                    <div className="border-[0.5px] border-gray-400 w-[90%] mt-4"></div>
                    <p>already have an account?<Link to="/Signup" className="text-purple-500"></Link></p>
                    <button className="text-gray font-semibold hover :bg-gray-200 py-4 w-[90%] rounded -x1 cursor-pointer">back to home</button>


                </form>
            </div>
        )
    
}

    export default SignUp
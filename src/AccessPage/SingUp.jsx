import Lottie from "lottie-react";
import imagelogin from '../assets/reservation/wood-grain-pattern-gray1x.png'
import singupLottie from '../assets/lottie/singup.json'
import { Link, useLocation, useNavigate } from "react-router-dom";
import { IoEyeOff, IoEyeSharp } from "react-icons/io5";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";
import { useContext, useState } from "react";
import { AuthContext } from "../Authentication/Provaider/AuthProvaider";
import Swal from "sweetalert2";

const SingUp = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/'; 

    const { creatAcount } = useContext(AuthContext)
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => {
        console.log(data)
        creatAcount(data.email, data.password)
            .then(res => {
                const loguser = res.loguser;
                console.log(loguser);
                navigate(from, { replace: true });
                Swal.fire('signup successfully')
            })
    }


    const [showPassword, setShowPassword] = useState(false)
    const togolepassword = () => {
        setShowPassword(!showPassword)
    }

    return (
        <>
            <Helmet>
                <title>BISTRO BOSS | Singup </title>
            </Helmet>

            <div className='min-h-screen'
                style={{
                    backgroundImage: `url(${imagelogin})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    // height: '100vh',
                }}

            >
                <div>
                    <div className="flex flex-col justify-center items-center min-h-screen">
                        <div className="grid lg:grid-cols-2 md:grid-cols-1 items-center justify-center w-full max-w-7xl mx-auto shadow-xl md:p-10">

                            <div className="">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <h1 className='text-center text-4xl font-bold'>sing up</h1>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Name</span>
                                        </label>
                                        <input type="text" {...register("name", { required: true })} name='name' placeholder="Name" className="input input-bordered" />
                                        {errors.name && <span className="text-red-600">Name is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email'{...register("email", { required: true })} placeholder="email" className="input input-bordered" />
                                        {errors.email && <span className="text-red-600">email is required</span>}
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <div className="absolute right-2 max-sm:bottom-16 max-lg:bottom-16 md:bottom-5">
                                            <p onClick={togolepassword}>{showPassword ? <IoEyeSharp></IoEyeSharp> : <IoEyeOff></IoEyeOff>} </p>
                                        </div>
                                        <input type={showPassword ? "text" : "password"} name='password' {...register("password", {
                                            required: true,
                                            minLength: 6,
                                            maxLength: 20,
                                            pattern: /(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}/
                                        })}
                                            placeholder="password" className="input input-bordered" />
                                        {errors.password?.type === "minLength" && (<p className="text-red-600">password mast be 6 carecters</p>
                                        )}
                                        {errors.password?.type === "maxLength" && (<p className="text-red-600">password mast be less then 20 cerecters</p>
                                        )}
                                        {errors.password?.type === "pattern" && (<p className="text-red-600">password with at least a symbol, upper and lower case letters and a number</p>
                                        )}

                                    </div>

                                    <div className="form-control mt-6">
                                        <button className="btn bg-[#D1A054B3]">signup</button>
                                    </div>
                                    <p className='text-center text-[#cf8d29b3]'>your Acoutn allrady Created please <Link className="text-green-600 font-bold  hover:underline" to={'/login'}>Login</Link> </p>

                                </form>
                            </div>
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-5xl font-bold">singup now!</h1>
                                <p className="py-6">
                                    <Lottie className="w-80" animationData={singupLottie}></Lottie>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default SingUp;
import { Link, useLocation, useNavigate } from 'react-router-dom';
import imagelogin from '../assets/reservation/wood-grain-pattern-gray1x.png'
import { BiLogoFacebook } from 'react-icons/bi';
import { IoLogoGithub, IoLogoGoogle } from 'react-icons/io';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import loginLottie from '../assets/lottie/login.json'
import Lottie from 'lottie-react';
import AuthHooks from '../Authentication/Provaider/AuthHooks';
import Swal from 'sweetalert2';
import { AuthContext } from '../Authentication/Provaider/AuthProvaider';
import { IoEyeOff, IoEyeSharp } from 'react-icons/io5';
import { Helmet } from 'react-helmet-async';

const Login = () => {
    const captcharep = useRef(null);
    const [desable, setDesable] = useState(true)

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    // const { login, Google, Github, } = AuthHooks()
    const { Google, login } = useContext(AuthContext)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])

    const handaleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        login(email, password)
            .then(res => {
                const user = res.user
                console.log(user);
                navigate(from, { replace: true });
                Swal.fire("Login successfully")
            })
    };
    const handaleValidetCaptcha = e => {
        const user_captcha_value = captcharep.current.value;
        if (validateCaptcha(user_captcha_value)) {
            setDesable()
        }
    }


    const handaleGooglSubmit = async () => {
        try {
            await Google()
            navigate(from, { replace: true });
            Swal.fire("Google Login successfully")
        } catch (error) {
            Swal.fire("Google Login not successfully", error)

        }

    }
    const [showPassword, setShowPassword] = useState(false)
    const togolepassword = () => {
        setShowPassword(!showPassword)
    }


    return (
        <>
            <Helmet>
                <title>BISTRO BOSS | Login </title>
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
                            <div className="flex flex-col justify-center items-center">
                                <h1 className="text-5xl font-bold">Login now!</h1>
                                <p className="py-6">
                                    <Lottie className='w-full max-w-96' animationData={loginLottie}></Lottie>
                                </p>
                            </div>
                            <div className="">
                                <form onSubmit={handaleSubmit} className="card-body">
                                    <h1 className='text-center text-4xl font-bold'>Login</h1>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control relative">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type={showPassword ? "text" : "password"} name='password' placeholder="password" className="input input-bordered" required />
                                        <div className="absolute right-4 bottom-10 ">
                                            <button onClick={togolepassword}>{showPassword ? <IoEyeSharp></IoEyeSharp> : <IoEyeOff></IoEyeOff>} </button>
                                        </div>
                                        <label className="label">
                                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                        </label>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <LoadCanvasTemplate />
                                        </label>
                                        <input type="text" name='captcha' ref={captcharep} placeholder="type the captcha above" className="input input-bordered" required />
                                        <p onClick={handaleValidetCaptcha} className="btn btn-outline btn-xs mt-2 max-w-32">validet</p>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button disabled={desable} className="btn bg-[#D1A054B3]">Login</button>
                                    </div>
                                    <p className='text-center text-[#cf8d29b3]'>New here? Create a New Account please <Link to={"/signup"} className='text-red-600 font-bold hover:underline'>singup</Link> </p>
                                    <div className='flex flex-col justify-center items-center'>
                                        <p>or sing in with</p>
                                        <div className='flex items-center p-2 gap-3'>
                                            <Link className='p-2 border-black border rounded-full'><BiLogoFacebook size={30}></BiLogoFacebook> </Link>
                                            <button onClick={handaleGooglSubmit} className='p-2 border-black border rounded-full'><IoLogoGoogle size={30}></IoLogoGoogle > </button>
                                            <Link className='p-2 border-black border rounded-full'><IoLogoGithub size={30}></IoLogoGithub > </Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
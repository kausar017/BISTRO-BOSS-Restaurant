import { useContext } from "react";
import { AuthContext } from "../Authentication/Provaider/AuthProvaider";
import { IoLogoGoogle } from "react-icons/io5";
import useAxiosPiblic from "../Hooks/useAxiosPiblic";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const SosalLogin = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const { Google } = useContext(AuthContext)
    const axiosPiblic = useAxiosPiblic()

    const handaleGooglSubmit = (e) => {
        e.preventDefault(); // Default behavior বন্ধ করে দিন

        Google()
            .then((res) => {
                console.log(res.user);

                const userInfo = {
                    email: res.user?.email,
                    name: res.user?.displayName,
                };
                axiosPiblic.post('/users', userInfo)
                    .then(res => {
                        navigate(from, { replace: true });
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: "Google Login successfully",
                            showConfirmButton: false,
                            timer: 1500
                        });
                    })


            })
            .catch((error) => {
                console.error("Google Login Failed: ", error);
                Swal.fire({
                    position: "top-center",
                    icon: "error",
                    title: (`Google Login not successfully`, error.message),
                    showConfirmButton: false,
                    timer: 1500
                })
            });
    };

    // .catch(error) {
    // Swal.fire({
    //     position: "top-center",
    //     icon: "success",
    //     title: (`Google Login not successfully`, error),
    //     showConfirmButton: false,
    //     timer: 1500
    // })


    // try {
    //     await Google()
    //     navigate(from, { replace: true });
    //     Swal.fire({
    //         position: "top-center",
    //         icon: "success",
    //         title: "Google Login successfully",
    //         showConfirmButton: false,
    //         timer: 1500
    //     });

    // } 


    return (
        <div>
            <button onClick={handaleGooglSubmit} className='p-2 border-black border rounded-full'><IoLogoGoogle size={30}></IoLogoGoogle > </button>
        </div>
    );
};

export default SosalLogin;
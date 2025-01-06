import { BsCart4 } from "react-icons/bs";
import { FaBook, FaCalendar, FaHome, FaList, FaSwatchbook, FaUsers, FaUtensils } from "react-icons/fa";
import { FaMoneyBills, FaRegMessage } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { Link, NavLink, Outlet } from "react-router-dom";
import './DashbordStyle/Dashbord.css'
import { AiOutlineBars } from "react-icons/ai";
import { GiShoppingBag } from "react-icons/gi";
import UseCard from "../../Hooks/useCard/UseCard";
const Dashbord = () => {

    const [cart] = UseCard()

    const isAdmin = true

    return (
        <div className="container mx-auto grid lg:grid-cols-12">

            <div className="drawer lg:hidden absolute">

                <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content">
                    {/* Page content here */}
                    <label htmlFor="my-drawer" className="btn btn-outline btn-sm drawer-button"> <svg
                        className="swap-off fill-current"
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 512 512">
                        <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
                    </svg></label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu min-h-full w-72 p-4">
                        {/* Sidebar content here */}
                        <div className="col-span-2 border bg-[#D1A054] min-h-screen p-3">
                            <a className="flex flex-col text-center">
                                <span className='text-xl font-bold'>BISTRO BOSS</span>
                                <span className='text-lg font-bold tracking-[4px]'>Restaurant</span>
                            </a>
                            {
                                isAdmin ?
                                    <>
                                        <div className="flex flex-col justify-start py-5 px-2 gap-3">
                                            <NavLink to={'1'}><button className="btn btn-ghost btn-sm uppercase"><FaHome size={20}></FaHome>Admin Home </button></NavLink>
                                            <NavLink to={'/dasbord/addItem'}><button className="btn btn-ghost btn-sm uppercase"><FaUtensils size={20}></FaUtensils > Add Items</button></NavLink>
                                            <NavLink to={'/dasbord/manageItems'}><button className="btn btn-ghost btn-sm uppercase "><FaList size={20}></FaList > manage items </button></NavLink>
                                            <NavLink to={'/dasbord/boking'}><button className="btn btn-ghost btn-sm uppercase"><FaBook size={20}></FaBook> Manage bookings </button></NavLink>
                                            <NavLink to={'/dasbord/users'}><button className="btn btn-ghost btn-sm uppercase "><FaUsers size={20}></FaUsers > all users </button></NavLink>

                                        </div>
                                    </>
                                    :
                                    <>
                                        <div className="flex flex-col justify-start py-5 px-2 gap-3">
                                            <NavLink to={'5'}><button className="btn btn-ghost btn-sm"><FaHome size={20}></FaHome>User Home </button></NavLink>
                                            <NavLink to={'6'}><button className="btn btn-ghost btn-sm"><FaCalendar size={20}></FaCalendar> reservation</button></NavLink>
                                            <NavLink to={'4'}><button className="btn btn-ghost btn-sm "><FaMoneyBills size={20}></FaMoneyBills> payment history </button></NavLink>
                                            <NavLink to={'/dasbord/myCart'}><button className="btn btn-ghost btn-sm"><BsCart4 size={20}></BsCart4> my cart <span className="bg-red-500 p-1 rounded-full text-white">{cart?.length}</span></button></NavLink>
                                            <NavLink to={'7'}><button className="btn btn-ghost btn-sm "><VscPreview size={20}></VscPreview> add review </button></NavLink>
                                            <NavLink to={'9'}><button className="btn btn-ghost btn-sm"><FaSwatchbook size={20}></FaSwatchbook> my booking</button></NavLink>
                                        </div>
                                    </>
                            }

                            <div className="border-b-2 pt-5"></div>
                            <div className="py-5 flex flex-col gap-2">
                                <Link to={'/'}><button className="btn btn-ghost btn-sm"><FaHome size={20}></FaHome>Home </button></Link>
                                <Link to={'/manu'}><button className="btn btn-ghost btn-sm"><AiOutlineBars size={20}></AiOutlineBars> Menu </button></Link>
                                <Link to={'/ourshop/salad'}><button className="btn btn-ghost btn-sm"><GiShoppingBag size={20}></GiShoppingBag> Shop </button></Link>
                                <Link to={'/'}><button className="btn btn-ghost btn-sm"><FaRegMessage size={20}></FaRegMessage> Contact </button></Link>
                            </div>
                        </div>
                    </ul>
                </div>

            </div>
            <div className="col-span-3 border bg-[#D1A054] min-h-screen p-3 lg:block md:hidden sm:hidden max-sm:hidden">
                <a className="flex flex-col text-center">
                    <span className='text-xl font-bold'>BISTRO BOSS</span>
                    <span className='text-lg font-bold tracking-[4px]'>Restaurant</span>
                </a>
                {
                    isAdmin ?
                        <>
                            <div className="flex flex-col justify-start py-5 px-2 gap-3">
                                <NavLink to={'1'}><button className="btn btn-ghost btn-sm uppercase"><FaHome size={20}></FaHome>Admin Home </button></NavLink>
                                <NavLink to={'/dasbord/addItem'}><button className="btn btn-ghost btn-sm uppercase"><FaUtensils size={20}></FaUtensils > Add Items</button></NavLink>
                                <NavLink to={'/dasbord/manageItems'}><button className="btn btn-ghost btn-sm uppercase "><FaList size={20}></FaList > manage items </button></NavLink>
                                <NavLink to={'/dasbord/boking'}><button className="btn btn-ghost btn-sm uppercase"><FaBook size={20}></FaBook> Manage bookings </button></NavLink>
                                <NavLink to={'/dasbord/users'}><button className="btn btn-ghost btn-sm uppercase "><FaUsers size={20}></FaUsers > all users </button></NavLink>

                            </div>
                        </>
                        :
                        <>
                            <div className="flex flex-col justify-start py-5 px-2 gap-3">
                                <NavLink to={'5'}><button className="btn btn-ghost btn-sm"><FaHome size={20}></FaHome>User Home </button></NavLink>
                                <NavLink to={'6'}><button className="btn btn-ghost btn-sm"><FaCalendar size={20}></FaCalendar> reservation</button></NavLink>
                                <NavLink to={'4'}><button className="btn btn-ghost btn-sm "><FaMoneyBills size={20}></FaMoneyBills> payment history </button></NavLink>
                                <NavLink to={'/dasbord/myCart'}><button className="btn btn-ghost btn-sm"><BsCart4 size={20}></BsCart4> my cart <span className="bg-red-500 p-1 rounded-full text-white">{cart?.length}</span></button></NavLink>
                                <NavLink to={'7'}><button className="btn btn-ghost btn-sm "><VscPreview size={20}></VscPreview> add review </button></NavLink>
                                <NavLink to={'9'}><button className="btn btn-ghost btn-sm"><FaSwatchbook size={20}></FaSwatchbook> my booking</button></NavLink>
                            </div>
                        </>
                }

                <div className="border-b-2 pt-5"></div>
                <div className="py-5 flex flex-col gap-2">
                    <Link to={'/'}><button className="btn btn-ghost btn-sm"><FaHome size={20}></FaHome>Home </button></Link>
                    <Link to={'/manu'}><button className="btn btn-ghost btn-sm"><AiOutlineBars size={20}></AiOutlineBars> Menu </button></Link>
                    <Link to={'/ourshop/salad'}><button className="btn btn-ghost btn-sm"><GiShoppingBag size={20}></GiShoppingBag> Shop </button></Link>
                    <Link to={'/'}><button className="btn btn-ghost btn-sm"><FaRegMessage size={20}></FaRegMessage> Contact </button></Link>
                </div>
            </div>

            <div className="col-span-9 border">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashbord;
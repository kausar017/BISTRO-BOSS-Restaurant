import { useEffect, useState } from "react";
import DynamicTitle from "../../Components/DynamicTitle/DynamicTitle";
import ReactStars from "react-rating-stars-component";
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation, Autoplay } from 'swiper/modules';


const TESTIMONIALS = () => {

    const [review, setReview] = useState([])
    // console.log(revieo);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews`)
            .then(res => res.json())
            .then(data => setReview(data))
            .catch(error => {
                console.log(error, 'data fetching error');
            })
    }, [])

    return (
        <div className="py-10">
            <DynamicTitle
                discription={"What Our Clients Say"}
                title={"TESTIMONIALS"}
            ></DynamicTitle>

            <>
                <Swiper
                    navigation={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    modules={[Navigation, Autoplay]}
                    className=" py-5">

                    {
                        review?.map(slaid =>
                            <SwiperSlide key={slaid._id}>

                                <div className="lg:px-52 flex flex-col justify-center items-center text-center">

                                    <ReactStars
                                        count={5}
                                        value={slaid?.rating || 0}
                                        size={24}
                                        activeColor="#ffd700"
                                    />


                                    <p className="text-5xl">“</p>
                                    <p>{slaid.details}</p>
                                    <h1 className="text-3xl font-bold text-[#CD9003]">{slaid.name}</h1>
                                </div>

                            </SwiperSlide>

                        )
                    }

                </Swiper>
            </>

        </div >
    );
};

export default TESTIMONIALS;
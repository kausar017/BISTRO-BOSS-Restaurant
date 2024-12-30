import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import slaid1 from '../../assets/home/slide1.jpg'
import slaid2 from '../../assets/home/slide2.jpg'
import slaid3 from '../../assets/home/slide3.jpg'
import slaid4 from '../../assets/home/slide4.jpg'
import slaid5 from '../../assets/home/slide5.jpg'
// import required modules
import { Pagination, Autoplay } from 'swiper/modules';
import DynamicTitle from '../../Components/DynamicTitle/DynamicTitle';


const Slaider2 = () => {
    // const { discription, title } =DynamicTitle()
    return (
        <>
            <section className='w-8/12 mx-auto py-10'>
                <DynamicTitle discription={'From 11:00am to 10:00pm'} title={"ORDER ONLINE"}>
                </DynamicTitle>
                <Swiper
                    slidesPerView={4}
                    centeredSlides={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: false,
                    }}
                    spaceBetween={30}
                    grabCursor={true}
                    pagination={{
                        clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className="relative group">
                        <img className="w-full transition hover:scale-105" src={slaid1} alt={slaid1} />
                        <h3 className="text-4xl uppercase font-bold bg-black/30 py-10 w-full absolute text-white text-center bottom-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                            Salads
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className="relative group">
                        <img className="w-full transition hover:scale-105" src={slaid2} alt={slaid1} />
                        <h3 className="text-4xl uppercase font-bold bg-black/30 py-10 w-full absolute text-white text-center bottom-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                            pizzas
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className="relative group">
                        <img className="w-full transition hover:scale-105" src={slaid3} alt={slaid1} />
                        <h3 className="text-4xl uppercase font-bold bg-black/30 py-10 w-full absolute text-white text-center bottom-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                            Soups
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className="relative group">
                        <img className="w-full transition hover:scale-105" src={slaid4} alt={slaid1} />
                        <h3 className="text-4xl uppercase font-bold bg-black/30 py-10 w-full absolute text-white text-center bottom-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                            desserts
                        </h3>
                    </SwiperSlide>
                    <SwiperSlide className="relative group">
                        <img className="w-full transition hover:scale-105" src={slaid5} alt={slaid1} />
                        <h3 className="text-4xl uppercase font-bold bg-black/30 py-10 w-full absolute text-white text-center bottom-0 transition-transform duration-500 transform translate-y-full group-hover:translate-y-0">
                            Salads
                        </h3>
                    </SwiperSlide>



                </Swiper>

            </section>
        </>
    );
};

export default Slaider2;
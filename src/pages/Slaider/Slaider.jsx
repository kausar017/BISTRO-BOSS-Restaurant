import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

import slaider1 from '../../assets/home/01.jpg'
import slaider2 from '../../assets/home/02.jpg'
import slaider3 from '../../assets/home/03.png'
import slaider4 from '../../assets/home/04.jpg'
import slaider5 from '../../assets/home/05.png'
import slaider6 from '../../assets/home/06.png'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './style.css';

// Import required modules
import { FreeMode, Navigation, Thumbs, Autoplay } from 'swiper/modules';

const Slaider = () => {
    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <>
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                spaceBetween={10}
                navigation={true}
                autoplay={{
                    delay: 2000,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper }}
                modules={[FreeMode, Navigation, Thumbs, Autoplay]} // Autoplay added here
                className="mySwiper2"
            >
                <SwiperSlide>
                    <img className='w-full h-[70vh] object-cover' src={slaider1} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[70vh] object-cover' src={slaider2} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[70vh] object-cover' src={slaider3} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[70vh] object-cover' src={slaider4} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[70vh] object-cover' src={slaider5} />
                </SwiperSlide>
                <SwiperSlide>
                    <img className='w-full h-[70vh] object-cover' src={slaider6} />
                </SwiperSlide>
            </Swiper>
            <div className='w-8/12 mx-auto py-5'>
                <Swiper
                    onSwiper={setThumbsSwiper}
                    spaceBetween={10}
                    slidesPerView={6}
                    freeMode={true}
                    watchSlidesProgress={true}
                    modules={[FreeMode, Navigation, Thumbs]}
                    className="max-w-[500px]"
                >
                    <SwiperSlide>
                        <img src={slaider1} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slaider2} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slaider3} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slaider4} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slaider5} />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src={slaider6} />
                    </SwiperSlide>
                </Swiper>
            </div>
        </>
    );
};

export default Slaider;

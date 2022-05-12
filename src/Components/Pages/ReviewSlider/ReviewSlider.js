import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import People1 from '../../../assets/images/people1.png';
import People2 from '../../../assets/images/people2.png';

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import './ReviewSlider.css';

import { Autoplay, EffectCoverflow, Pagination } from "swiper";
import ReviewSliderItem from "../ReviewSliderItem/ReviewSliderItem";

const ReviewSlider = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Winson Herry',
            image: People1,
            address: 'California',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 2,
            name: 'Tea Young',
            image: People2,
            address: 'Simgapore',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 3,
            name: 'Neel Paul',
            image: People1,
            address: 'Sylhet',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 4,
            name: 'Sia Lory',
            image: People2,
            address: 'New York',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 5,
            name: 'Jounkook',
            image: People1,
            address: 'Ales',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        },
        {
            _id: 6,
            name: 'Kim Yakono',
            image: People1,
            address: 'Chaina',
            text: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content'
        }
    ]
    return (
        <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
                rotate: 50,
                stretch: 0,
                depth: 100,
                modifier: 1,
                slideShadows: true,
            }}
            pagination={true}
            modules={[Autoplay, EffectCoverflow, Pagination]}
            className="mySwiper"
        >
            {
                reviews.map(review =>
                    <SwiperSlide key={review._id}>
                        <ReviewSliderItem review={review}></ReviewSliderItem>
                    </SwiperSlide>
                )
            }

        </Swiper>
    );
};

export default ReviewSlider;
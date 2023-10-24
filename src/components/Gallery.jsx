import React, { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';

function Gallery({ botRef, title, text, text2, images }) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const swiperInstance = useRef(null);

    useEffect(() => {
        swiperInstance.current.swiper.slideTo(currentSlide);
    }, [currentSlide]);

    return (
        <section className='bot-1' ref={botRef}>
            <div className='bot-text-wrapper'>
                <h2 className='bot-title'>{title}</h2>
                <p className='bot-text'>{text}</p>
                <h2 className='bot-title-about'>О боте</h2>
                <p className='bot-text'>{text2}</p>

                <button className='bot-btn'>Перейти в бота</button>

            </div>
            <div className='sliders'>
                <div className='circle-group-3'>
                    <div className='circle-1'></div>
                    <div className='circle-2'></div>
                    <div className='circle-3'></div>
                    <div className='circle-4'></div>
                    <div className='circle-5'></div>
                </div>

                <Swiper
                    ref={swiperInstance}
                    modules={[Pagination]}
                    className='slider__wrapper'
                    spaceBetween={15}
                    slidesPerView={1}
                    pagination={{ clickable: true }}
                    freeMode={true}
                    initialSlide={currentSlide}
                >
                    {images.map((image, index) => (
                        <SwiperSlide className='slide' key={index}>
                            <img className='img' src={image} alt={`Image ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className='image-list'>
                    {images.map((image, index) => (
                        <img
                            key={index}
                            className='pre-img'
                            src={image}
                            alt={`Image ${index + 1}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Gallery;

"use client"
import { useState } from 'react';
import { Swiper as SwiperObject} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

import './slideshow.css';
import { Autoplay, FreeMode, Navigation, Thumbs } from 'swiper/modules';
import Image from 'next/image';


interface Props {
  images:string[];
  title: string;
  className?: string;
}

export const ProductSlideShow = ({images, title, className}:Props) => {

  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();
  
  return (
    <div className={className}>
      <Swiper
        style={
          {
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          } as React.CSSProperties}
        spaceBetween={10}
        navigation={true}
        /* autoplay={{
          delay:2500
        }} */
        thumbs={{ 
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper:null
        }}
        modules={[FreeMode, Navigation, Thumbs, Autoplay]}
        className="mySwiper2"
      >
        
        {
          images.map(image => (
          <SwiperSlide key={image} className="flex items-center justify-center">
            <Image
              width={1000} // Valor de referencia para la calidad
              height={1000}
              src={`/products/${image}`}
              alt={title}
              className="w-full h-auto max-w-[800px] object-cover mx-auto rounded-2xl border-2 border-red-200" 
              // h-auto hace que la altura se calcule sola para no cortar la imagen
            />
          </SwiperSlide>
          ))
        }
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={10}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="mySwiper"
      >
        {
          images.map(image => (
          <SwiperSlide key={image} className="flex items-center justify-center">
            <Image
              width={300} // Valor de referencia para la calidad
              height={300}
              src={`/products/${image}`}
              alt={title}
              className="w-full h-auto max-w-[800px] object-cover mx-auto rounded-2xl border-2 border-red-100 " 
              // h-auto hace que la altura se calcule sola para no cortar la imagen
            />
          </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

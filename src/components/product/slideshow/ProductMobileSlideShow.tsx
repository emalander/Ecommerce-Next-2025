"use client"

import { Swiper as SwiperObject} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slideshow.css';
import { Autoplay, FreeMode, Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';


interface Props {
  images:string[];
  title: string;
  className?: string;
}

export const ProductMobileSlideShow = ({images, title, className}:Props) => {
  
  return (
    <div className={className}>
      <Swiper
        style={{
          width:'100vw',
          height:'500px'

        }}
        pagination
        navigation={true}
        autoplay={{
          delay:2500
        }}
        modules={[FreeMode, Navigation, Autoplay, Pagination]}
        className="mySwiper2"
      >
        
        {
          images.map(image => (
          <SwiperSlide key={image} className="flex items-center justify-center">
            <Image
              width={600} // Valor de referencia para la calidad
              height={600}
              src={`/products/${image}`}
              alt={title}
              className="w-full h-auto max-w-[800px] object-cover mx-auto" 
              // h-auto hace que la altura se calcule sola para no cortar la imagen
            />
          </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

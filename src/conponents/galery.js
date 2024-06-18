import React from 'react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import photo from '../img/1.png'
import photo2 from '../img/1.png'
import photo3 from '../img/1.png'

export default function Galery() {
	const photos = [photo, photo2, photo3]
	return (
		<section>
			<div className='text-4xl text-center font-serif'>
				Особливості планування
				<div className='my-2 w-[830px] absolute right-0 border-2 rounded border-yellow-900' />
			</div>
			<div className='mt-4'>
				<Swiper
					modules={[EffectCoverflow, Pagination]}
					effect={'coverflow'}
					loop={true}
					spaceBetween={5}
					slidesPerView={3}
					pagination={{
						clickable: true,
					}}
					centeredSlides={true}
					grabCursor={true}
					coverflowEffect={{
						rotate: 0,
						slideShadows: false,
					}}
					className='coverflow'
				>
					{photos.map((p, index) => {
						return (
							<SwiperSlide key={index}>
								<img src={p} alt='' />
							</SwiperSlide>
						)
					})}
				</Swiper>
			</div>
		</section>
	)
}

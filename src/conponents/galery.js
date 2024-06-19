import React from 'react'
import { EffectCoverflow, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

import photo from '../img/1.png'
import photo2 from '../img/1.png'
import photo3 from '../img/1.png'
import photo4 from '../img/1.png'
import photo5 from '../img/1.png'

export default function Galery() {
	const photos = [photo, photo2, photo3, photo4, photo5]
	return (
		<section>
			<div className='flex flex-row items-center text-4xl text-center font-serif lg:block justify-center'>
				<p>Галерея</p>
				<div className='my-2 absolute right-0 w-1/3 border-2 rounded border-yellow-900 lg:w-[830px]' />
			</div>
			<div className='mt-4'>
				<Swiper
					modules={[EffectCoverflow, Pagination]}
					effect={'coverflow'}
					loop={true}
					spaceBetween={10}
					slidesPerView={2}
					pagination={{
						clickable: false,
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

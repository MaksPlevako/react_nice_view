import React from 'react'

import shop from '../img/shop.png'
import educ from '../img/educ.png'
import chill2 from '../img/chill2.png'
import bumble from '../img/bumble.png'
import hospital from '../img/hospital.png'
import rest from '../img/rest.png'
import cafe from '../img/cafe.png'
import park2 from '../img/park2.png'

export default function Infrastructure() {
	return (
		<section className='mt-12 w-full relative'>
			<div className='flex flex-row items-center justify-center text-4xl text-center font-serif text-blue-950 lg:block'>
				<p>Інфраструктура</p>
				<div className='my-2 w-1/6 absolute border-2 rounded border-yellow-900 left-0 lg:w-[830px]' />
			</div>
			<p className='text-gray-500 my-6 ml-2'>
				*знаходяться в радіусі 1 км від ЖК
			</p>
			<div className='grid grid-cols-4 gap-4'>
				<img src={shop} alt='shop' />
				<img src={bumble} alt='bumble' />
				<img src={park2} alt='park2' />
				<img src={cafe} alt='cafe' />
				<img
					className='relative -top-[66px] md:-top-[80px] lg:-top-[110px] xl:-top-1/3'
					src={hospital}
					alt='hospital'
				/>
				<img src={educ} alt='educ' />
				<img
					className='relative -top-[66px] md:-top-[80px] lg:-top-[110px] xl:-top-1/3'
					src={chill2}
					alt='chill2'
				/>
				<img src={rest} alt='rest' />
			</div>
		</section>
	)
}

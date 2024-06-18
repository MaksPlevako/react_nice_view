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
			<div className='text-4xl text-center font-serif text-blue-950'>
				Інфраструктура
				<div className='my-2 w-[830px] absolute left-0 border-2 rounded border-yellow-900' />
			</div>
			<p className='text-gray-500 my-6'>*знаходяться в радіусі 1 км від ЖК</p>
			<div className='grid grid-cols-4 gap-4'>
				<img src={shop} alt='' />
				<img src={bumble} alt='' />
				<img src={park2} alt='' />
				<img src={cafe} alt='' />
				<img className='relative -top-[136px]' src={hospital} alt='' />
				<img src={educ} alt='' />
				<img className='relative -top-[136px]' src={chill2} alt='' />
				<img src={rest} alt='' />
			</div>
		</section>
	)
}

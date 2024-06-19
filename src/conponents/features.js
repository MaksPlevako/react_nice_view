import React from 'react'
import features1 from '../img/features1.png'
import features2 from '../img/features2.png'

export default function Features() {
	return (
		<section className='mt-12 w-full h-[700px] lg:h-[950px] relative'>
			<div className='flex flex-row items-center text-4xl text-center font-serif lg:block justify-center'>
				<p>Особливості планування</p>
				<div className='my-2 absolute right-0 w-1/6 border-2 rounded border-yellow-900 lg:w-[830px]' />
			</div>
			<div className=''>
				<div className='mt-12 lg:ml-12'>
					<img
						className='absolute sm:max-lg:top-20 sm:max-lg:left-0 w-1/3 lg:top-[250px] lg:left-[200px]'
						src={features1}
						alt='1'
					/>
					<img
						className='absolute sm:max-lg:bottom-0 sm:max-lg:right-0 w-1/3 lg:top-[100px]'
						src={features2}
						alt='2'
					/>
				</div>
				<div className='font-serif text-3xl italic relative w-full h-[600px] lg:w-[500px] lg:text-4xl lg:absolute lg:top-1/3 lg:right-3 lg:grid lg:grid-cols-2 lg:gap-4 justify-end text-right'>
					<div className=' text-blue-800 sm:max-lg:absolute left-1/2 top-0'>
						<span className='text-6xl font-semibold'>88</span>
						<br /> сучасних квартир
					</div>
					<div className='text-yellow-800 sm:max-lg:absolute left-1/2 top-1/4'>
						<span className='text-6xl font-semibold'>300</span> <br />
						задоволених власників
					</div>
					<div className='text-yellow-800 sm:max-lg:absolute left-10 bottom-1/4'>
						<span className='text-6xl font-semibold'>40+</span>
						<br /> об’єктів інфраструктури
					</div>
					<div className='text-blue-800 sm:max-lg:absolute left-10 bottom-0'>
						<span className='text-6xl font-semibold'>5</span>
						<br /> успішних проектів
					</div>
				</div>
			</div>
		</section>
	)
}

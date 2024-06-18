import React from 'react'
import features1 from '../img/features1.png'
import features2 from '../img/features2.png'

export default function Features() {
	return (
		<section className='mt-12 w-full h-[980px] relative'>
			<div className='text-4xl text-center font-serif'>
				Особливості планування
				<div className='my-2 w-[830px] absolute right-0 border-2 rounded border-yellow-900' />
			</div>
			<div>
				<div className='relative mt-12 ml-12'>
					<img
						className='absolute top-[250px] left-[200px]'
						src={features1}
						alt='1'
					/>
					<img className='absolute' src={features2} alt='2' />
				</div>
				<div className='w-[500px] absolute top-1/3 right-3 grid grid-cols-2 gap-12 font-serif text-4xl italic'>
					<div className='h-[180px] w-[250px] text-blue-800'>
						<span className='text-6xl font-semibold'>88</span>
						<br /> сучасних квартир
					</div>
					<div className='h-[180px] w-[250px] text-yellow-800'>
						<span className='text-6xl font-semibold'>300</span> <br />
						задоволених власників
					</div>
					<div className='h-[180px] w-[250px] text-yellow-800'>
						<span className='text-6xl font-semibold'>40+</span>
						<br /> об’єктів інфраструктури
					</div>
					<div className='h-[180px] w-[250px] text-blue-800'>
						<span className='text-6xl font-semibold'>5</span>
						<br /> успішних проектів
					</div>
				</div>
			</div>
		</section>
	)
}

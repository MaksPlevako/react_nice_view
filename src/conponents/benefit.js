import React from 'react'
import park from '../img/park.png'
import chill from '../img/chill.png'
import child from '../img/child.png'
import office from '../img/office.png'
import store from '../img/store.png'

export default function Beneficts() {
	return (
		<section className='mt-12 w-full relative'>
			<div className='flex flex-row items-center justify-center text-4xl text-center font-serif text-blue-950 lg:block'>
				<p>Переваги комплексу</p>
				<div className='my-2 w-1/6 absolute border-2 rounded border-yellow-900 left-0 lg:w-[830px]' />
			</div>
			<div className='w-11/12 mx-auto border bg-gradient-to-l from-gray-300 from-[50%] to-gray-300 to-[99.9%] h-[180px] relative mt-6 lg:h-[785px]'>
				<div className='absolute top-1/4 left-1/3 lg:left-8 lg:top-1/2'>
					<p className='text-3xl lg:text-6xl text-blue-800'>10 га парку</p>
					<p className='text-xl lg:text-2xl'>
						Жити в центрі міста, але не на виду.
					</p>
				</div>
				<div className='h-full w-24 ml-14 bg-gradient-to-r from-transparent from-[50%] to-gray-300 to-[99.9%] opacity-90 '>
					<img
						className='w-1/4 absolute left-0 lg:right-0 lg:w-[600px] mix-blend-color'
						src={park}
						alt='park'
					/>
				</div>
			</div>
			<div className='w-11/12 mx-auto border bg-gradient-to-l from-gray-300 from-[50%] to-gray-300 to-[99.9%] h-[180px] relative mt-6 lg:h-[785px]'>
				<div className='h-full w-24 ml-14 bg-gradient-to-r from-transparent from-[50%] to-gray-300 to-[99.9%] opacity-90 '>
					<img
						className='w-1/4 mix-blend-color absolute left-0 lg:w-[600px]'
						src={child}
						alt='park'
					/>
				</div>
				<div className=' lg:right-8 lg:text-right absolute top-1/4 left-1/3 lg:top-1/2'>
					<p className='text-3xl lg:text-6xl text-blue-800'>
						2 школи та 2 дитсадки
					</p>
					<p className='text-xl lg:text-2xl'>Відстань до 750 м від ЖК.</p>
				</div>
			</div>
			<div className='w-11/12 mx-auto border bg-gradient-to-l from-gray-300 from-[50%] to-gray-300 to-[99.9%] h-[180px] relative mt-6 lg:h-[785px]'>
				<div className='absolute top-1/4 left-1/3 lg:left-8 lg:top-1/2'>
					<p className='text-3xl lg:text-6xl text-blue-800'>Безпека 24/7</p>
					<p className='text-xl lg:text-2xl'>
						Закрита територія та відеоспостереження.
					</p>
				</div>
				<div className='h-full w-24 ml-14 bg-gradient-to-r from-transparent from-[50%] to-gray-300 to-[99.9%] opacity-90'>
					<img
						className='w-1/4 absolute left-0 lg:right-0 lg:w-[600px] mix-blend-color'
						src={chill}
						alt='park'
					/>
				</div>
			</div>
			<div className='w-11/12 mx-auto border bg-gradient-to-l from-gray-300 from-[50%] to-gray-300 to-[99.9%] h-[180px] relative mt-6 lg:h-[785px]'>
				<div className='h-full w-24 ml-14 bg-gradient-to-r from-transparent from-[50%] to-gray-300 to-[99.9%] opacity-90'>
					<img
						className='w-1/4 mix-blend-color absolute left-0 lg:w-[600px]'
						src={store}
						alt='park'
					/>
				</div>
				<div className='lg:right-8 lg:text-right absolute top-1/4 left-1/3 lg:top-1/2'>
					<p className='text-3xl lg:text-6xl text-blue-800'>Розумний будинок</p>
					<p className='text-xl lg:text-2xl'>
						Індивідуальна система опалення та регулювання
						<br /> житла за допомогою додатку.
					</p>
				</div>
			</div>
			<div className='w-11/12 mx-auto border bg-gradient-to-l from-gray-300 from-[50%] to-gray-300 to-[99.9%] h-[180px] relative my-6 lg:h-[785px]'>
				<div className='absolute top-1/4 left-1/3 lg:left-8 lg:top-1/2'>
					<p className='text-3xl lg:text-6xl text-blue-800'>Інфраструктура</p>
					<p className='text-xl lg:text-2xl'>Власні керуючі компанії.</p>
				</div>
				<div className='h-full w-24 ml-14 bg-gradient-to-r from-transparent from-[50%] to-gray-300 to-[99.9%] opacity-90'>
					<img
						className='w-1/4 absolute left-0 lg:right-0 lg:w-[600px] mix-blend-color'
						src={office}
						alt='park'
					/>
				</div>
			</div>
		</section>
	)
}

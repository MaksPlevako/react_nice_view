import React from 'react'
import park from '../img/park.png'
import chill from '../img/chill.png'
import child from '../img/child.png'
import office from '../img/office.png'
import store from '../img/store.png'

export default function Beneficts() {
	return (
		<section className='mt-12 w-full relative'>
			<div className='text-4xl text-center font-serif text-blue-950'>
				Переваги комплексу
				<div className='my-2 w-[830px] absolute left-0 border-2 rounded border-yellow-900' />
			</div>
			<div className='h-[785px] relative mt-6'>
				<div className='absolute top-1/2 left-8'>
					<p className='text-6xl text-blue-800'>10 га парку</p>
					<p className='text-2xl'>Жити в центрі міста, але не на виду.</p>
				</div>
				<img className='absolute right-0 w-[600px]' src={park} alt='park' />
			</div>
			<div className='h-[785px] relative -mt-28'>
				<img className='absolute left-0 w-[600px]' src={child} alt='park' />
				<div className='absolute top-1/2 right-8 text-right'>
					<p className='text-6xl text-blue-800'>2 школи та 2 дитсадки</p>
					<p className='text-2xl'>Відстань до 750 м від ЖК.</p>
				</div>
			</div>
			<div className='h-[785px] relative -mt-28'>
				<div className='absolute top-1/2 left-8'>
					<p className='text-6xl text-blue-800'>Безпека 24/7</p>
					<p className='text-2xl'>Закрита територія та відеоспостереження.</p>
				</div>
				<img className='absolute right-0 w-[600px]' src={chill} alt='park' />
			</div>
			<div className='h-[785px] relative -mt-28'>
				<img className='absolute left-0 w-[600px]' src={store} alt='park' />
				<div className='absolute top-1/2 right-8 text-right'>
					<p className='text-6xl text-blue-800'>Розумний будинок</p>
					<p className='text-2xl'>
						Індивідуальна система опалення та регулювання
						<br /> житла за допомогою додатку.
					</p>
				</div>
			</div>
			<div className='h-[785px] relative -mt-28'>
				<div className='absolute top-1/2 left-8'>
					<p className='text-6xl text-blue-800'>Інфраструктура</p>
					<p className='text-2xl'>Власні керуючі компанії.</p>
				</div>
				<img className='absolute right-0 w-[600px]' src={office} alt='park' />
			</div>
		</section>
	)
}

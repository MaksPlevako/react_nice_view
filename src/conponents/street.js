import React from 'react'
import map from '../img/map.png'

export default function Street() {
	return (
		<section className='mt-12 w-full relative'>
			<div className='text-4xl text-center font-serif'>
				Місце розположення
				<div className='my-2 w-[830px] absolute right-0 border-2 rounded border-yellow-900' />
			</div>
			<div className='flex flex-row items-center justify-between mt-10'>
				<div className='text-xl'>
					<p className='italic'>м.Київ, вул. Соборності 12</p>
					<p>
						<span className='font-bold'>Робочі дні:</span> пн-пт 09:00-18:00
					</p>
					<p>
						<span className='font-bold'>Вихідні:</span> сб-нд і святкові дні
					</p>
					<p>
						<span className='font-bold'>Телефон менеджера:</span> +380981194159
					</p>
				</div>
				<img
					className='border-2 rounded-2xl border-yellow-900'
					src={map}
					alt=''
				/>
			</div>
		</section>
	)
}

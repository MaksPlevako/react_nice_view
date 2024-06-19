import React from 'react'
import map from '../img/map.png'

export default function Street() {
	return (
		<section className='mt-12 w-full relative'>
			<div className='flex flex-row items-center text-4xl text-center font-serif lg:block justify-center'>
				Місце розположення
				<div className='my-2 absolute right-0 w-1/6 border-2 rounded border-yellow-900 lg:w-[830px]' />
			</div>
			<img
				className='relative top-4 left-0 w-full border-yellow-900 lg:hidden'
				src={map}
				alt='map'
			/>
			<div className='flex flex-row items-center justify-between mt-10 absolute top-4 left-0 border bg-[#EFE8DD] p-2 lg:static lg:bg-inherit lg:border-none'>
				<div className='text-xl'>
					<p className='italic my-1'>м.Київ, вул. Соборності 12</p>
					<p className='my-1'>
						<span className='font-bold'>Робочі дні:</span> пн-пт 09:00-18:00
					</p>
					<p className='my-1'>
						<span className='font-bold'>Вихідні:</span> сб-нд і святкові дні
					</p>
					<p className='my-1'>
						<span className='font-bold'>Телефон менеджера:</span> +380981194159
					</p>
				</div>
				<img
					className='border-2 rounded-2xl border-yellow-900 hidden w-3/4 lg:block'
					src={map}
					alt='map'
				/>
			</div>
			<div className='w-full text-center my-12 lg:hidden'>
				<button className='w-3/4 text-[#2B9EE7] border-2 rounded-2xl py-4 px-2 text-3xl font-semibold border-[#2B9EE7] bg-[#C9E4EA]'>
					На карту
				</button>
			</div>
		</section>
	)
}

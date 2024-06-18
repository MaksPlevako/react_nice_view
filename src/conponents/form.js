import React from 'react'

export default function Form() {
	return (
		<section className='mt-12 w-full relative'>
			<div className='text-4xl text-center font-serif text-blue-950'>
				Отримати консультацію
				<div className='my-2 w-[830px] absolute left-0 border-2 rounded border-yellow-900' />
			</div>
			<p className='text-gray-500 my-6'>
				Поля відмічені * є обов’язковими для заповнення
			</p>
			<form method='POST' className='w-[1000px] text-xl'>
				<div className='grid grid-cols-4 gap-3 items-center my-3'>
					<label className='italic ml-4'>ПІБ*</label>
					<input
						type='text'
						name='name'
						className='col-span-3 border-2 rounded-xl border-black py-3 px-4'
						placeholder='Плевако Максим Віталійович'
						required
					/>
				</div>
				<div className='grid grid-cols-4 gap-3 items-center my-3'>
					<label className='italic ml-4'>Номер телефону*</label>
					<input
						type='tel'
						name='phone'
						className='col-span-3 border-2 rounded-xl border-black py-3 px-4'
						placeholder='0996661981'
						required
					/>
				</div>
				<div className='grid grid-cols-4 gap-3 items-center my-3'>
					<label className='italic ml-4'>Зручний час</label>
					<input
						type='time'
						name='time'
						className='col-span-3 border-2 rounded-xl border-black py-3 px-4'
						placeholder='Плевако Максим Віталійович'
					/>
				</div>
				<div className='w-full text-center'>
					<button
						type='submit'
						className='w-1/2 border-2 border-blue-600 rounded-2xl bg-cyan-200 text-cyan-700 py-3'
					>
						Дзвінок
					</button>
				</div>
			</form>
		</section>
	)
}

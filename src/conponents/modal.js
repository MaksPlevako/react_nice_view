import React from 'react'
import { useDispatch } from 'react-redux'
import { close } from '../store/features/setModal'

import bg from '../img/Polygon.png'

export default function Consulting() {
	const dispatch = useDispatch()
	return (
		<div
			onClick={() => dispatch(close())}
			className='absolute w-full h-full left-0 top-0 bg-indigo-400/30'
		>
			<div
				onClick={e => e.stopPropagation()}
				className='w-4/5 h-auto relative mx-auto top-1/4 lg:w-[900px] lg:h-[500px] '
				style={{
					background: `no-repeat center center url(${bg}), #fff`,
					backgroundSize: '900px 500px',
				}}
			>
				<button type='button' onClick={() => dispatch(close())}>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth={1.5}
						stroke='currentColor'
						className='size-10 absolute top-2 right-2'
					>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='m9.75 9.75 4.5 4.5m0-4.5-4.5 4.5M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z'
						/>
					</svg>
				</button>
				<div className='m-8 text-center lg:mt-28'>
					<p className='text-[#2E688D] font-serif italic font-semibold text-5xl mb-2 lg:hidden'>
						ЖК “Nice view”
					</p>
					<p className='text-lg text-[#2E688D] lg:text-xl'>
						Замовте консультацію <b>зараз</b> і ми перетелефонуємо протягом 5
						хвилин.
					</p>
					<form className='m-3 text-xl'>
						<div className='grid sm:max-lg:grid-rows-2 gap-2 mx-auto w-full lg:grid-cols-2 lg:gap-24'>
							<div className='flex flex-col text-left lg:w-[320px]'>
								<label className='mb-2 italic text-[#324052]'>
									Як до Вас звертатися?
								</label>
								<input
									className='w-full bg-[#F2EFEA] border-2 rounded-md px-4 py-2 border-[#CEB181]'
									type='text'
									placeholder='Плевако Максим'
									required
								/>
							</div>
							<div className='flex flex-col text-left lg:w-[320px]'>
								<label className='mb-2 italic text-[#324052]'>
									Введіть Ваш номер телефону:
								</label>
								<input
									className='w-full bg-[#F2EFEA] border-2 rounded-md px-4 py-2 border-[#CEB181]'
									type='num'
									placeholder='0996661981'
									required
								/>
							</div>
						</div>
						<button
							className='w-11/12 my-12 border-2 border-[#2B9EE7] rounded-2xl bg-[#C9E4EA] text-[#2B9EE7] py-4 lg:w-1/2'
							type='submit'
						>
							Дзвінок
						</button>
					</form>
				</div>
			</div>
		</div>
	)
}

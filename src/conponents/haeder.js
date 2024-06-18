import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { open } from '../store/features/setModal'
import { openNav, closeNav } from '../store/features/setNav'
import Consulting from './modal'
import '../style.css'

import logo from '../img/logo.png'

export default function Header() {
	const modal = useSelector(state => state.modal.modal)
	const nav = useSelector(state => state.nav.nav)
	const dispatch = useDispatch()

	return (
		<header className='h-[750px] relative lg:h-[1080px] header'>
			<div className='flex flex-row items-center text-white h-20 bg-[#766A63] justify-between'>
				<img className='' src={logo} alt='logo' />
				<div className='text-md md:w-1/2 md:text-xl lg:w-1/3 lg:text-2xl lg:pl-3'>
					м.Київ, просп. Вознесенський 148
				</div>
				<nav className=''>
					<div>
						<div className='hidden lg:block'>
							<ul className='flex flex-row-reverse text-lg'>
								<li className='px-4 hover:text-black'>
									<button>Головна</button>
								</li>
								<li className='px-4 hover:text-black'>
									<button>Про нас</button>
								</li>
								<li className='px-4 hover:text-black'>
									<button>Контакти</button>
								</li>
							</ul>
						</div>
						<button
							onClick={() => (nav ? dispatch(closeNav()) : dispatch(openNav()))}
							className='block lg:hidden'
						>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='size-10'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
								/>
							</svg>
						</button>
						{nav && (
							<div className='absolute top-20 left-0 w-[768px] bg-white'>
								<div className='text-gray-500'>
									<ul className='flex flex-col text-2xl text-center'>
										<li className='my-5'>
											<button className='border-b-2 border-black uppercase'>
												Головна
											</button>
										</li>
										<li className='my-5'>
											<button className='border-b-2 border-black uppercase'>
												Про нас
											</button>
										</li>
										<li className='my-5'>
											<button className='border-b-2 border-black uppercase'>
												Контакти
											</button>
										</li>
									</ul>
								</div>
							</div>
						)}
					</div>
				</nav>
				<button className='text-2xl mr-4 hover:text-black '>UA</button>
			</div>
			<div className='w-full'>
				<div className='absolute bg-white text-center w-[400px] left-1/2 border rounded-xl py-6 px-8 top-1/2 lg:left-24 lg:w-1/3'>
					<div>
						<p className='text-4xl text-center font-serif text-blue-700 italic font-semibold'>
							ЖК “Nice view”
						</p>
						<p className='italic text-lg text-gray-500 mt-6'>
							При 100% оплаті знижка 5% від банку. <br />
							Пропозиція дійсна до 31.12.22 р.
						</p>
					</div>
					<button
						onClick={() => dispatch(open())}
						className='mt-6 w-full border-2 border-blue-600 rounded-2xl bg-cyan-200 text-cyan-700 py-4'
					>
						Дзвінок
					</button>
				</div>
			</div>
			{modal && <Consulting />}
		</header>
	)
}

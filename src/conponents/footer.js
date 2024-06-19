import React from 'react'
import logo2 from '../img/лого2.png'
import tube from '../img/logos_youtube.png'
import face from '../img/logos_facebook.png'
import inst from '../img/Vector.png'
import tel from '../img/logos_telegram.png'
import telegram from '../img/telegram.png'
import instagram from '../img/insta.png'
import youtube from '../img/youtube.png'
import facebook from '../img/facebook.png'

export default function Footer() {
	return (
		<footer className='grid grid-cols-2 grid-rows-[230px,290px,60px] justify-between bg-[#776D67] text-[#DDE5E8] mt-24 md:grid-rows-[230px,340px,60px] lg:flex lg:flex-row'>
			<div className='m-4'>
				<p className='ml-2 text-xl'>Головна</p>
				<div className='flex flex-col gap-3'>
					<button className='text-left'>Особливості планування</button>
					<button className='text-left'>Переваги</button>
					<button className='text-left'>Галерея</button>
					<button className='text-left'>Вибір квартири</button>
					<button className='text-left'>Інфраструктура</button>
				</div>
			</div>
			<div className='m-4'>
				<p className='ml-2 text-xl'>Покупцям</p>
				<div className='flex flex-col gap-3'>
					<button className='text-left'>Замовити консультацію</button>
					<button className='text-left'>Контакти офісу компанії</button>
				</div>
			</div>
			<div className='m-4'>
				<p className='mb-2'>
					Адреса центрального офісу:
					<br /> м.Київ, вул. Соборності 12
				</p>
				<p className='my-2'>
					Робочі дні:
					<br /> понеділок - п’ятниця з 09:00 до 18:00
				</p>
				<p className='my-2'>
					Вихідні дні:
					<br /> субота - неділя та святкові дні
				</p>
				<p className='my-2'>
					Телефон менеджера:
					<br /> +380981194159
				</p>
			</div>
			<div className='m-4 hidden lg:block'>
				<p>Соціальні мережі:</p>
				<div className='grid grid-cols-4 gap-2 my-2 items-start'>
					<button className='col-span-4'>
						<img className='w-[70%]' src={tube} alt='youtube' />
					</button>
					<button className='col-span-4'>
						<img className=' w-[70%]' src={inst} alt='instagram' />
					</button>
					<button>
						<img src={face} alt='facebook' />
					</button>
					<button>
						<img src={tel} alt='telegram' />
					</button>
				</div>
			</div>
			<div className='m-4'>
				<img className='w-3/4 ' src={logo2} alt='logo2' />
				<p className='font-serif text-[#5597C1] text-5xl text-center'>
					NiceView
				</p>
			</div>
			<div className='mb-4 col-span-2 mx-auto lg:hidden'>
				<div className='flex flex-row'>
					<img className='mx-4 w-8' src={instagram} alt='instagram' />
					<img className='mx-4 w-8' src={facebook} alt='facebook' />
					<img className='mx-4 w-8' src={youtube} alt='youtube' />
					<img className='mx-4 w-8' src={telegram} alt='telegram' />
				</div>
			</div>
		</footer>
	)
}

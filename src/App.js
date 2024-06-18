import Header from './conponents/haeder'
import Features from './conponents/features'
import Beneficts from './conponents/benefit'
import Galery from './conponents/galery'
import Infrastructure from './conponents/infrastructure'
import Street from './conponents/street'
import Form from './conponents/form'
import Footer from './conponents/footer'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'
import 'swiper/css/thumbs'
import 'swiper/css/effect-coverflow'
import 'swiper/css/mousewheel'
import 'swiper/css/autoplay'
import 'swiper/css/effect-fade'
import 'swiper/css/grid'

export default function App() {
	return (
		<div className='font-sans container mx-auto'>
			<Header />
			<Features />
			<Beneficts />
			<Galery />
			<Infrastructure />
			<Street />
			<Form />
			<Footer />
		</div>
	)
}

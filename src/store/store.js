import { configureStore } from '@reduxjs/toolkit'
import setModal from './features/setModal'
import setNav from './features/setNav'

export const store = configureStore({
	reducer: {
		modal: setModal,
		nav: setNav,
	},
})

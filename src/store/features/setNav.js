import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	nav: false,
}

export const setNav = createSlice({
	name: 'nav',
	initialState,
	reducers: {
		openNav: state => {
			state.nav = true
		},
		closeNav: state => {
			state.nav = false
		},
	},
})

export const { openNav, closeNav } = setNav.actions

export default setNav.reducer

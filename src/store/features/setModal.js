import { createSlice } from '@reduxjs/toolkit'

const initialState = {
	modal: false,
}

export const setModal = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		open: state => {
			state.modal = true
		},
		close: state => {
			state.modal = false
		},
	},
})

// Action creators are generated for each case reducer function
export const { open, close } = setModal.actions

export default setModal.reducer

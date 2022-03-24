import { createSlice } from '@reduxjs/toolkit'
import waterService from '../services/waters'

const waterSlice = createSlice({
  name: 'waters',
  initialState: [],
  reducers: {
    setWaters(state, action) {
      return action.payload
    },
    appendWater(state, action) {
      state.push(action.payload)
    },
  },
})

export const { setWaters, appendWater } = waterSlice.actions

export const initializeWaters = () => async (dispatch) => {
  const waters = await waterService.getAll()
  dispatch(setWaters(waters))
}

export const addWater = (water) => async (dispatch) => {
  const newWater = await waterService.createNew(water)
  dispatch(appendWater(newWater))
}

export default waterSlice.reducer

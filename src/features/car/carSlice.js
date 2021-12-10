import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  cars: [ "Disney Clone", "Gym-AI", "Artistible", "Movie-List", "TinyMe Studios" ]
}

const carSlice = createSlice({
  name: 'car',
  initialState,
  reducers: {}

})

export const selectCars = state => state.car.cars

export default carSlice.reducer

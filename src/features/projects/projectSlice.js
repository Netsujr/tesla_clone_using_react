import { createSlice } from "@reduxjs/toolkit"

const initialState = {
  projects: [ "Disney Clone", "Gym-AI", "Artistible", "Movie-List", "TinyMe Studios" ]
}

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {}
})

export const selectProjects = state => state.project.projects

export default projectSlice.reducer

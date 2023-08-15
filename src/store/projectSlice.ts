import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Project, ProjectsState } from '../types/globalType';
import { RootState } from '.';

const initialState: ProjectsState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<Project>) => {
      state.projects.push(action.payload);
    },
    removeProject: (state, action: PayloadAction<number>) => {
      const tempProject = state.projects.filter((project) => project.id !== action.payload);
      return { ...state, tempProject };
    },
  },
});

export const { addProject, removeProject } = projectSlice.actions;

// // Thunk action to fetch projects from an API
// export const fetchProjects = (): AppThunk => async (dispatch) => {
//   try {
//     // Fetch projects from API and update state
//     const projects = await api.fetchProjects(); // Assuming you have an API module with a fetchProjects() function
//     dispatch(addProject(projects));
//   } catch (error) {
//     // Handle error
//   }
// };

export const selectProjects = (state: RootState) => state.project.projects;

export default projectSlice.reducer;

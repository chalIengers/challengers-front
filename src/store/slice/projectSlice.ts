import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ProjectBoxProps, ProjectsState } from '../../types/globalType';
import { RootState } from '..';

const initialState: ProjectsState = {
  projects: [],
};

const projectSlice = createSlice({
  name: 'project',
  initialState,
  reducers: {
    addProject: (state, action: PayloadAction<ProjectBoxProps[]>) => {
      return {
        ...state,
        projects: [...state.projects, ...action.payload],
      };
    },
    resetProject: (state) => {
      return { projects: [] };
    },
    // removeProject: (state, action: PayloadAction<number>) => {
    //   const tempProject = state.projects.filter((project) => project.id !== action.payload);
    //   return { ...state, tempProject };
    // },
  },
});

export const { addProject, resetProject } = projectSlice.actions;

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

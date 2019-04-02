import { thunk, action } from "easy-peasy";
import axios from "axios";

const model = {
  loading: false,
  projects: {
    data: [],

    // actions
    fetched: action((state, payload) => {
      state.data = payload;
    }),

    // thunks
    fetchProjects: thunk(async actions => {
      await axios
        .get("https://api.github.com/users/zachbharris/repos")
        .then(res => {
          const activeProjects = [152986140, 137087074, 149695011, 136203579];
          const filteredProjects = res.data.filter(project => {
            return activeProjects.includes(project.id);
          })
          actions.fetched(filteredProjects)
        })
        .catch(err => console.log(err))
    })
  },
  user: {
    data: {},

    //actions
    fetched: action((state, payload) => {
      state.data = payload;
    }),

    // thunks
    fetchUser: thunk(async actions => {
      await axios
        .get("https://api.github.com/users/zachbharris")
        .then(res => actions.fetched(res.data))
        .catch(err => console.log(err));
    })
  },

  // actions
  isLoading: action((state, payload) => {
    state.loading = payload;
  }),

  // thunks
  initialise: thunk(async (actions, payload, { dispatch }) => {
    await dispatch.isLoading(true);
    await dispatch.user.fetchUser();
    await dispatch.projects.fetchProjects();
    await dispatch.isLoading(false);
  })
}

export default model;

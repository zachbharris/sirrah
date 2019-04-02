import { thunk, action } from "easy-peasy";
import axios from "axios";

const model = {
  loading: false,
  projects: {
    data: [],
    fetched: action((state, payload) => {
      state.data = payload;
    }),
    fetchProjects: thunk(async actions => {
      await axios
        .get("https://api.github.com/users/zachbharris/repos")
        .then(res => actions.fetched(res.data))
        .catch(err => console.log(err))
    })
  },
  user: {
    data: {},
    fetched: action((state, payload) => {
      state.data = payload;
    }),
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

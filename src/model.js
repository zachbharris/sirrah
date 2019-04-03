import { thunk, action } from 'easy-peasy';
import axios from 'axios';

const model = {
  loading: true,
  projects: {
    data: [],

    // actions
    fetched: action((state, payload) => {
      state.data = payload;
    }),

    // thunks
    fetchProjects: thunk(async actions => {
      await axios
        .get('https://api.github.com/users/zachbharris/repos')
        .then(res => {
          const activeProjects = [
            152986140,
            137087074,
            149695011,
            136203579,
            179188463
          ];
          const filteredProjects = res.data.filter(project => {
            return activeProjects.includes(project.id);
          });

          // filter by last update (pushed commit)
          filteredProjects.sort((a, b) => {
            return new Date(b.pushed_at) - new Date(a.pushed_at);
          });

          filteredProjects.push({
            id: 0,
            name: 'view all repositories →',
            html_url: 'https://github.com/zachbharris?tab=repositories',
            description: '',
            language: ''
          });
          actions.fetched(filteredProjects);
        })
        .catch(err => console.log(err));
    })
  },
  user: {
    data: {},

    // actions
    fetched: action((state, payload) => {
      state.data = payload;
    }),

    // thunks
    fetchUser: thunk(async actions => {
      await axios
        .get('https://api.github.com/users/zachbharris')
        .then(res => actions.fetched(res.data))
        .catch(err => console.log(err));
    })
  },
  orgs: {
    data: [],

    // actions
    fetched: action((state, payload) => {
      state.data = payload;
    }),

    // thunks
    fetchOrgs: thunk(async actions => {
      await axios
        .get('https://api.github.com/users/zachbharris/orgs')
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
    await dispatch.orgs.fetchOrgs();
    await dispatch.isLoading(false);
  })
};

export default model;

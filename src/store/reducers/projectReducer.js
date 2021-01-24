const initState = {
  projects: [
    { id: "1", title: "Title number 1", content: "Content of Title number 1" },
    { id: "2", title: "Title number 2", content: "Content of Title number 2" },
    { id: "3", title: "Title number 3", content: "Content of Title number 3" },
  ],
};

const projectReducer = (state = initState, action) => {
  switch (action.type) {
    case 'CREATE_PROJECT':
      console.log('created project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
};

export default projectReducer;

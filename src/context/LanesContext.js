import { CreateTasksReducer } from './LanesReducer'


// Initial state
const initialState = {

  // lanes: [
  // {// name: "Lane#1",
  //    tasks: [ {name:task#1}, ... ],
  //    order: 0 },
  // {...},
  // {...} ]
  lanes: []
}


const LanesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LANES':
      return { ...state }
    case 'ADD_LANE':
      return { ...state, lanes: [...state.lanes, action.payload] }
    default:
      return state
  }
}

export const { LanesContext, LanesProvider } = CreateTasksReducer(LanesReducer, {}, initialState)

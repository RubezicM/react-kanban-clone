import { CreateTasksReducer } from './LanesReducer'


// Initial state
const initialState = {

  // lanes: [
  // {// name: "Lane#1",
  //    tasks: [ {name:task#1}, ... ],
  //    order: 0 },
  // {...},
  // {...} ]
  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite show' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      tasksId: ['task-1', 'task-2', 'task-3', 'task-4']
    }
  },
  columnOrder: ['column-1']
}


const LanesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LANES':
      return { ...state }
    // case 'ADD_LANE':
    //   return { ...state, lanes: [...state.lanes, action.payload] }
    case 'PREFILL':
      return { ...state, ...action.payload }
    case 'REORDER_TASKS':
      const columnId = action.payload.id
      console.log('akcija',action)
      console.log('columnds', state.columns[columnId])


      console.log(state.columns)
      return { ...state, columns: { ...state.columns, [columnId]: {...action.payload} } }
      // return { ...state}
    default:
      return state
  }
}

export const { LanesContext, LanesProvider } = CreateTasksReducer(LanesReducer, {}, initialState)

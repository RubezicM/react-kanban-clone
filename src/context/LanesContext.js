import { CreateTasksReducer } from './LanesReducer'


// Initial state
const initialState = {

  tasks: {
    'task-1': { id: 'task-1', content: 'Take out the garbage' },
    'task-2': { id: 'task-2', content: 'Watch my favorite showshowshowshow' },
    'task-3': { id: 'task-3', content: 'Charge my phone' },
    'task-4': { id: 'task-4', content: 'Cook dinner' },
    'task-5': { id: 'task-5', content: 'Walk a dog' },
    'task-6': { id: 'task-6', content: 'Call my friend' }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'To do',
      tasksId: ['task-1', 'task-2', 'task-3', 'task-4']
    },
    'column-2': {
      id: 'column-2',
      title: 'Review',
      tasksId: ['task-5', 'task-6']
    }
  },
  columnOrder: ['column-1', 'column-2']
}


const LanesReducer = (state, action) => {
  switch (action.type) {
    case 'GET_LANES':
      return { ...state }
    case 'ADD_LANE':
      return { ...state, columns: {...state.columns, ...action.payload} }
    case 'REORDER_TASKS_IN_COLUMN':
      return { ...state, columns: { ...state.columns, [action.payload.id]: { ...action.payload } } }
    case 'MOVE_TASK_TO_COLUMN':
      return { ...state, columns: action.payload }
    case 'UPDATE_COLUMN_TITLE':
      return { ...state, columns: { ...state.columns, [action.payload.id]: { ...action.payload, title:action.payload.title } } }
    default:
      return state
  }
}

export const { LanesContext, LanesProvider } = CreateTasksReducer(LanesReducer, {}, initialState)

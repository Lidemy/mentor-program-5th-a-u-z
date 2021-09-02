import { ADD_USER } from '../actionTypes'
const initialState = {
  users: [],
}
export default function todosReducer(state = initialState, action) {
  console.log(['received', action])
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        users: [
          ...state.users,
          {
            name: action.payload.name,
          },
        ],
      }
    }

    default: {
      return state
    }
  }
}

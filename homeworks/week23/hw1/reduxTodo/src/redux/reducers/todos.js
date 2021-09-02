import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  EDIT_CONFIRM,
} from '../actionTypes.js'
// 用 actionTypes 的目的是為了好 debug
// 這裡是 todos 的 reducer ，就是 todos 要怎麼改動，都要在這邊寫下來
let todoId = 3 // 等等 id 會越來越多，從 3 開始加
const initialState = {
  // 設定初始值
  todos: [
    {
      id: 1,
      content: '這是 Redux 版本的 todo',
      isDone: true,
      isEditing: false,
    },
    {
      id: 2,
      content: '把狀態交給 Redux',
      isDone: false,
      isEditing: false,
    },
  ],
}
export default function todosReducer(state = initialState, action) {
  // 設定 action
  // 參數是用 action.payload.XX 傳進來
  switch (action.type) {
    case ADD_TODO: {
      console.log(state) // 是一個物件 {todos:[{}, {}, {}]}
      return {
        todos: [
          {
            id: todoId++,
            content: action.payload.content,
            isDone: false,
            isEditing: false,
          },
          ...state.todos,
        ],
      }
    }
    case DELETE_TODO: {
      return {
        todos: state.todos.filter(todo => todo.id !== action.payload.id),
      }
    }
    case TOGGLE_TODO: {
      return {
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.id) {
            return todo
          } else {
            return {
              ...todo,
              isDone: !todo.isDone,
            }
          }
        }),
      }
    }
    case EDIT_TODO: {
      return {
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.id) {
            return todo
          } else {
            return {
              ...todo,
              isEditing: !todo.isEditing,
            }
          }
        }),
      }
    }
    case EDIT_CONFIRM: {
      return {
        todos: state.todos.map(todo => {
          if (todo.id !== action.payload.id) {
            return todo
          } else {
            return {
              ...todo,
              content: action.payload.content,
              isEditing: !todo.isEditing,
            }
          }
        }),
      }
    }
    default: {
      return state
    }
  }
}

import {
  ADD_TODO,
  DELETE_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  EDIT_CONFIRM,
} from './actionTypes'
export function addTodo(content) {
  return {
    type: ADD_TODO,
    payload: {
      content,
    },
  }
}
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    payload: { id },
  }
}
export function toggleTodo(id) {
  return {
    type: TOGGLE_TODO,
    payload: { id },
  }
}
export function editTodo(id) {
  return {
    type: EDIT_TODO,
    payload: { id },
  }
}
export function editConfirm(id, content) {
  return {
    type: EDIT_CONFIRM,
    payload: {
      id,
      content,
    },
  }
}

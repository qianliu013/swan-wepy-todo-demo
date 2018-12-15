import wepy from 'wepy'
import * as todo from './todo'

const KEY_ID = '$$todo_id'
const KEY_TODO_LIST = '$$todo_list'

let id = 0
let loadLocalStorage = null

export async function recoverFromStorage() {
  if (loadLocalStorage) return loadLocalStorage
  let [num, listStr] = await Promise.all([
    wepy
      .getStorage({ key: KEY_ID })
      .then(({ data }) => data)
      .catch(() => ''),
    wepy
      .getStorage({ key: KEY_TODO_LIST })
      .then(({ data }) => data)
      .catch(() => '')
  ])
  num = +num
  id = isNaN(num) ? 0 : num
  try {
    return JSON.parse(listStr)
  } catch (_) {
    return []
  }
}

export function writeToStorage(todoList) {
  return Promise.all([
    wepy.setStorage({ key: KEY_ID, data: id }),
    wepy.setStorage({ key: KEY_TODO_LIST, data: JSON.stringify(todoList) })
  ])
}

async function generateId() {
  await recoverFromStorage()
  return ++id
}

export async function newTodo(detail) {
  return todo.factory(await generateId(), detail)
}

export function addNewTodo(todoList, newTodo) {
  todoList.push(newTodo)
}

function todoProxy(func) {
  return function(todoList, id) {
    console.warn(todoList, id, func)
    const i = todoList.findIndex(todo => todo.id === id)
    if (i === -1) return
    const todo = todoList[i]
    func(todo)
    console.warn(todo)
    return todoList.splice(i, 1, todo)
  }
}

export const completeTodo = todoProxy(todo.complete)
export const uncompleteTodo = todoProxy(todo.uncomplete)
export const removeTodo = todoProxy(todo.remove)
export const recoverTodo = todoProxy(todo.recovery)
export const removeCompletelyTodo = todoProxy(todo.removeCompletely)

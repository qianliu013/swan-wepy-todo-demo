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
    const todoList = JSON.parse(listStr)
    todoList.sort((todo1, todo2) => todo2.createTime - todo1.createTime)
    return todoList
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
  todoList.unshift(newTodo)
}

function todoProxy(func) {
  return function(todoList, id) {
    const i = todoList.findIndex(todo => todo.id === id)
    if (i === -1) return
    const todo = todoList[i]
    func(todo)
    return todoList.splice(i, 1, todo)
  }
}

export const complete = todoProxy(todo.complete)
export const uncomplete = todoProxy(todo.uncomplete)
export const remove = todoProxy(todo.remove)
export const recover = todoProxy(todo.recover)
export const removeCompletely = todoProxy(todo.removeCompletely)

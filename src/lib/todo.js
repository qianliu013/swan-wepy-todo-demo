export function factory(id, detail) {
  return {
    id: id,
    detail: detail,
    createTime: Date.now(),
    completeTime: null,

    complete: false,
    removed: false,
    removedCompletely: false
  }
}

export function complete(todo) {
  todo.complete = true
  todo.completeTime = Date.now()
}

export function uncomplete(todo) {
  todo.complete = false
  todo.completeTime = null
}

export function remove(todo) {
  todo.removed = true
}

export function recover(todo) {
  todo.removed = false
}

export function removeCompletely(todo) {
  todo.removedCompletely = true
}

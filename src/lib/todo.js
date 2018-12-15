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

export function serialize(todo) {
  return JSON.stringify(todo)
}

export function deserialize(todoStr) {
  return JSON.parse(todoStr)
}

export function complete(todo) {
  todo.complete = true
  todo.completeTime = Date.now()
}

export function uncomplete(todo) {
  todo.complete = false
  todo.completeTime = null
}

export function isComplete(todo) {
  return !todo.isRemoved && !todo.isRemovedCompletely && todo.complete
}

export function remove(todo) {
  todo.removed = true
}

export function recovery(todo) {
  todo.removed = false
}

export function isRemoved(todo) {
  return !todo.isRemovedCompletely && todo.removed
}

export function removeCompletely(todo) {
  todo.removedCompletely = true
}

export function isRemovedCompletely(todo) {
  return todo.removedCompletely
}

/**
 * 待办事项
 *
 * 注意完成、未完成、删除、彻底删除均是更改 todo 中的 bool 值，这些状态可叠加
 * */
export interface Todo {
  /** 唯一 id */
  id: number
  /** Todo 的具体内容 */
  detail: string
  /** Todo 的创建时间 */
  createTime: number
  /** Todo 的完成时间 */
  completeTime: number | null
  /** Todo 是否完成 */
  complete: boolean
  /** Todo 是否被移到回收站 */
  removed: boolean
  /** Todo 是否被彻底删除 */
  removedCompletely: boolean
}

/**
 * 获得一个新的 Todo 项
 *
 * @param id - todo 的唯一 id.
 * @param detail - todo 的内容.
 * @returns 新的 todo.
 */
export function factory(id: number, detail: string): Todo

/**
 * 标记 Todo 已完成
 *
 * @param todo - 待处理的 Todo
 */
export function complete(todo: Todo): void

/**
 * 标记 Todo 未完成
 *
 * @param todo - 待处理的 Todo
 */
export function uncomplete(todo: Todo): void

/**
 * 标记 Todo 在回收站中
 *
 * @param todo - 待处理的 Todo
 */
export function remove(todo): void

/**
 * 从回收站中恢复 Todo
 *
 * @param todo - 待处理的 Todo
 */
export function recover(todo): void

/**
 * 彻底删除 Todo
 *
 * @param todo - 待处理的 Todo
 */
export function removeCompletely(todo): void

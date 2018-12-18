import { Todo } from './todo'

/**
 * 获取本地存储中的 todoList；会缓存结果，不会重复读取
 *
 * @returns  resolve 结果为本地读取的 todoList 的 Promise
 */
export function recoverFromStorage(): Promise<Todo[]>

/**
 * 将 todoList 写入本地存储
 *
 * @param todoList - 被写入的 TodoList
 * @returns resolve 结果为调用 swan.setStorage 返回值的 Promise
 */
export function writeToStorage(todoList: Todo[]): Promise<Array[Object]>

/**
 * 返回一个新的 Todo；由于 id 是异步获取的，因此此函数是异步的
 *
 * @param detail - 新 todo 的内容
 * @returns resolve 结果为新 Todo 的 Promise
 */
export function newTodo(detail: string): Promise<Todo>

/**
 * 将新的 todo 放入 todoList 最前面
 *
 * @param todoList - 目前的 todoList
 * @param todo - 新的 todo
 */
export function addNewTodo(todoList: Todo[], todo: Todo): void

/**
 * 根据 todo Id, 以可以触发视图更新的方式标记 todoList 中某个 todo 为完成
 *
 * @param todoList - 目前的 todoList
 * @param todoId - 待处理 todo 的 id
 */
export function complete(todoList: Todo[], id: number): void

/**
 * 根据 todo Id, 以可以触发视图更新的方式标记 todoList 中某个 todo 为未完成
 *
 * @param todoList - 目前的 todoList
 * @param todoId - 待处理 todo 的 id
 */
export function uncomplete(todoList: Todo[], id: number): void

/**
 * 根据 todo Id, 以可以触发视图更新的方式将 todoList 特定 todo 为放到回收站
 *
 * @param todoList - 目前的 todoList
 * @param todoId - 待处理 todo 的 id
 */
export function remove(todoList: Todo[], id: number): void

/**
 * 根据 todo Id, 以可以触发视图更新的方式将 todoList 特定 todo 从回收站恢复
 *
 * @param todoList - 目前的 todoList
 * @param todoId - 待处理 todo 的 id
 */
export function recover(todoList: Todo[], id: number): void

/**
 * 根据 todo Id, 以可以触发视图更新的方式标记 todoList 中某个 todo 为彻底删除
 *
 * 注意并不会从 todoList 剔除 todo
 *
 * @param todoList - 目前的 todoList
 * @param todoId - 待处理 todo 的 id
 */
export function removeCompletely(todoList: Todo[], id: number): void

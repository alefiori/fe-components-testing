export type ToDo = {
  id: number
  todo: string
  completed: boolean
  userId: number
}

export type ToDoList = ReadonlyArray<ToDo>

export type ToDoResponse = {
  todos: ToDoList
  total: number
  skip: number
  limit: number
}

export type AddToDoRequest = Omit<ToDo, 'id'>

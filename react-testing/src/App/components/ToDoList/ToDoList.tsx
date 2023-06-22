import { FC, useEffect, useState } from 'react'
import { ToDoList as ToDoListType } from 'common/dist/types'
import { ToDo } from '..'

type ToDoListProps = {
  toDoList: ToDoListType
  searchQuery: string
}

export const ToDoList: FC<ToDoListProps> = ({ searchQuery, toDoList }) => {
  const [filteredToDoList, setFilteredToDoList] =
    useState<ToDoListType>(toDoList)

  useEffect(() => {
    if (searchQuery) {
      const filteredList = toDoList.filter(({ todo }) =>
        todo.toLowerCase().includes(searchQuery.toLowerCase())
      )
      setFilteredToDoList(filteredList)
    } else {
      setFilteredToDoList(toDoList)
    }
  }, [searchQuery, toDoList])

  return (
    <section className="todo-list">
      <h2>List of ToDos</h2>
      <ul className="todo-list__items">
        {filteredToDoList.map((toDo, index) => (
          <li key={index}>
            <ToDo {...toDo} />
          </li>
        ))}
      </ul>
    </section>
  )
}

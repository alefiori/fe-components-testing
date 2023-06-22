import { FC, useEffect, useState } from 'react'
import { Header, SearchBar, ToDoList } from './components'
import { ToDoList as ToDoListType } from 'common/dist/types'
import { apiService } from './utils'

export const App: FC = () => {
  const [toDoList, setToDoList] = useState<ToDoListType>([])
  const [searchValue, setSearchValue] = useState<string>('')

  useEffect(() => {
    getToDoList()
  }, [])

  const getToDoList = async () => {
    const { todos } = await apiService.getToDos()
    setToDoList(todos)
  }

  return (
    <>
      <Header />
      <main className="content">
        <SearchBar
          searchValue={searchValue}
          onSearchValueChange={(value) => setSearchValue(value)}
        />
        <ToDoList searchQuery={searchValue} toDoList={toDoList} />
      </main>
    </>
  )
}

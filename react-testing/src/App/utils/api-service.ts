import { ToDoResponse } from 'common/dist/types'

const TODOS_API_URL = 'https://dummyjson.com/todos'

export const apiService = {
  getToDos: async (): Promise<ToDoResponse> => executeGet(TODOS_API_URL),
}

const executeGet = async <Response>(url: string): Promise<Response> => {
  const response = await fetch(url)
  if (response.ok) {
    return response.json() as Promise<Response>
  }
  return Promise.reject(new Error('No data available'))
}

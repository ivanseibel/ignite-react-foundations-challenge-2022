import { useEffect, useState } from "react"

export interface ToDo {
  id: string
  description: string
  isComplete: boolean
}

export function useToDo() {
  const [toDos, setToDos] = useState<ToDo[]>([
    {
      id: '1',
      description: 'Ut dolor sunt proident amet sit enim et irure.',
      isComplete: false
    },
    {
      id: '2',
      description: 'Mollit laborum cillum pariatur et adipisicing aliquip officia pariatur esse Lorem eiusmod exercitation mollit.',
      isComplete: false
    },
    {
      id: '3',
      description: 'Exercitation commodo cillum nulla consequat laboris esse amet ad mollit elit cillum non.',
      isComplete: false
    }
  ])

  const addToDo = (newToDo: ToDo) => {
    console.log(newToDo)
    setToDos([...toDos, newToDo])
  }

  const toggleToDo = (id: string) => {
    console.log(id)

    const newToDos = toDos.map((toDo) => {
      if (toDo.id === id) {
        return {
          ...toDo,
          isComplete: !toDo.isComplete
        }
      }
      return toDo
    })

    console.log(newToDos)

    setToDos(newToDos)
  }

  function deleteCompleted(id: string) {
    const newToDos = toDos.filter((toDo) => {
      if (toDo.id === id) {
        if (toDo.isComplete) {
          return false
        }
        return true
      }
      return true
    })

    setToDos(newToDos)
  }

  return { toDos, addToDo, toggleToDo, deleteCompleted }
}
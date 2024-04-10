import { useToDo } from '../context/ToDoContext'
import { useComplete } from '../context/CompleteContext'
import '../styling/ToDoList.css'
import clear from '../assets/noToDo.svg'

const ToDoList = () => {
  const { ToDo, removeToDo, completeAllToDo } = useToDo()
  const { complete, addComplete, addAllComplete } = useComplete()

  return (
    <ul className="section todo-list">
      <div className="top-todo">
        <h1>To do:</h1>{' '}
        <button
          type="button"
          className="button"
          onClick={() => {
            completeAllToDo()
            addAllComplete(ToDo)
          }}
          disabled={ToDo.length === 0 ? true : false}
        >
          Complete all
        </button>
      </div>
      {ToDo.length === 0 ? (
        <img src={clear} alt="No todo" />
      ) : (
        ToDo.map((todo) => (
          //replace the value of the key and some attr with todo.timestamp later
          <li key={todo.task}>
            <input
              type="checkbox"
              id={todo.task}
              // value={todo.task}
              checked={complete.includes(todo)}
              onChange={() => {
                addComplete(todo)
                removeToDo(todo)
              }}
            />
            <label htmlFor={todo.task}>{todo.task}</label>
            <span>{todo.createdAt.calendar()}</span>
            <button
              type="button"
              value={todo.task}
              className="button delete"
              onClick={() => removeToDo(todo)}
            >
              delete
            </button>
          </li>
        ))
      )}
      <p>Count:{ToDo.length}/5</p>
    </ul>
  )
}

export default ToDoList

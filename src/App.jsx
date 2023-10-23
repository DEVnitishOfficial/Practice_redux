import { useDispatch } from 'react-redux'
import './App.css'
import AddTodo from './components/addTodo/addTodo'
import TodoList from './components/TodoList/TodoList'
import { bindActionCreators } from '@reduxjs/toolkit'
import { addTodo,editTodo,deleteTodo } from './slices/todoSlice'

function App() {

  const dispatch = useDispatch()
  const actions = bindActionCreators({addTodo,editTodo,deleteTodo},dispatch);
  return (
    <>
    <AddTodo AddTodoFunProp = {actions.addTodo} />
    <TodoList EditTodoFunProp = {actions.editTodo} DeleteTodoFunProp = {actions.deleteTodo} />
    </>
  )
}

export default App

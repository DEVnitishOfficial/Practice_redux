import { useSelector } from "react-redux";
import Todo from "../Todo/Todo";

function TodoList({DeleteTodoFunProp,EditTodoFunProp}) {
  const completeTodoList = useSelector((state) => state.todo);
  console.log("completeTodoList", completeTodoList);
  
  function deleteTodo(todo){
    DeleteTodoFunProp({todo})
  }

  function editTodo(todo,todoText){
    EditTodoFunProp({todo,todoText})
  }

  return (
    <div>
      {completeTodoList.length > 0 &&
        completeTodoList.map((individualTodo) => (  
          <Todo
          key={individualTodo.id}
          indvTodo={individualTodo.todoData}
          delTodo = {() => deleteTodo(individualTodo)}
          EditTodo = {(editedTodoText) => editTodo(individualTodo, editedTodoText)}
          />
        ))}
    </div>
  );
}

export default TodoList;

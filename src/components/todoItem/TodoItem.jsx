import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo,editTodo } from '../../slices/todoSlice';

function TodoItem() {
  const todoList = useSelector((state) => state.todo);
  const dispatch = useDispatch();
  console.log('todoList', todoList);

  return (
    <ul>
      {todoList.map((individualTodo) => (
        <li key={individualTodo.id}>
          <div>{individualTodo.todoData}</div>
          <button
            className='text-white'
            onClick={() => dispatch(deleteTodo({todo : individualTodo}))}

          >
            DELETE
          </button>
          <button onClick={() => dispatch(editTodo({todo : individualTodo, todoData : individualTodo.todoData }))}>
            UPDATE
          </button>
        </li>
      ))}
    </ul>
  );
}

export default TodoItem;



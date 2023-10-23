
import { useState } from 'react'
// import { useDispatch } from 'react-redux';
// import { addTodo } from '../../slices/todoSlice';

function AddTodo({AddTodoFunProp}) {

const [inputText , setInputText] = useState('');
// const dispatch = useDispatch()


  const todoHandler = (e) => {
    e.preventDefault();
    if(inputText !== ''){
      AddTodoFunProp({todoText : inputText})
      // dispatch(addTodo({todoText : inputText}))
      setInputText('')
    }

}


  return (
    <div className="flex justify-center items-center " >  
    <form onSubmit={todoHandler} className="space-x-3 mt-12 justify-center items-center">
        <input className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
         type="text"
         value={inputText}
         onChange={(e) => setInputText(e.target.value)}
         placeholder='add your todo' />
        <button type='submit' className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"> 
            Add
         </button>
    </form>
    </div>
  )
}

export default AddTodo;
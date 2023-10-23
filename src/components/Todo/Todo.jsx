import { Input } from "postcss";
import React, { useState } from "react";

function Todo({ indvTodo,delTodo,EditTodo }) {
  const [isModifying, setIsModifying] = useState(false);
  const [editText, setEditText] = useState(indvTodo);

  return (
    <div className="flex justify-center items-center text-clip">
      {isModifying ? (
        <input className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 m-4 leading-8 transition-colors duration-200 ease-in-out"
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
        />
      ) : (
        <span>{indvTodo} </span>
      )}
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 m-2 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={() => {
        setIsModifying(!isModifying)
        if(isModifying){
            EditTodo(editText)
        }
      }}>
        {(!isModifying) ? "Edit" : "Save" }
      </button>
      <button className="text-white bg-indigo-500 border-0 py-2 px-6 m-2 focus:outline-none hover:bg-indigo-600 rounded text-lg" onClick={delTodo}>
        Delete
      </button>
    </div>
  );
}

export default Todo;

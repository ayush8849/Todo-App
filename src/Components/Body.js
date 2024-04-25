import React, { useState } from "react";

const Body = () => {
    const [todo, setTodo] = useState(''); // for writing todo in input tag
    const [addTodo , setAddTodo] = useState([]); // for adding todo tasks in list.

    const handleInputChange = (event) => {
        setTodo(event.target.value);
    };

    const TodoAdd = () => {
        // Avoid adding empty todo
        if (todo.trim() !== '') {
            setAddTodo([...addTodo, todo]);
            setTodo(''); // Clear input field after adding todo
        }
    };

    const RemoveTodo = (index) => {
        const newTodos = addTodo.filter((_, i) => i !== index);
        setAddTodo(newTodos);
    };

    const RemoveAllTodo = () => {
        setAddTodo([]);
    };

    const EditTodo = (index) => {
        const updatedTodo = prompt("Enter the updated todo item:");
        if (updatedTodo !== null && updatedTodo.trim() !== '') {
            const newTodos = [...addTodo];
            newTodos[index] = updatedTodo;
            setAddTodo(newTodos);
        } else {
            alert("Please enter a valid todo item.");
        }
    };

    return (
        <div className="max-w-md mx-auto p-6 rounded-md shadow-md" style={{ background: 'linear-gradient(to right, #F3F4F6, #E5E7EB)' }}>
            <h1 className="text-2xl font-semibold mb-4">Todo List</h1>
            <div className="flex">
                <input
                    className="flex-grow mr-2 py-2 px-4 border border-gray-300 rounded-md focus:outline-none"
                    placeholder="Add ToDo" 
                    value={todo} 
                    onChange={handleInputChange}
                />
                <button 
                    className="py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
                    onClick={TodoAdd}
                >
                    ADD
                </button>
            </div>
            <ul className="mt-4">
                {addTodo.map((todo, index) => (
                    <li key={index} className="flex justify-between items-center py-2 border-b border-gray-300">
                        <span>{todo}</span>
                        <div>
                            <button 
                                className="mr-2 text-sm text-gray-500 hover:text-blue-500 focus:outline-none"
                                onClick={() => EditTodo(index)}
                            >
                                Edit
                            </button>
                            <button 
                                className="text-sm text-red-500 hover:text-red-700 focus:outline-none"
                                onClick={() => RemoveTodo(index)}
                            >
                                Delete
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
            <button 
                className="mt-4 py-2 px-4 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                onClick={RemoveAllTodo}
            >
                Delete All
            </button>
        </div>
    );
};

export default Body;


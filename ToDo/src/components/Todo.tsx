import React, { useEffect, useRef, useState } from "react";
import todo_icon from "../assets/todo_icon.png";
import TodoItems from "./TodoItems";

type TodoItem = {
  id: number;
  text: string;
  isComplete: boolean;
};

const Todo = () => {
  const [todolist, setTodolist] = useState<TodoItem[]>(
    localStorage.getItem("todos")
      ? JSON.parse(localStorage.getItem("todos")!)
      : []
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const add = () => {
    const inputText = inputRef.current?.value.trim() || "";
    if (inputText === "") {
      return null;
    }
    const newTodo: TodoItem = {
      id: Date.now(),
      text: inputText,
      isComplete: false,
    };
    setTodolist((prev) => [...prev, newTodo]);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const deleteTodo = (id: number) => {
    setTodolist((prevTodos) => {
      return prevTodos.filter((todo) => {
        return todo.id !== id;
      });
    });
  };

  const toggle = (id: number) => {
    setTodolist((prevTodos) => {
      return prevTodos.map((todo) => {
        if (todo.id === id) {
          return { ...todo, isComplete: !todo.isComplete };
        }
        return todo;
      });
    });
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todolist));
  }, [todolist]);

  return (
    <div className="bg-gradient-to-b from-indigo-500 via-violet-600 to-purple-900 place-self-center w-11/12 max-w-md flex flex-col p-7 min-h-[550px] rounded-xl">
      {/*------- title section -------*/}

      <div className="flex items-center mt-7 gap-2">
        <img className="w-8" src={todo_icon} alt="todo-icon" />
        <h1 className="text-3xl font-semibold ">To-Do List</h1>
      </div>

      {/*------- title section -------*/}

      <div className="flex items-center my-7 bg-gray-200 rounded-full ">
        <input
          ref={inputRef}
          className="bg-transparent border-0 outline-none flex-1 h-14 pl-6 pr-2 placeholder:text-slate-600"
          type="text"
          placeholder="Add your tasks..."
        />
        <button
          onClick={add}
          className="border-none rounded-full bg-orange-600 w-32 h-14 text-white text-lg font-medium cursor-pointer"
        >
          ADD +
        </button>
      </div>

      {/*------- TO-DO list -------*/}
      <div>
        {todolist.map((item, index) => {
          return (
            <TodoItems
              key={index}
              text={item.text}
              id={item.id}
              isComplete={item.isComplete}
              deleteTodo={deleteTodo}
              toggle={toggle}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Todo;

import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([
        { task: "Sample Task", id: uuidv4(), done: false },
    ]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo === "") return;
        setTodos([...todos, { task: newTodo, id: uuidv4(), done: false }]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    let upperCaseAll = () => {
        setTodos((prevTasks) =>
            prevTasks.map((todo) => ({
                ...todo,
                task: todo.task.toUpperCase(),
            }))
        );
    };

    let uppercaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id
                    ? { ...todo, task: todo.task.toUpperCase() }
                    : todo
            )
        );
    };

    let toggleDone = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo
            )
        );
    };

    return (
        <>
            <div>
                <h3>Todo List</h3>
                <hr />
                <br />
                <input
                    placeholder="Add a task"
                    value={newTodo}
                    onChange={updateTodoValue}
                />
                &nbsp;&nbsp;&nbsp;
                <button onClick={addNewTask}>Add Task</button>
                <br />
                <br />

                <ul>
                    {todos.map((todo) => (
                        <li key={todo.id}>
                            <span style={{ textDecoration: todo.done ? "line-through" : "none" }}>
                                {todo.task}
                            </span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            &nbsp;
                            <button onClick={() => uppercaseOne(todo.id)}>Uppercase</button>
                            &nbsp;
                            <button onClick={() => toggleDone(todo.id)}>
                                {todo.done ? "Undo" : "Done"}
                            </button>
                        </li>
                    ))}
                </ul>

                <br />
                <button onClick={upperCaseAll}>UpperCase All</button>
            </div>
        </>
    );
}
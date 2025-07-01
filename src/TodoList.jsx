import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function TodoList() {
    let [todos, setTodos] = useState([{ task: "Sample Task", id: uuidv4() }]);
    let [newTodo, setNewTodo] = useState("");

    let addNewTask = () => {
        if (newTodo === "") return; // Only block completely empty input
        setTodos([...todos, { task: newTodo, id: uuidv4() }]);
        setNewTodo("");
    };

    let updateTodoValue = (event) => {
        setNewTodo(event.target.value);
    };

    let deleteTodo = (id) => {
        let copy = todos.filter((todo) => todo.id !== id);
        setTodos(copy);
    };

    let upperCaseAll = () => {
        setTodos((prevTasks) =>
            prevTasks.map((todo) => {
                return {
                    ...todo,
                    task: todo.task.toUpperCase(),
                };
            })
        );
    };

    let uppercaseOne = (id) => {
        setTodos((prevTodos) =>
            prevTodos.map((todo) => {
                if (todo.id === id) {
                    return { ...todo, task: todo.task.toUpperCase() };
                }
                return todo;
            })
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
                            <span>{todo.task}</span>
                            &nbsp;&nbsp;&nbsp;
                            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
                            &nbsp;
                            <button onClick={() => uppercaseOne(todo.id)}>Uppercase</button>
                        </li>
                    ))}
                </ul>

                <br />
                <button onClick={upperCaseAll}>UpperCase All</button>
            </div>
        </>
    );
}
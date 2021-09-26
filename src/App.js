import React from "react";
import TodoList from "./Todo/TodoList";
import Context from "./context";
import AddTodo from "./Todo/AddTodo";
import { func } from "prop-types";
function App() {
	const [todos, setTodos] = React.useState([
		{ id: 1, complited: false, title: "Купить хлеб" },
		{ id: 2, complited: true, title: "Помыть посуду" },
		{ id: 3, complited: false, title: "Заказать ноут" },
		{ id: 4, complited: false, title: "Привет" },
	]);
	function toggleTodo(id) {
		setTodos(
			todos.map((todo) => {
				if (todo.id === id) {
					todo.complited = !todo.complited;
				}
				return todo;
			})
		);
	}
	function removeTodo(id) {
		setTodos(todos.filter((todo) => todo.id !== id));
	}
	function addTodo(title) {
		setTodos(
			todos.concat([
				{
					title,
					id: Date.now(),
					complited: false,
				},
			])
		);
	}
	return (
		<Context.Provider value={{ removeTodo }}>
			<div className="wrapper">
				<h1>ToDo list:</h1>
				<AddTodo onCreate={addTodo} />
				{todos.length ? (
					<TodoList todos={todos} onToggle={toggleTodo} />
				) : (
					<p>No todos.</p>
				)}
			</div>
		</Context.Provider>
	);
}

export default App;

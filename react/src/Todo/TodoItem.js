import React, { useContext } from "react";
import PropTypes from "prop-types";
import Context from "../context";

const styles = {
	input: {
		marginRight: "1rem",
	},
};

function TodoItem({ todo, index, onChange }) {
	const { removeTodo } = useContext(Context);

	const classes = [];
	if (todo.completed) {
		classes.push("done");
	}
	return (
		<li className="form">
			<span className={classes.join(" ")}>
				<input
					type="checkbox"
					checked={todo.completed}
					style={styles.input}
					onChange={() => onChange(todo.id)}
				/>
				<strong>{index + 1}</strong>
				&nbsp;
				{todo.title}
			</span>

			<button className="rm" onClick={() => removeTodo(todo.id)}>
				&times;
			</button>
		</li>
	);
}

TodoItem.propType = {
	todo: PropTypes.object.isRequired,
	index: PropTypes.number,
	onChange: PropTypes.func.isRequired,
};

export default TodoItem;

import React, { useState } from "react";
import PropTypes from "prop-types";

const styles = {
	form: {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		padding: ".5rem 1rem",
		border: "1px solid #000",
		borderRadius: "4px",
		marginBottom: ".5rem",
		ShadowRoot: "0px 0px 23px 9px #000000",
	},
	input: {
		marginRight: "1rem",
		border: "1px solid #000",
		marginLeft: "2.8rem",
		background: "rgb(36, 33, 36)",
		color: "rgb(191, 225, 232)",
	},
	add: {
		background: "rgb(214,151,3)",
		borderRadius: "4px",
		color: "#000",
		border: "none",
	},
};

function useInputValue(defaultValue = "") {
	const [value, setValue] = useState(defaultValue);
	return {
		bind: {
			value,
			onChange: (event) => setValue(event.target.value),
		},
		clear: () => setValue(""),
		value: () => value,
	};
}

function AddTodo({ onCreate }) {
	const input = useInputValue();
	function submitHandler(event) {
		event.preventDefault();
		if (input.value().trim()) {
			onCreate(input.value());
			input.clear();
		}
	}

	return (
		<form style={styles.form} onSubmit={submitHandler}>
			<input
				{...input.bind}
				placeholder="Type new todo..."
				style={styles.input}
			/>
			<button type="submit" style={styles.add}>
				+
			</button>
		</form>
	);
}

AddTodo.propTypes = {
	onCreate: PropTypes.func.isRequired,
};
export default AddTodo;

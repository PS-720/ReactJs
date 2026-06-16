import { useState } from "react";

function Counter() {
	let [counter, setCounter] = useState(10);

	const addValue = () => {
		if (counter <= 19) setCounter(counter + 1);
	};

	const removeValue = () => {
		if (counter >= 1) setCounter(counter - 1);
	};

	return (
		<div>
			<h1>Chai aur React</h1>
			<h2>Counter Value: {counter} </h2>

			<button onClick={addValue}>Add Value</button>
			<br />
			<button onClick={removeValue}>Remove Value</button>
		</div>
	);
}

export default Counter;

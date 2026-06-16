function Button({ color, bgColor, textColor = "text-white", onClick }) {

	return (
		<button
			onClick={onClick}
			className={`outline-none px-4 py-1 rounded-full shadow-lg font-semibold ${bgColor} ${textColor} `}>
			{color}
		</button>
	);
}

export default Button;
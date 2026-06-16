import { useState, useCallback, useEffect, useRef } from "react";

const PassGen = () => {
	const [length, setLength] = useState(8);
	const [numAllowed, setNumAllowed] = useState(false);
	const [charAllowed, setCharAllowed] = useState(false);
	const [password, setPassword] = useState("");

	const passwordRef = useRef(null);

	const passwordGenerator = useCallback(() => {
		let pass = "";
		let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
		if (numAllowed) str += "0123456789";
		if (charAllowed) str += "!@#$%^&*()[]{}_+~`";

		for (let i = 1; i <= length; i++) {
			let index = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(index);
		}

		setPassword(pass);
	}, [length, numAllowed, charAllowed, setPassword]);

	const copyPassToClipboard = useCallback(() => {
		passwordRef.current?.select();
		passwordRef.current?.setSelectionRange(0, 20);
		window.navigator.clipboard.writeText(password)
	}, [password])

	useEffect(() => {
		passwordGenerator()
	}, [numAllowed, passwordGenerator, length, charAllowed])

	return (
		<>
			<div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-6 my-8 text-orange-500 bg-gray-800">
				<h1 className="text-2xl text-white text-center">Password Generator</h1>
				<div className="flex shadow rounded-lg overflow-hidden py-5">
					<input
						type="text"
						value={password}
						className="rounded-md outline-none w-full py-1 px-3 bg-white text-black font-semibold"
						readOnly
						placeholder="Password"
						ref={passwordRef}
					/>
					<button
						className="mx-2 outline-none text-white shrink-0 py-0.5 bg-blue-700 px-3 font-semibold rounded-md cursor-pointer"
						onClick={copyPassToClipboard}
					>
						Copy
					</button>
				</div>

				<div className="flex text-sm gap-x-5">
					<div className="flex gap-x-1 items-center">
						<input
							type="range"
							min={6}
							max={50}
							value={length}
							className="cursor-pointer"
							onChange={(e) => {
								setLength(e.target.value);
							}}
						/>
						<label className="text-[15px]"> Lenght: {length}</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={numAllowed}
							id="numberInput"
							onChange={() => {
								setNumAllowed((prev) => !prev);
							}}
						/>
						<label className="text-[15px]" htmlFor="numberInput">
							Numbers
						</label>
					</div>
					<div className="flex items-center gap-x-1">
						<input
							type="checkbox"
							defaultChecked={charAllowed}
							id="characterInput"
							onChange={() => {
								setCharAllowed((prev) => !prev);
							}}
						/>
						<label className="text-[15px]" htmlFor="characterInput">
							Characters
						</label>
					</div>
				</div>
			</div>
		</>
	);
};

export default PassGen;

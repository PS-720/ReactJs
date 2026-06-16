import { useState } from "react";
import Button from "./Button";

function Bg() {
    const [colour, setColour] = useState("bg-olive-500");

	return (
		<div className={`w-full h-screen ${colour}`}>
			<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
				<div className="flex flex-wrap shadow-lg justify-center gap-3 bg-white px-3 py-2 rounded-full">
					<Button
						color="Red"
						bgColor="bg-red-500"
						onClick={() => setColour("bg-red-500")}
					/>
					<Button
						color="Green"
						bgColor="bg-green-500"
						textColor="text-black"
						onClick={() => setColour("bg-green-500")}
					/>
					<Button
						color="Blue"
						bgColor="bg-blue-600"
						onClick={() => setColour("bg-blue-600")}
					/>
					<Button
						color="Olive"
						bgColor="bg-olive-500"
						onClick={() => setColour("bg-olive-500")}
					/>
					<Button
						color="Gray"
						bgColor="bg-gray-400"
						textColor="text-black"
						onClick={() => setColour("bg-gray-400")}
					/>
					<Button
						color="Yellow"
						bgColor="bg-yellow-300"
						textColor="text-black"
						onClick={() => setColour("bg-yellow-300")}
					/>
					<Button
						color="Pink"
						bgColor="bg-pink-500"
						onClick={() => setColour("bg-pink-500")}
					/>
					<Button
						color="Purple"
						bgColor="bg-purple-400"
						textColor="text-black"
						onClick={() => setColour("bg-purple-400")}
					/>
					<Button
						color="Lavender"
						bgColor="bg-violet-300"
						textColor="text-black"
						onClick={() => setColour("bg-violet-300")}
					/>
					<Button
						color="White"
						bgColor="bg-white"
						textColor="text-black"
						onClick={() => setColour("bg-white")}
					/>
					<Button
						color="Black"
						bgColor="bg-black"
						onClick={() => setColour("bg-black")}
					/>
				</div>
			</div>
		</div>
	);
}

export default Bg;

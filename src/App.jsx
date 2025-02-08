import { useState } from "react";

function App() {
  // Step 3: Use state to store the current background color
  const [bgColor, setBgColor] = useState("white");

  // List of colors
  const colors = [
    { name: "Red", code: "bg-red-500" },
    { name: "Green", code: "bg-green-500" },
    { name: "Blue", code: "bg-blue-500" },
    { name: "Yellow", code: "bg-yellow-500" },
    { name: "Gray", code: "bg-gray-500" },
    { name: "Purple", code: "bg-purple-500" },
    { name: "Pink", code: "bg-pink-500" },
    { name: "Black", code: "bg-black text-white" }, // Black with white text
  ];

  return (
    <div className={`${bgColor} h-screen flex flex-col items-center justify-center`}>
      {/* Header */}
      <h1 className="text-3xl font-bold mb-6">Color Changer</h1>
      
      {/* Buttons */}
      <div className="flex space-x-4">
        {colors.map((color) => (
          <button
            key={color.name}
            className={`px-4 py-2 rounded-lg ${color.code} shadow-md hover:scale-105 transition`}
            onClick={() => setBgColor(color.code)} // Change the color on click
          >
            {color.name}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;

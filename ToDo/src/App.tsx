import { useState } from "react";
import "./index.css";

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  return (
    <div className="bg-slate-500 text-white h-screen">
      <h1 className="text-3xl font-bold ">Value of X is: {x}</h1>
      <button
        onClick={() => {
          setX(x + 1);
        }}
        className="bg-white text-black hover:bg-orange-300 font-bold py-2 px-4 rounded-full"
      >
        Increment x
      </button>

      <button
        onClick={() => {
          setX(x - 1);
        }}
        className="bg-white text-black hover:bg-orange-300 font-bold py-2 px-4 rounded-full"
      >
        Decrement x
      </button>

      <h1 className="text-3xl font-bold ">Value of Y is: {y}</h1>
      <button
        onClick={() => {
          setY(y + 1);
        }}
        className="bg-white text-black hover:bg-orange-300 font-bold py-2 px-4 rounded-full"
      >
        Increment y
      </button>

      <button
        onClick={() => {
          setY(y - 1);
        }}
        className="bg-white text-black hover:bg-orange-300 font-bold py-2 px-4 rounded-full"
      >
        Decrement y
      </button>
    </div>
  );
}

export default App;

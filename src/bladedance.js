import logo from "./logo.svg";
import "./App.css";
import ReactPlayer from "react-player";
import { useEffect } from "react";

function Bladedance() {
  return (
    <>
      <div class="flex-1">
        <p className="text-6xl text-center  text-green-500 font-sans font-bold hover:text-purple-500">
          BLADE DANCE 101
        </p>
      </div>

      <div class="w-96 mx-auto ">
        <input
          type="range"
          min="0"
          max="100"
          value="25"
          class="range"
          step="25"
        />
        <div class="w-full flex justify-between text-xs px-2">
          <span>1</span>
          <span>3</span>
          <span>5</span>
          <span>7</span>
          <span>10+</span>
        </div>
      </div>
    </>
  );
}
export default Bladedance;

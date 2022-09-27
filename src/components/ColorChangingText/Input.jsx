import {  useState } from "react";
import Button from "./Button";

function Input() {
  const [color, setColor] = useState("black");

  return (
    <>
      <input
        style={{
          padding: "0.5rem",
          border: "2px solid black",
          borderRadius: "10px",
          fontSize: "1.5rem"
        }}
        type="text"
        placeholder="Write any color name"
        onChange={(e) => setColor(e.target.value)}
      />
      <h1 style={{
         color ,
         width: "max-content",
         backgroundColor: "#00000023",
         borderRadius: "10px",
         padding: "0.5rem"
      }}>This text color will change</h1>
      <Button color={color} />
    </>
  );
}

export default Input;
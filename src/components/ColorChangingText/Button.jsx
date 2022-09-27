import { useEffect, useState } from "react";

function Button({ color }) {
  const [randomColor, setRandomColor] = useState("black");

  useEffect(() => {
    if (!color) setRandomColor("black");
  }, [color]);

  return (
    <>
      <button
        style={{
          all: "none",
          padding: "0.5rem",
          color: randomColor,
          border: `2px solid ${randomColor}`,
          fontSize: "1.5rem",
          borderRadius: "10px",
          backgroundColor: "#00000023"
        }}
        onClick={() => setRandomColor(color)}
      >
        Click Me !
      </button>
      <h5>To change button color first write any color in input box</h5>
    </>
  );
}

export default Button;

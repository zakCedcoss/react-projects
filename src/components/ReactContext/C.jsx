import { useContext } from "react";
import { TestContext } from "../../context/testContext";

function C() {
  const { state, dispatch } = useContext(TestContext);
  return (
    <div style={{
      color: "green",
      display: "flex",
      flexDirection:"column",
      alignItems:"center",
      justifyContents:"center"
      }}>
        <div>
          <h1>Count: {state.counter}</h1>
        </div>
        <div>
      <button onClick={() => dispatch({ type: "INC" })}>COUNT UP</button>
      <button onClick={() => dispatch({ type: "DEC" })}>COUNT DOWN</button>
      <button onClick={() => dispatch({ type: "INC5", payload: 5 })}>COUNT BY 5</button>
        </div>
    </div>
  );
}

export default C;

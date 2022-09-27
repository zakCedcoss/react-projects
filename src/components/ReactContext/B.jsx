import { useContext } from "react";
import { TestContext } from "../../context/testContext";
import C from "./C"

function B() {
  const ctx = useContext(TestContext);

  return (
    <div style={{color: "crimson"}}>
      <C/>
    </div>
  )
}

export default B
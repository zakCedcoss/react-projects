import { createContext } from "react";
import useGlobalState from "../reducers/TestReducer";

export const TestContext = createContext()

const TestProvider = ({children}) => {
  return <TestContext.Provider value={useGlobalState()}>
    {children}
  </TestContext.Provider>
}

export default TestProvider
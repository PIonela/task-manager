// import { createContext } from "react";
import ContainerBox from "./components/ContainerBox/ContainerBox";
import { TaskProvider } from "./context/TaskContext";
// export const TaskContext = createContext();

function App() {
  return (
    <div className="App">
      {/* <TaskContext.Provider value={[1, 2, 3]}> */}
      <TaskProvider>
        <ContainerBox />
      </TaskProvider>
      {/* </TaskContext.Provider> */}
    </div>
  );
}

export default App;

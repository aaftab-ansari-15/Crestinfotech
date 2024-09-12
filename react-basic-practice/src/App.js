import "./App.css";
import ParentComponent from "./component/refForwarding";

function App() {
  console.log("app");

  return (
    <div className="App">
      <h4>App</h4>
      {/* <ParentCom /> */}
      {/* <CustomParentComToDetectClickOutside /> */}
      {/* <StateImmutability /> */}
      {/* <TodoListWithButton /> */}
      <ParentComponent />
    </div>
  );
}

export default App;

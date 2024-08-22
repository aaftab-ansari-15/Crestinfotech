import "./App.css";
import SignUp from "./component/SignUp";
import Signup2 from "./component/SignUp2";

function App() {
  return (
    <div className="App">
      <hr />
      <h4>
        made without react-context and with (Formik, Form, Field, ErrorMessage)
      </h4>
      <SignUp />0
      <hr />
      <hr />
      <hr />
      <h4>made with react-context and with (useFormik)</h4>
      <Signup2 />
    </div>
  );
}

export default App;

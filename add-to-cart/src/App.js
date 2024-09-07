import "./App.css";
import Cart from "./component/Cart";
import ProductList from "./component/ProductList";

function App() {
  return (
    <div className="App">
      <center>
        <ProductList />
        <hr />
        <Cart />
      </center>
    </div>
  );
}

export default App;

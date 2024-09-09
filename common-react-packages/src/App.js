import "./App.css";
import Classnames2 from "./component/Classnames2";
import FontAwesome3 from "./component/FontAwesome3";
import RcSlider6 from "./component/RcSlider6";
import ReactDatePicker4 from "./component/ReactDatePicker4";
import ReactDropzone5 from "./component/ReactDropzone5";
import ReactJsPagination12 from "./component/ReactJsPagination12";
import ReactMultiCarousel7 from "./component/ReactMultiCarousel7";
import ReactReduxThunk11 from "./component/ReactReduxThunk11";
import ReactSelect8 from "./component/ReactSelect8";
import Reactstrap1 from "./component/Reactstrap1";
import ReactTable9 from "./component/ReactTable9";
import ReactToastify10 from "./component/ReactToastify10";
function App() {
  return (
    <div className="App">
      <h4>1: Reactstrap</h4>
      <hr />
      <Reactstrap1 />
      <hr />
      <h4>2: Classnames</h4>
      <hr />
      <div>
        <Classnames2 isPrimary={true} isDisabled={false}>
          Primary Button
        </Classnames2>
        <Classnames2 isPrimary={false} isDisabled={true}>
          Disabled Button
        </Classnames2>
      </div>
      <hr />
      <h4>3: Font Awesome</h4>
      <hr />
      <FontAwesome3 />
      <hr />
      <h4>4: React Date Picker</h4>
      <ReactDatePicker4 />
      <hr />
      <h4>5: React Dropzone </h4>
      <ReactDropzone5 />
      <hr />
      <h4>6: Rc Slider</h4>
      <RcSlider6 />
      <hr />
      <h4>7: React Multi Carousel</h4>
      <ReactMultiCarousel7 />
      <hr />
      <h4>8: React Select</h4>
      <ReactSelect8 />
      <hr />
      <h4>9: React Table</h4>
      <ReactTable9 />
      <hr />
      <h4>10: React Toastify</h4>
      <ReactToastify10 />
      <hr />
      <h4>11: Redux Thunk</h4>
      <ReactReduxThunk11 />
      <hr />
      <h4>12: React Js Pagination</h4>
      <ReactJsPagination12 />
      <hr />
      <h4>13: React Detect Click Outside</h4>
      {/* */}
      <hr />
      <h4>14: @Zumper/ React Ladda</h4>
      {/* <ReactLadda /> */}
      <hr />
      <h4>15: React Dock</h4>
    </div>
  );
}

export default App;

import "./App.css";
import Compo from "./Compo";
import cov from "./images/cover.png";

function App() {
  return (
    <div className="bg-[black] w-screen h-screen flex justify-center items-center overflow-hidden relative select-none">
      <Compo />
      <img alt="" src={cov} className="object-contain w-screen absolute z-30" />
    </div>
  );
}

export default App;

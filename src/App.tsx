import "./App.css";
import IconPanel from "./components/IconPanel";
import Player from "./components/Player";
import Teams from "./components/Teams";

function App() {
  return (
    <>
      <div className="w-screen h-screen flex justify-center items-center">
        <div className="absolute left-10  top-8  max-w-fit">
          <IconPanel />
        </div>
        <div className="absolute left-auto right-auto bottom-8">
          <Player />
        </div>
        <Teams />
      </div>
    </>
  );
}

export default App;

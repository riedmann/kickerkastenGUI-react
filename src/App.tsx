import "./App.css";
import Button from "./components/Button";
import IconPanel from "./components/IconPanel";
import PlayIcon from "./components/icons/PlayIcon";
import Teams from "./components/Teams";
import { API } from "./lib/API";
import Player from "./components/Player";

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

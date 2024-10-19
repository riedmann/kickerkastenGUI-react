import { API } from "../lib/API";
import { useKickStore } from "../lib/useKickStore";
import Button from "./Button";
import PauseIcon from "./icons/PauseIcon";
import PlayIcon from "./icons/PlayIcon";

type Props = {};

export default function Player({}: Props) {
  // Correctly typed usage of the store

  const isPlaying = useKickStore((state) => state.isPlaying);
  const setIsPlaying = useKickStore((state) => state.setIsPlaying);

  return (
    <div className=" h-20 mt-2">
      <Button
        onClick={() => {
          setIsPlaying(!isPlaying);

          if (isPlaying) {
            API().pauseGame();
          } else {
            API().startGame();
          }
        }}
      >
        {isPlaying ? <PauseIcon /> : <PlayIcon />}
      </Button>
    </div>
  );
}

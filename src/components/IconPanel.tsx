import { useState } from "react";
import Button from "./Button";
import LightIcon from "./icons/LightIcon";
import ReloadIcon from "./icons/ReloadIcon";
import { API } from "../lib/API";
import BallIcon from "./icons/BallIcon";

type Props = {};

export default function IconPanel({}: Props) {
  const [program, setProgram] = useState(0);
  return (
    <div className="flex gap-6">
      <Button
        onClick={() => {
          API().runLedAnimation(program);
          let newProgram = (program + 1) % 5;
          setProgram(newProgram);
        }}
      >
        <LightIcon />
      </Button>
      <Button
        onClick={() => {
          API().resetGame();
        }}
      >
        <ReloadIcon />
      </Button>
      <Button
        onClick={() => {
          API().giveBall();
        }}
      >
        <BallIcon />
      </Button>
    </div>
  );
}

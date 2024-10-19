import { DOMAIN } from "./constants";

export const startGame = () => {
  fetch(DOMAIN + "timer/start");
};

export const pauseGame = () => {
  fetch(DOMAIN + "timer/pause");
};

export const resetGame = () => {
  fetch(DOMAIN + "timer/reset");
};

export const giveBall = () => {
  fetch(DOMAIN + "ball/out");
};

export const runLedAnimation = (id: number) => {
  fetch(DOMAIN + "led/" + id);
};

export const getScore = async () => {
  const result = await fetch(DOMAIN + "score");
  return result.json();
};

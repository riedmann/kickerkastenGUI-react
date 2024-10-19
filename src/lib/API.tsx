import { DOMAIN } from "./constants";

export function API() {
  return {
    startGame: () => {
      console.log("fetch start game");

      fetch(DOMAIN + "timer/start");
    },

    pauseGame: () => {
      console.log("fetch pause game");
      fetch(DOMAIN + "timer/pause");
    },

    resetGame: () => {
      console.log("fetch reset game");
      fetch(DOMAIN + "timer/reset");
    },

    giveBall: () => {
      console.log("fetch give ball");
      fetch(DOMAIN + "ball/out");
    },

    runLedAnimation: (id: number) => {
      console.log("fetch anim");
      fetch(DOMAIN + "led/" + id);
    },

    getScore: async () => {
      console.log("fetch score");
      const result = await fetch(DOMAIN + "score");
      return result.json();
    },
  };
}

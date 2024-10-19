import { useAnimate } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useKickStore } from "../lib/useKickStore";

type Props = {};

export default function Standings({}: Props) {
  const [scope, animate] = useAnimate();
  const [rotated, setRotated] = useState(false);
  const [colorChanged, setColorChanged] = useState(false);
  const isPlaying = useKickStore((state) => state.isPlaying);

  const handleClick = async () => {
    await animate(scope.current, { rotate: rotated ? 0 : 360 });
    setRotated(!rotated); // Toggle rotation direction
  };

  const changeColor = async () => {
    await animate(scope.current, {
      backgroundColor: colorChanged ? "#06b6d4" : "#ABC4AB", // cyan to greenish
      scale: colorChanged ? 1.1 : 1,
      transition: {
        duration: 2, // Time for the animation
        type: "spring",
        bounce: 0.5, // Amount of bounce (0 means no bounce, 1 means full bounce)
      }, // Slow down the color change (2 seconds)
    });
    setColorChanged(!colorChanged); // Toggle the state to switch colors on each interval
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying) {
        changeColor();
      }
      // Change color on each interval
    }, 1000); // Trigger every 4 seconds

    return () => clearInterval(intervalId); // Clean up interval on component unmount
  }, [colorChanged, isPlaying]); // Add colorChanged as a dependency to ensure the interval continues alternating

  return (
    <div
      ref={scope}
      className="flex justify-center bg-cyan-500 text-white rounded-md h-40 items-center"
      onClick={handleClick}
    >
      4 - 0
    </div>
  );
}
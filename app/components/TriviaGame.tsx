import React from "react";
import Arrow from "./Arrow";

const TriviaGame = () => {
  return (
    <section className="flex justify-center items-center">
    <iframe
      src="https://play.unity.com/api/v1/games/game/1a32fd24-4ecd-4e45-90aa-f68c77c94be4/build/latest/frame"
      width="80%"
      height="600px"
      style={{ border: "none" }}
      allow="autoplay; fullscreen; gamepad"
      allowFullScreen
      title="Unity Game"
    />
    <Arrow/>
    </section>
  );
};

export default TriviaGame;
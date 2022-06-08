import { useEffect, useRef } from "react";
import player from "./img/player.jpg";
import brain from "./img/brain.jpeg";
import drowing from "./compenets/drowing";
import clear from "./compenets/clear";
import detectWalls from "./compenets/detectWalls";
import { keydown, keyUp } from "./compenets/controls";
import randomPosition from "./compenets/randomPosition";
import collision from "./compenets/collision";
import "./styles.css";

export default function App() {
  const canvasRef = useRef();
  const ctxRef = useRef();
  const imgRef = useRef();
  const imgBrainRef = useRef();
  const playerRef = useRef({
    w: 80,
    h: 69,
    x: 20,
    y: 150,
    speed: 2,
    dx: 0,
    dy: 0
  });
  const brainRef = useRef({
    w: 60,
    h: 50,
    x: randomPosition(window.innerWidth - 60),
    y: randomPosition(250)
  });
  const resultref = useRef({
    score: 0
  });
  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = 300;
    ctxRef.current = ctx;
    update();
  }, []);

  const newPosition = () => {
    const player = playerRef.current;
    playerRef.current.x += playerRef.current.dx;
    playerRef.current.y += playerRef.current.dy;
    detectWalls(player);
  };
  const brainPosition = () => {
    const width = window.innerWidth;
    brainRef.current.x = randomPosition(width);
    brainRef.current.y = randomPosition(250);
  };

  const update = () => {
    const ctx = ctxRef.current;
    const image = imgRef.current;
    const brainImg = imgBrainRef.current;
    const brain = brainRef.current;
    const player = playerRef.current;
    const result = resultref.current;

    clear(ctx);
    ctx.font = "48px serif";
    ctx.fillText(`score:${result.score}`, 5, 30);
    drowing(ctx, image, player);
    drowing(ctx, brainImg, brain);
    newPosition();
    collision(player, brain, brainPosition, result);
    requestAnimationFrame(update);
  };

  return (
    <>
      <canvas
        tabIndex="0"
        ref={canvasRef}
        onKeyDown={(e) => keydown(e, playerRef)}
        onKeyUp={(e) => keyUp(e, playerRef)}
      />
      <img ref={imgRef} src={player} alt="player" />
      <img ref={imgBrainRef} src={brain} alt="player" />
    </>
  );
}

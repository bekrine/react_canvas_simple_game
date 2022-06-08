export function keydown(e, playerRef) {
  if (e.key === "ArrowRight") {
    playerRef.current.dx = playerRef.current.speed;
  }
  if (e.key === "ArrowLeft") {
    playerRef.current.dx = -playerRef.current.speed;
  }
  if (e.key === "ArrowUp") {
    playerRef.current.dy = -playerRef.current.speed;
  }
  if (e.key === "ArrowDown") {
    playerRef.current.dy = playerRef.current.speed;
  }
}

export function keyUp(e, playerRef) {
  playerRef.current.dx = 0;
  playerRef.current.dy = 0;
}

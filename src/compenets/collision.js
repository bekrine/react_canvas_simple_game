export default function collision(player, target, newPostion, result) {
  if (
    player.x < target.x + target.w &&
    player.x + player.w > target.x &&
    player.y < target.y + target.w &&
    player.y + player.h > target.y
  ) {
    newPostion();
    result.score += 1;
  }
}

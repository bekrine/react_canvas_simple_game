export default function detectWalls(player) {
  if (player.x < 1) {
    player.x = 0;
  }
  if (player.x + player.w > window.innerWidth) {
    player.x = window.innerWidth - player.w;
  }
  if (player.y < 2) {
    player.y = 0;
  }
  if (player.y + player.h > 300) {
    player.y = 300 - player.h;
  }
}

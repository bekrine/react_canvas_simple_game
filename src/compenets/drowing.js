export default function drowing(ctxRef, imgRef, item) {
  ctxRef.drawImage(imgRef, item.x, item.y, item.w, item.h);
}

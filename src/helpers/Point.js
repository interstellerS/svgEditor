export default class Point {
  constructor(x, y, time = new Date().getTime()) {
    this.x = x;
    this.y = y;
    this.time = time;
  }
}

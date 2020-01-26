import { Subject } from "rxjs";
export default class FakeSensor {
  constructor() {
    this.current = Math.round(Math.random() * 30, 2);
    this.o = new Subject();
    this.direction = 1;
  }

  increaseTemperature() {
    this.current += 1;
    this.o.next(this.current);
  }

  decreaseTemperature() {
    this.current -= 1;
    this.o.next(this.current);
  }

  currentTemperature() {
    return this.current;
  }

  observeTemperature() {
    return this.o;
  }
}

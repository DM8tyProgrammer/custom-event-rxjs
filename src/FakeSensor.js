import { Subject } from "rxjs";
export default class FakeSensor {
  constructor() {
    this.current = Math.round(Math.random() * 30, 2);
    this.o = new Subject();
    this.direction = 1;
  }

  increaseTempature() {
    this.current += 1;
    this.o.next(this.current);
  }

  decreaseTempature() {
    this.current -= 1;
    this.o.next(this.current);
  }

  currentTempature() {
    return this.current;
  }

  observeTempature() {
    return this.o;
  }
}

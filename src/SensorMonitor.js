import { Subject } from "rxjs";
export default class SensorMonitor {
  static THRESHOLD = "30";

  constructor(sensor) {
    this.sensor = sensor;
    this.registrations = {
      over30: new Subject(),
      below30: new Subject()
    };
  }

  monitor() {}
}

import { Subject } from "rxjs";
const THRESHOLD = "30";
export default class Thermostat {
  constructor(sensor) {
    this.sensor = sensor;
    // data structure for holding subscriptions
    this.subscriptions = {
      above: new Subject(),
      below: new Subject()
    };

    this.lastRecordedTemperature = 0;
    this.sensor.observeTemperature().subscribe(t => this.monitor(t));
  }

  monitor(currentTemperature) {
    // when temperature cross above THRESHOLD
    if (
      currentTemperature > THRESHOLD &&
      this.lastRecordedTemperature <= THRESHOLD
    ) {
      // publish event
      this.subscriptions["above"].next(currentTemperature);
    } else if (
      currentTemperature <= THRESHOLD &&
      this.lastRecordedTemperature >= THRESHOLD
    ) {
      // publish event
      this.subscriptions["below"].next(currentTemperature);
    }

    this.lastRecordedTemperature = currentTemperature;
  }

  on(event, action) {
    // sanatize event .. left code
    this.subscriptions[event].subscribe(v => action(v));
  }
}

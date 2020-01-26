import { Subject } from "rxjs";
const THRESHOLD = "30";
export default class SensorMonitor {
  constructor(sensor) {
    this.sensor = sensor;
    // subscriptions data
    this.subscriptions = {
      above30: new Subject(),
      below30: new Subject()
    };

    this.lastRecordedTemperature = 0;
    this.sensor.observeTemperature().subscribe(t => this.monitor(t));
  }

  monitor(currentTemperature) {
    /* 
       lastRecordedTemperature is added to publish 
       only if there is jump in of temparature category 
    */

    if (
      currentTemperature > THRESHOLD &&
      this.lastRecordedTemperature <= THRESHOLD
    ) {
      console.log("emitted: above30");
      this.subscriptions["above30"].next(currentTemperature);
    } else if (
      currentTemperature <= THRESHOLD &&
      this.lastRecordedTemperature >= THRESHOLD
    ) {
      console.log("emitted: below30");
      this.subscriptions["below30"].next(currentTemperature);
    }

    this.lastRecordedTemperature = currentTemperature;
  }

  on(event, action) {
    // sanatize event .. left code

    this.subscriptions[event].subscribe(v => action(v));
  }
}

import { Subject } from "rxjs";
const THRESHOLD = "30";
export default class Thermostat {
  constructor(sensor) {
    this.sensor = sensor;
    // subscriptions data
    this.subscriptions = {
      above: new Subject(),
      below: new Subject()
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
      console.log("emitted: above ");
      this.subscriptions["above"].next(currentTemperature);
    } else if (
      currentTemperature <= THRESHOLD &&
      this.lastRecordedTemperature >= THRESHOLD
    ) {
      console.log("emitted: below 30");
      this.subscriptions["below"].next(currentTemperature);
    }

    this.lastRecordedTemperature = currentTemperature;
  }

  on(event, action) {
    // sanatize event .. left code
    this.subscriptions[event].subscribe(v => action(v));
  }
}

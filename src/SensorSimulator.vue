<template>
  <div>
    <h2>Sensor</h2>
    <div>
      <div class="lead">{{sensorOutput}}</div>
      <button v-on:click="increment()" class="btn btn-success">+</button>
      <button v-on:click="descriment()" class="btn btn-danger">-</button>
    </div>
  </div>
</template>

<script>
import FakeSensor from "./FakeSensor";
const sensor = new FakeSensor();

export default {
  created() {
    sensor.observeTempature().subscribe(o => (this.sensorOutput = o));
  },

  data() {
    return {
      sensorOutput: sensor.currentTempature()
    };
  },
  methods: {
    increment() {
      sensor.increaseTempature();
    },
    descriment() {
      sensor.decreaseTempature();
    }
  }
};
</script>




<template>
  <div class="p-3">
    <h2>Sensor</h2>
    <div>
      <div class="lead display-4">
        <span>{{sensorOutput}}</span>
        <small class="small text-muted">°C</small>
      </div>

      <p class="lead small">Above 30 °C, AC would start; Windows would close</p>
      <div class="btn-group">
        <button v-on:click="increment()" class="btn btn-success btn-sm">+</button>
        <button v-on:click="descriment()" class="btn btn-danger btn-sm">-</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    sensor: {
      type: Object,
      required: true
    }
  },
  created() {
    this.sensor.observeTemperature().subscribe(o => (this.sensorOutput = o));
  },

  data() {
    return {
      sensorOutput: this.sensor.currentTemperature()
    };
  },
  methods: {
    increment() {
      this.sensor.increaseTemperature();
    },
    descriment() {
      this.sensor.decreaseTemperature();
    }
  }
};
</script>




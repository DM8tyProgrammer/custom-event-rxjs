<template>
  <div class="p-3">
    <h3 class="display-5 text-center">Thermostat Simulator</h3>
    <div class="row">
      <ThermostatSimulator
        v-bind:sensor="fakeSensor"
        class="col-md-6 offset-md-3 col-12 border rounded-top"
      />
    </div>
    <div class="row">
      <OnOff
        title="AC"
        v-bind:status="ac"
        class="col-md-3 offset-md-3 col-6 border-left border-bottom rounded-bottom"
      />
      <OnOff
        title="Windows"
        v-bind:status="window"
        class="col-md-3 col-6 border-left border-bottom border-right rounded-bottom"
      />
    </div>
  </div>
</template>

<script>
import FakeSensor from "./FakeSensor";
import Thermostat from "./Thermostat";

import ThermostatSimulator from "./ThermostatSimulator";
import OnOff from "./OnOffComponent";

export default {
  created() {
    this.fakeSensor = new FakeSensor();
    const thermostat = new Thermostat(this.fakeSensor);
    thermostat.on("below", t => {
      this.ac = false;
      this.window = true;
    });

    thermostat.on("above", t => {
      this.ac = true;
      this.window = false;
    });
  },
  data() {
    return {
      fakeSensor: null,
      ac: false,
      window: true
    };
  },
  computed: {},
  components: {
    ThermostatSimulator,
    OnOff
  }
};
</script>

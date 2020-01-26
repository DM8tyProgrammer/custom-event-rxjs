<template>
  <div class="row">
    <SensorSimulator v-bind:sensor="fakeSensor" class="col-md-3 col-sm-12"/>
    <OnOff title="AC" v-bind:status="ac" class="col-md-3 col-sm-12"/>
    <OnOff title="Windows" v-bind:status="window" class="col-md-3 col-sm-12"/>
  </div>
</template>

<script>
import FakeSensor from "./FakeSensor";
import SensorMonitor from "./SensorMonitor";
import SensorSimulator from "./SensorSimulator";
import OnOff from "./OnOffComponent";

export default {
  created() {
    this.fakeSensor = new FakeSensor();
    const monitor = new SensorMonitor(this.fakeSensor);
    monitor.on("below30", t => {
      this.ac = false;
      this.window = true;
    });

    monitor.on("above30", t => {
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
    SensorSimulator,
    OnOff
  }
};
</script>

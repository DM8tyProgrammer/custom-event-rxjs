<template>
  <div class="p-3">
    <h2>{{title}}</h2>
    <div class="btn-group-toggle" data-toggle="buttons">
      <label v-bind:class="'btn btn-secondary status ' + (status? 'btn-success': 'btn-danger') ">
        <input type="checkbox" disabled v-bind:checked="status">
        <i v-bind:class="'dot fa-circle ' + (status? 'fas': 'far')"></i>
        <!-- <i v-if="status" class="fas fa-dot-circle"></i> -->
      </label>
    </div>
  </div>
</template>


<style>
.status {
  transition: all 1s ease-in-out;
}
</style>

<script>
export default {
  props: {
    title: {
      type: String
    },
    status: {
      type: Boolean
    }
  },
  watch: {
    status() {
      let dot = this.$el.querySelector(".dot");
      // console.log(dots.length);
      // for (let d of dots) {
      let icon = dot.getAttribute("data-prefix") === "far" ? "fas" : "far";
      console.log(dot.getAttribute("data-prefix"), icon);
      dot.setAttribute("data-prefix", icon);
      // }
    }
  }
};
</script>


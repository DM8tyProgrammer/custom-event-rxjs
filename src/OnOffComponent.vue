<template>
  <div>
    <h2>{{title}}</h2>
    <!-- <div>{{status}}</div> -->
    <div class="btn-group-toggle" data-toggle="buttons">
      <label class="btn btn-secondary active">
        <input type="checkbox" checked>
        {{status? 'on':'off'}}
      </label>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String
    },
    status: {
      type: Boolean
    }
  }
};
</script>


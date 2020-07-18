<template>
  <div class="hello">
    <b-card>
      <h1>This is Test of Vue and Go on the GAE.</h1>
    </b-card>
    <div class="ml-4 my-4">
      <h2>Menu</h2>
      <div class="ml-4 my-1">
        <ToServerTest/>
        <ToErrTest/>
        <ToTask/>
      </div>
    </div>
  </div>
</template>

<script>
import ToServerTest from './ToServerTest.vue'
import ToErrTest from "./ToErrTest.vue";
import ToTask from './ToTask.vue'

export default {
  name: 'HelloWorld',
  components: {
    ToServerTest,
    ToErrTest,
    ToTask,
  }
}
</script>

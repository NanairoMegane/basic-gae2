<template>
  <b-card>
    <div>
      <div class="task">
          Server Response Test.
      </div>
      <b-button v-on:click="doGet" variant="outline-primary">Get Data</b-button>
      <b-table-simple>
        <b-tr>
          <b-td> {{resData}} </b-td>            
        </b-tr>
      </b-table-simple>
      <div class="tobase">
          <router-link to="/">Close Task Page</router-link>
      </div>
    </div>  
  </b-card>
</template>

<script>
import * as taskService from "../service/task"
export default {
  name: 'TaskPage',
  data(){
      return {
        resData: "None",
      }
  },
  methods:{
    doGet(){
      taskService.doGet()
      .then(res => {
          if (res.status === 200) {
              this.resData = res.data;
          } else {
              this.resData = "Failed";
          }
      });
    },
  },
}
</script>

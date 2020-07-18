<template>
  <b-card>
    <div>
      <div class="servertest">
          <h2>Server Response Test.</h2>
      </div>
      <div class="border ml-4 my-4">
        <h3>Description</h3>
        <ul>
          <li>When press "Call Server", Call Server and display Server Time.</li>
        </ul>
      </div>
      <b-button v-on:click="doRequest" variant="outline-primary">Call Server</b-button>
      <b-button v-on:click="doReset" variant="outline-warning">Reset</b-button>
      <b-table-simple>
        <b-body>
          <b-tr v-for="(data, i) in resDataList" :key=i>
            <b-td> {{i + 1}}</b-td>
            <b-td> {{data}} </b-td>            
          </b-tr>
        </b-body>
        <b-td>
        </b-td>
      </b-table-simple>
      <div class="tobase">
          <router-link to="/">Close Server Test Page</router-link>
      </div>
    </div>  
  </b-card>
</template>

<script>
import * as testService from "../service/serverTest"
export default {
  name: 'ServerTestPage',
  data(){
      return {
        resDataList: []
      }
  },
  methods:{
    doRequest(){
      testService.doGet()
      .then(res => {
          if (res.status === 200) {
              this.resDataList.push(res.data);
          } else {
              this.resDataList.push("Failed");
          }
      });
    },
    doReset(){
      this.resDataList = [];
    }
  },
}
</script>

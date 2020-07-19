<template>
  <b-card>
    <div>
      <div class="errtest">
          <h2>Error Response Test.</h2>
      </div>
      <div class="border ml-4 my-4">
        <h3>Description</h3>
        <ul>
          <li>When press "Create 400, Server 400 error </li>
          <li>When press "Create 500, Server 500 error and Report to Slack (When alert policy is enabled.</li>
          <li>When press "Create Info level Error.</li>
          <li>When press "Create Warning level Error, and Report to Slack (When alert policy is enabled.)</li>          
        </ul>
      </div>
      <b-button v-on:click="doGet400" variant="outline-primary">Create 400 Error</b-button>
      <b-button v-on:click="doGet500" variant="outline-primary">Create 500 Error</b-button>
      <b-button v-on:click="doGetInfo" variant="outline-primary">Create Info level Error</b-button>
      <b-button v-on:click="doGetWarn" variant="outline-primary">Create WARN level Error</b-button>
      <b-button v-on:click="doReset" variant="outline-warning">Reset</b-button>
      <b-table-simple>
        <b-tr>
          <b-th> 400 res</b-th>
          <b-td> {{res400}} </b-td>            
        </b-tr>
        <b-tr>
          <b-th> 500 res</b-th>
          <b-td> {{res500}} </b-td>            
        </b-tr>
        <b-tr>
          <b-th> Info res</b-th>
          <b-td> {{resInfo}} </b-td>            
        </b-tr>
        <b-tr>
          <b-th> Warning res</b-th>
          <b-td> {{resWarn}} </b-td>            
        </b-tr>                
      </b-table-simple>
      <div class="tobase">
          <router-link to="/">Close Error Test Page</router-link>
      </div>
    </div>  
  </b-card>
</template>

<script>
import * as errService from "../service/errorTest"
export default {
  name: 'ErrorTestPage',
  data(){
      return {
        res400: "None",
        res500: "None",
        resInfo: "None",
        resWarn: "None",
      }
  },
  methods:{
    doGet400(){
      errService.doGet400()
      .catch(err => {
        this.res400 = err;
      });
    },
    doGet500(){
      errService.doGet500()
      .catch(err => {
        this.res500 = err;
      });
    },
    doGetInfo(){
      errService.doGetInfo()
      .catch(err => {
        this.resInfo = err;
      });
    },
    doGetWarn(){
      errService.doGetWarn()
      .catch(err => {
        this.resWarn = err;
      });
    },        
    doReset(){
      this.res400 = "None";
      this.res500 = "None";
      this.resInfo = "None";
      this.resWarn = "None";            
    }
  },
}
</script>

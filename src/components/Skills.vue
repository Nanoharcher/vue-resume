<template>
  <div>
    <b-container fluid class="skills">
      <b-row class="skillsContent">
        <h1>{{skills[0].title}}</h1>
        <b-col lg="6" md="6" sm="12" cols="12">
          <div class="progress-wrap" v-for="(item,index) in skills[0].skills" :key="item.id" v-if='index<skills[0].skills.length/2'>
            <h3><span class="name-left">{{skills[0].skills[index].skillname}}</span><span class="value-right">{{parseInt(skills[0].skills[index].description)+"%"}}</span></h3>
            <div class="progress">
              <b-progress :value="parseInt(skills[0].skills[index].description)" variant="success" striped :animated="true" class="mb-2"></b-progress>
            </div>
          </div>
        </b-col>
        <b-col lg="6" md="6" sm="12" cols="12">
          <div class="progress-wrap" v-for="(item,index) in skills[0].skills" :key="item.id" v-if='index>=skills[0].skills.length/2'>
            <h3><span class="name-left">{{skills[0].skills[index].skillname}}</span><span class="value-right">{{parseInt(skills[0].skills[index].description)+"%"}}</span></h3>
            <div class="progress">
              <b-progress :value="parseInt(skills[0].skills[index].description)" variant="warning" striped :animated="true" class="mb-2"></b-progress>
            </div>
          </div>
        </b-col>
        <b-col lg="12" md="12" sm="12" cols="12" class="skillsContent_middle">
        </b-col>

        <h1>{{skills[1].title}}</h1>
        <b-col lg="12" md="12" sm="12" cols="12">
          <b-card-group deck>
            <b-card bg-variant="primary" text-variant="white" :header="skills[1].skills[index].skillname" class="text-center mb-3" v-for="(item,index) in skills[1].skills" :key="item.id" v-if='index<skills[1].skills.length/2'>
              <p class="card-text">{{skills[1].skills[index].description}}</p>
            </b-card>
          </b-card-group>
          <b-card-group deck>
            <b-card bg-variant="info" text-variant="white" :header="skills[1].skills[index].skillname" class="text-center mb-3" v-for="(item,index) in skills[1].skills" :key="item.id" v-if='index>=skills[1].skills.length/2'>
              <p class="card-text">{{skills[1].skills[index].description}}</p>
            </b-card>
          </b-card-group>

        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        skills:[]
      }
    },
    created () {
      this.$http.get('/api/skills').then(function(res){
        var data = res.data
        console.log(res.data)
        this.$set(this, 'skills', data)

      },function(){
        //alert('请求失败处理');   //失败处理
      });
    }
  }
</script>

<style scoped>
  .skillsContent {
    box-sizing: border-box;
    background: #000 url("../assets/images/skillbackground.jpg") center/cover no-repeat;
    position: relative;
  }
  .skillsContent h1{
    width:100%;
    text-align: center;
  }
  .skillsContent_middle{
    background: url("../assets/images/handy.jpg") center/cover no-repeat;
    position: relative;
    min-height:200px;
    margin-top:50px;
    margin-bottom:50px;
  }
  .progress-wrap {
    width: 100%;
    float: left;
    margin-bottom: 10px;
  }
  .progress-wrap h3 {
    font-size: 16px;
    display: block;
    margin-bottom: 10px;
    float: left;
    width: 100%;
  }
  .progress-wrap h3 .name-left {
    float: left;
  }
  .progress-wrap h3 .value-right {
    float: right;
  }
  .progress {
    width: 100%;
    box-sizing:border-box;
  }
  .card{
    min-height:190px!important;
  }
</style>

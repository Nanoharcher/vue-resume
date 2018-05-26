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
        skills:[{"title":"WEB前/后端技术或框架熟练度","skills":[{"skillname":"HTML","description":"95"},{"skillname":"JavaScript","description":"94"},{"skillname":"CSS","description":"92"},{"skillname":"jQuery","description":"90"},{"skillname":"SQL","description":"87"},{"skillname":"PHP","description":"85"},{"skillname":"NodeJS","description":"82"},{"skillname":"VueJS","description":"80"},{"skillname":"C#","description":"75"},{"skillname":"Java","description":"70"},{"skillname":"Photoshop","description":"68"},{"skillname":"InDesign","description":"65"}]},{"title":"个人优势","skills":[{"skillname":"对编程开发的热情","description":"对各类前/后端技术抱有浓厚兴趣，密切关注流行技术以及热门框架的发展趋势，是GitHub和Stack Overflow的常客。有着很强的代码理解与改写能力，曾在短时间内完成了服务器以及数据库的的迁移工作，改写了联想官网页面各类表单的后端逻辑代码。"},{"skillname":"学习，理解，适应能力","description":"超强的学习，理解，适应能力。能够很快掌握需要的技能，熟悉工作流程，并且适应不同工作的环境和工作节奏。在入职联想不到一个月的时间内就熟悉了网站结构，系统功能，工作流程，技术需求，并开始处理正常任务。"},{"skillname":"自我分析能力","description":"深刻了解自己开发技术的薄弱点，并及时加强相关方面的学习与补充。对工作上出现的失误认真分析原因，究其根源。在现阶段的工作中，经常与同事分享自己的收获和经验，促进团队共同进步。"},{"skillname":"沟通交流能力","description":"有着较强的沟通能力（中英文），能准确高效的和各类角色进行需求和交付的沟通。如设计师，产品经理，第三方工程师，业务团队等等。"},{"skillname":"文档编写能力","description":"有着较强的文档编写能力（中英文），能通俗易懂的编写程序的使用说明文档。擅长编写各种类型如SEO，网站性能，回归测试方面的报告。"},{"skillname":"积极向上的精神","description":"时刻保持良好的工作状态，善于调节自己的心理状态。抗压能力超强，乐观自信，积极向上。"}]}]
      }
    }
//    created () {
//      this.$http.get('/api/skills.json').then(function(res){
//        var data = res.data
//        console.log(res.data)
//        this.$set(this, 'skills', data)
//
//      },function(){
//        //alert('请求失败处理');   //失败处理
//      });
//    }
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

<template>
  <div>
    <b-container fluid class="workexperience">
      <b-row class="workexpContent">
        <b-col lg="12" md="12" sm="12" cols="12" class="companygallery">
          <slider ref="slider" :pages="someList" :sliderinit="sliderinit" @slide='slide' @tap='onTap' @init='onInit'>
            <div slot="loading">
              <div class="loadingDot">
                <i></i>
                <i></i>
                <i></i>
                <i></i>
              </div>
            </div>
          </slider>
        </b-col>
        <b-col lg="12" md="12" sm="12" cols="12" class="companyintroduction">{{basicinfo.duration+"，"+basicinfo.companyname+"，"+basicinfo.department+"，"+basicinfo.title}}</b-col>
        <b-col lg="3" md="6" sm="12" cols="12" class="companydetail" v-for="(item,index) in workexperience" :key="item.id">
          <div class="box">
            <img :src="icons[index]" alt="work experience icon">
            <div class="over-layer">
              <h3 class="title">{{workexperience[index].responsibility}}</h3>
              <p class="description">{{workexperience[index].description}}</p>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
  import slider from 'vue-concise-slider'
  export default {
    data(){
      return {
        someList: [],
        sliderinit: {
          currentPage: 0,
          thresholdDistance:500,
          thresholdTime:100,
          autoplay:5000,
          loop:true,
          direction:'horizontal',
          infinite:1,
          slidesToScroll:1,
          timingFunction: 'ease',
          duration: 1000,
          effect:"fade"
        },
        icons: [],
        workexperience:[{"responsibility":"网络开发","image":"Coding.png","description":"联想B2C多站点（包含香港，台湾，新加坡，韩国）线上官网的开发以及维护以及用户数据库的管理。与设计师亲密合作，于最短时间内完成高保真度的各类页面及封装组件。"},{"responsibility":"页面测试","image":"Testing.png","description":"负责联想官网页面新功能的验收测试及回归测试。合理设计测试内容以及测试时间并组织团队测试。跟进问题及需求变更的进度以保证新功能上线的质量与速度。曾参与过大大小小数十次测试。"},{"responsibility":"分析页面","image":"Analyzing.png","description":"负责定期监控网站的性能并对网站的SEO进行优化。经常利用Dynatrace，Fullstory等工具对4xx，5xx等页面问题进行分析"},{"responsibility":"沟通交流","image":"Communicating.png","description":"负责在联想网站不同页面植入各类第三方客户数据解决方案，如Google再营销，Facebook Pixel，Appier，DoubleClick等等。并使用Tealium平台对已添加的代码进行性能的监控与管理。"}],
        basicinfo:{"duration":"2017年2月-至今","companyname":"联想(北京)集团","department":"WEB PRODCUTION CENTER","title":"网络开发工程师","workcontent":[{"responsibility":"网络开发","image":"Coding.png","description":"联想B2C多站点（包含香港，台湾，新加坡，韩国）线上官网的开发以及维护以及用户数据库的管理。与设计师亲密合作，于最短时间内完成高保真度的各类页面及封装组件。"},{"responsibility":"页面测试","image":"Testing.png","description":"负责联想官网页面新功能的验收测试及回归测试。合理设计测试内容以及测试时间并组织团队测试。跟进问题及需求变更的进度以保证新功能上线的质量与速度。曾参与过大大小小数十次测试。"},{"responsibility":"分析页面","image":"Analyzing.png","description":"负责定期监控网站的性能并对网站的SEO进行优化。经常利用Dynatrace，Fullstory等工具对4xx，5xx等页面问题进行分析"},{"responsibility":"沟通交流","image":"Communicating.png","description":"负责在联想网站不同页面植入各类第三方客户数据解决方案，如Google再营销，Facebook Pixel，Appier，DoubleClick等等。并使用Tealium平台对已添加的代码进行性能的监控与管理。"}]}
      }
    },
    components: {
      slider
    },
    created(){
      if (!this.icons) this.icons = []
      for (let i = 0; i < this.workexperience.length; i++) {
        if (this.workexperience[i].Access != 0) {
          this.icons.push(require('../assets/images/'+this.workexperience[i].image))
        }
      }
    },
//    created () {
//      this.$http.get('/api/workexperience.json').then(function(res){
//        if (!this.icons) this.icons = []
//        var data = res.data
//        console.log(res.data)
//        this.$set(this, 'basicinfo', data)
//        this.$set(this, 'workexperience', data.workcontent)
//        for (let i = 0; i < this.workexperience.length; i++) {
//          if (this.workexperience[i].Access != 0) {
//            this.icons.push(require('../assets/images/'+this.workexperience[i].image))
//          }
//        }
//      },function(){
//        //alert('请求失败处理');   //失败处理
//      });
//    },
    mounted () {
      let that = this
      setTimeout(function () {
        // Picture data can be assigned directly to someList
        that.someList = [
          {
            html: '',
            style:{
              background: "url("+require('../assets/images/work_1.jpg')+")",
              "background-position": "top !important",
              "background-repeat":"no-repeat",
              "background-size": "auto, 100%!important"
            }
          },
          {
            html: '',
            style:{
              background: "url("+require('../assets/images/work_2.jpg')+")",
              "background-position": "top !important",
              "background-repeat":"no-repeat",
              "background-size": "auto, 100%!important"
            }
          },
          {
            html: '',
            style:{
              background: "url("+require('../assets/images/work_3.jpg')+")",
              "background-position": "top !important",
              "background-repeat":"no-repeat",
              "background-size": "auto, 100%!important"
            }
          },
          {
            html: '',
            style:{
              background: "url("+require('../assets/images/work_4.jpg')+")",
              "background-position": "top !important",
              "background-repeat":"no-repeat",
              "background-size": "auto, 100%!important"
            }
          }
        ]
      }, 100)
    },
    methods: {
      // 监听事件发生了变化,需要指向一个子组件实例
      slide (data) {
        //console.log(data)
      },
      onTap (data) {
        //console.log(data)
      },
      onInit (data) {
        //console.log(data)
      }
    }
  }
</script>

<style scoped>
  .companygallery{
    background-image: url("../assets/images/companygallery.jpg");
    background-position: 100% 100%;
    padding:0;
    height:600px;
  }
  .companydetail{
    padding:0;
    background: #77a0ef;
    opacity: 0.8;
  }
  .companyintroduction{
    background: #ffff00;
    font-weight:bolder;
  }
  .box{
    position: relative;
    perspective: 1000px;
    border: solid black 5px;
    box-sizing: border-box;
  }
  .box img{
    width: 100%;
    height: auto;
    opacity:1;
    transform: translateY(0) rotateX(0);
    transition: all 0.6s ease-in-out 0s;
  }
  .box:hover img{
    transform: translateY(-00%) rotateX(90deg);
    transform-origin:top center;
    opacity:0;
  }
  .box .over-layer{
    position: absolute;
    cursor:pointer;
    top:0;
    left:0;
    width:100%;
    height:100%;
    opacity:0;
    background:#333d4b;
    text-align:center;
    padding: 0 20px;
    transition: all 1.0s ease-in-out 0s;
  }
  .box:hover .over-layer{
    opacity:1;
  }
  .box .title,
  .box .description,
  .box .social-links{
    position: relative;
    top: 11%;
    color: #d3d3d3;
  }
  .box .title{
    text-transform: capitalize;
  }
  .box .title:after{
    content:"";
    width: 50%;
    display: block;
    margin: 10px auto 0;
    border-bottom: 1px solid #fff;
  }
  @media only screen and (max-width: 990px){
    .box{  margin-bottom:20px; }
  }
  @media screen and (max-width: 576px) {
    .companygallery{
      display:none;
    }
  }
</style>

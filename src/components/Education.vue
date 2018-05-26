<template>
  <div>
    <b-container fluid class="education">
      <b-row class="schools">
        <b-col lg="6" md="6" sm="12" cols="12" class="schoolgallery" v-for="(item,index) in education" v-if="index>=1" :key="item.id">
          <div class="portfolio-box zoom-effect">
            <img :src="gallery[index]" class="img-responsive" alt="">
            <div class="portfolio-box-caption">
              <div class="portfolio-box-caption-content">
                <div class="school-name">
                  {{item.schoolname}}
                </div>
                <div class="school-specialty">
                  {{item.specialty}}
                </div>
                <div class="school-detail">
                  <ul class="list-inline">
                    <li @click="checkCourses(index)"><icon name="list-alt" scale="4"></icon></li>
                    <li @click="checkCertificate(certificate[index])"><icon name="search" scale="4"></icon></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
      <b-row>
        <b-col lg="12" md="12" sm="12" cols="12" class="timeline-body">
          <div class="main-timeline" >
            <div class="timeline"  v-for="(item,index) in education">
              <div class="timeline-content">
                <div class="circle"><img :src="icons[index]"></div>
                <div class="content">
                  <span class="year">{{item.year}}</span>
                  <h4 class="title">{{item.schoolname}}</h4>
                  <p class="description">
                    {{item.description}}
                  </p>
                  <div class="icon"><span></span></div>
                </div>
              </div>
            </div>
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import Vue from 'vue'
  import 'vue-awesome/icons'
  import Icon from 'vue-awesome/components/Icon'
  import 'magnific-popup/dist/magnific-popup.css'
  Vue.component('icon', Icon)

  export default {
    components: {
      Icon
    },
    data(){
      return{
        education:[{"schoolname":"北京第十二中学","specialty":"N/A","year":"2008 - 2011","icon":"SchoolIcon1.png","gallery":"N/A","certificate":"N/A","description":"北京第十二中学，是北京市丰台区唯一的一所市级重点中学，是北京市首批十四所高中示范校之一。本人于2008年至2011年期间就读于此高中，品学端正，成绩优异。因身为非北京户口学生，无法在京高考，于是在高三加入了国际部，准备出国留学。"},{"schoolname":"克里斯蒂安斯塔德学院","specialty":"计算机科学与软件开发","year":"2011 - 2014","icon":"SchoolIcon2.png","gallery":"HKR.jpg","certificate":"Cer_HKR.jpg","description":"克里斯蒂安斯塔德大学成立于1977年，位于瑞典南部，它集高等教育与科学研究为一体，提供多个领域的教育研究机会，也从事应用技术的研究和开发。学校师资力量雄厚，校园人文学术气氛和谐友好。本人于2011年读于此学院，2014年以优异成绩顺利毕业，并被瑞典皇家理工学院录取。所学专业为计算机科学与软件开发。正是这段时间的学习使我对编程产生了浓厚的兴趣。 并决定读研深造且继续学习相关专业。","courses":[{"课程名称":"基础编程"},{"课程名称":"离散数学"},{"课程名称":"数字电子系统设计"},{"课程名称":"算法理论和数据结构"},{"课程名称":"软件工程"},{"课程名称":"面向对象编程"},{"课程名称":"计算机科学"},{"课程名称":"数据库技术"},{"课程名称":"网络开发与安全"},{"课程名称":"操作系统"},{"课程名称":"网络软件开发"}]},{"schoolname":"瑞典皇家理工学院","specialty":"媒体技术","year":"2014 - 2016","icon":"SchoolIcon3.png","gallery":"KTH.jpg","certificate":"Cer_KTH.jpg","description":"KTH 瑞典皇家理工学院是位于瑞典首都斯德哥尔摩的欧洲顶尖学府，世界百强名校之一。该校为瑞典国内规模最大、历史最悠久、国际化程度最高的理工院校，瑞典全国约三分之一的工程师都出自这所大学。本人于2014年就读于此学院，2016年以优异成绩顺利毕业并发表了毕业论文。 所学专业为媒体技术，主要包含打印技术，图像处理，人机交互，网络开发等媒体领域的编程技术。","courses":[{"课程名称":"媒体技术理论与方法"},{"课程名称":"图像处理与计算机视觉"},{"课程名称":"媒体生产"},{"课程名称":"人机多模式交互和界面"},{"课程名称":"语音技术"},{"课程名称":"图形艺术生产"},{"课程名称":"数字图像出版"},{"课程名称":"视频技术"},{"课程名称":"语音识别技术"},{"课程名称":"媒体可持续发展"},{"课程名称":"远程呈现技术"}]}],
        icons : [],
        gallery: [],
        certificate: []
      }
    },
    created(){
      for (let i = 0; i < this.education.length; i++) {
        if (this.education[i].Access != 0) {
          this.icons.push(require('../assets/images/'+this.education[i].icon))
          if(this.education[i].gallery=="N/A"){
            this.gallery.push("N/A")
          }else{
            this.gallery.push(require('../assets/images/'+this.education[i].gallery))
          }
          if(this.education[i].certificate=="N/A"){
            this.certificate.push("N/A")
          }else{
            this.certificate.push(require('../assets/images/'+this.education[i].certificate))
          }
        }
      }
    },
//    created () {
//      this.$http.get('/api/education.json').then(function(res){
//        var data = res.data
//        this.$set(this, 'education', res.body)
//        this.$set(this,'icons', this.education.icon)
//        if (!this.icons) this.icons = [];
//        if (!this.gallery) this.gallery = [];
//        if (!this.certificate) this.certificate = [];
//        for (let i = 0; i < this.education.length; i++) {
//          if (this.education[i].Access != 0) {
//            this.icons.push(require('../assets/images/'+this.education[i].icon))
//            if(this.education[i].gallery=="N/A"){
//              this.gallery.push("N/A")
//            }else{
//              this.gallery.push(require('../assets/images/'+this.education[i].gallery))
//            }
//            if(this.education[i].certificate=="N/A"){
//              this.certificate.push("N/A")
//            }else{
//              this.certificate.push(require('../assets/images/'+this.education[i].certificate))
//            }
//          }
//        }
//        //console.log(this.icons)
//        //console.log(this.gallery)
//        console.log(this.certificate)
//      },function(){
//        //alert('请求失败处理');   //失败处理
//      });
//    },
    methods:{
      checkCourses(data){
        var schoolID =data
        $("head").append("<style>.mfp-content{min-height:500px!important}.mfp-close{ outline:none!important; cursor:pointer!important }</style>")
        $.magnificPopup.open({
          items: {
            //src: '<div style="position: relative; background: #FFF; padding: 20px; width: auto; max-width: 500px; margin: 20px auto;" :v-if="false">查看 '+schoolname+' 证书</div>',
            src:'../Courses/'+schoolID,
            type: 'iframe'
          }
        });
      },
      checkCertificate(data){
        var imageSRC = data
        $("head").append("<style>.mfp-close{ outline:none!important; cursor:pointer!important }</style>")
        $.magnificPopup.open({
          items: {
            src: imageSRC,
            type: 'image',
            closeOnContentClick: true,
            closeBtnInside: true,
            fixedContentPos: true,
            mainClass: 'mfp-no-margins mfp-with-zoom',
            image: {
              verticalFit: true
            }
          }
        });
      }
    }
  }
</script>

<style scoped>
  .schools{
    max-height:600px;
  }
  .schools img{
    width:100%;
    height:auto;
  }
  .schoolgallery{
    padding:0;
  }

  .education{
    background-image:url("../assets/images/timeline-background.jpg");
    background-size: auto 100%;
    background-repeat: no-repeat;
    background-position: center
  }
  .portfolio-box {
    display: block;
    position: relative;
    margin: auto;
    overflow: hidden;
    max-width: 100%;
    max-height:500px
  }
  .portfolio-box.zoom-effect .portfolio-box-caption{
    background: rgba(0, 0, 0,.6);
  }
  .portfolio-box.zoom-effect img{
    -webkit-transition: 0.5s ease;
    transition: 0.5s ease;
  }
  .portfolio-box:hover.zoom-effect img{
    -webkit-transform:scale(1.1);
    /* Safari and Chrome */
    -moz-transform:scale(1.1);
    /* Firefox */
    -ms-transform:scale(1.1);
    /* IE 9 */
    -o-transform:scale(1.1);
    /* Opera */
    transform:scale(1.1);
  }
  .portfolio-box .portfolio-box-caption {
    display: block;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fff;
    -webkit-transition: all .35s;
    -moz-transition: all .35s;
    transition: all .35s;
  }
  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content {
    position: absolute;
    top: 50%;
    width: 100%;
    text-align: center;
    transform: translateY(-50%);
  }

  .school-detail, .school-specialty, .school-name {
    padding: 0 15px;
    text-transform: uppercase;
    font-weight: 600;
    letter-spacing: 2px;
    text-shadow: 2px 2px #111;
  }
  .school-specialty {
    font-size: 13px;
    color: #FF9E22;
    margin-bottom: 10px;
  }
  .school-name {
    font-size: 16px;
    margin-bottom: 3px;
  }
  .school-detail{
    transition: all 1s ease;
    opacity: 0;
    height: 0;
    overflow: hidden;
  }
  .school-detail ul li{
    margin: 20px 5px 0;
  }
  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .school-detail ul li svg{display: block;color: #FF9E22;background: transparent;transition-duration: 0.3s;text-shadow: none;}
  .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .school-detail ul li svg:hover{color: #fff; cursor:pointer}
  .portfolio-box:hover .portfolio-box-caption {opacity: 1;background: none;}
  .portfolio-box:hover .portfolio-box-caption .portfolio-box-caption-content .school-detail{opacity: 1;height: auto;}
  .portfolio-box:hover .portfolio-box-caption .portfolio-box-caption-content .school-specialty,
  .portfolio-box:hover .portfolio-box-caption .portfolio-box-caption-content .school-name{display: none;}
  @media(min-width:768px) {
    .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .school-specialty {font-size: 15px;}
    .portfolio-box .portfolio-box-caption .portfolio-box-caption-content .school-name {font-size: 19px;}
  }
  .list-inline{
    list-style: none;
  }
  .list-inline>li {
    display: inline-block;
    padding-right: 20px;
    padding-left: 20px;
  }
  .main-timeline{ position: relative; }
  .main-timeline:before,
  .main-timeline:after{
    content: "";
    display: block;
    width: 100%;
    clear: both;
  }
  .main-timeline:before{
    content: "";
    width: 5px;
    height: 100%;
    background: #302124;
    position: absolute;
    top: 0;
    left: 50%;
  }
  .main-timeline .timeline{
    width: 50%;
    float: left;
    position: relative;
    z-index: 1;
  }
  .main-timeline .timeline:before,
  .main-timeline .timeline:after{
    content: "";
    display: block;
    width: 100%;
    clear: both;
  }
  .main-timeline .timeline:first-child:before,
  .main-timeline .timeline:last-child:before{
    content: "";
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #000;
    border: 4px solid #FF9E22;
    position: absolute;
    top: 0;
    right: -15px;
    z-index: 1;
  }
  .main-timeline .timeline:last-child:before{
    top: auto;
    bottom: 0;
  }
  .main-timeline .timeline:last-child:nth-child(even):before{
    right: auto;
    left: -12px;
    bottom: -2px;
  }
  .main-timeline .timeline-content{
    text-align: center;
    margin-top: 8px;
    position: relative;
    transition: all 0.3s ease 0s;
  }
  .main-timeline .timeline-content:before{
    content: "";
    width: 100%;
    height: 5px;
    background: #FF9E22;
    position: absolute;
    top: 88px;
    left: 0;
    z-index: -1;
  }
  .main-timeline .circle{
    width: 180px;
    height: 180px;
    border-radius: 50%;
    float: left;
    margin-right: 25px;
    position: relative;
  }
  .main-timeline .circle:before{
    content: "";
    width: 26px;
    height: 30px;
    background: #FF9E22;
    margin: auto;
    position: absolute;
    top: 0;
    right: -33px;
    bottom: 0;
    z-index: -1;
    box-shadow: inset 7px 0 9px -7px #444;
  }
  .main-timeline .content{
    display: table;
    padding-right: 40px;
    position: relative;
  }
  .main-timeline .year{
    display: block;
    padding: 10px;
    margin: 10px 0 50px 0;
    background: #000;
    opacity: 0.6;
    border-radius: 7px;
    font-size: 25px;
    color: #fff;
  }
  .main-timeline .title{
    font-size: 25px;
    font-weight: bold;
    color: #FF9E22;
    margin-top: 0;
  }
  .main-timeline .description{
    font-size: 14px;
    color: #FFF;
    text-align: justify;
  }
  .main-timeline .icon{
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #000;
    border: 4px solid #FF9E22;
    position: absolute;
    top: 78px;
    right: -16px;
  }
  .main-timeline .icon:before{
    content: "";
    width: 15px;
    height: 25px;
    background: #FF9E22;
    margin: auto;
    position: absolute;
    top: -1px;
    left: -15px;
    bottom: 0;
    z-index: -1;
  }
  .main-timeline .icon span:before,
  .main-timeline .icon span:after{
    content: "";
    width: 21px;
    height: 25px;
    background: transparent;
    border-radius: 0 0 21px 0;
    margin: auto;
    position: absolute;
    top: -30px;
    left: -15px;
    bottom: 0;
    z-index: -1;
  }
  .main-timeline .icon span:after{
    border-radius: 0 21px 0 0;
    top: 0;
    left: -15px;
    bottom: -30px;
  }
  .main-timeline .timeline:nth-child(2n) .timeline-content,
  .main-timeline .timeline:nth-child(2n) .circle{
    float: right;
  }
  .main-timeline .timeline:nth-child(2n) .circle{
    margin: 0 0 0 25px;
  }
  .main-timeline .timeline:nth-child(2n) .circle:before{
    right: auto;
    left: -33px;
    box-shadow: -7px 0 9px -7px #444 inset;
  }
  .main-timeline .timeline:nth-child(2n) .circle span:before,
  .main-timeline .timeline:nth-child(2n) .circle span:after{
    right: auto;
    left: -33px;
    border-radius: 0 0 21px 0;
  }
  .main-timeline .timeline:nth-child(2n) .circle span:after{
    border-radius: 0 21px 0 0;
  }

  .circle img{
    width:100%;
    height:auto;
  }
  .main-timeline .timeline:nth-child(2n) .content{
    padding: 0 0 0 40px;
    margin-left: 2px;
  }
  .main-timeline .timeline:nth-child(2n) .icon{
    right: auto;
    left: -12px;
  }
  .main-timeline .timeline:nth-child(2n) .icon:before,
  .main-timeline .timeline:nth-child(2n) .icon span:before,
  .main-timeline .timeline:nth-child(2n) .icon span:after{
    left: auto;
    right: -15px;
  }
  .main-timeline .timeline:nth-child(2n) .icon span:before{
    border-radius: 0 0 0 21px;
  }
  .main-timeline .timeline:nth-child(2n) .icon span:after{
    border-radius: 21px 0 0 0;
  }
  .main-timeline .timeline:nth-child(2){
    margin-top: 180px;
  }
  .main-timeline .timeline:nth-child(odd){
    margin: -175px 0 0 0;
  }
  .main-timeline .timeline:nth-child(even){
    margin-bottom: 80px;
  }
  .main-timeline .timeline:first-child,
  .main-timeline .timeline:last-child:nth-child(even){
    margin: 0;
  }
  @media only screen and (max-width: 768px){
    .main-timeline:before{ left: 100%; }
    .main-timeline .timeline{
      width: 100%;
      float: none;
      margin-bottom: 20px !important;
    }
    .main-timeline .timeline:first-child:before,
    .main-timeline .timeline:last-child:before{
      left: auto !important;
      right: -15px !important;
    }
    .main-timeline .timeline:nth-child(2n) .circle{
      float: left;
      margin: 0 25px 0 0;
    }
    .main-timeline .timeline:nth-child(2n) .circle:before{
      right: -33px;
      left: auto;
      box-shadow: 7px 0 9px -7px #444 inset;
    }
    .main-timeline .timeline:nth-child(2n) .circle span:before,
    .main-timeline .timeline:nth-child(2n) .circle span:after{
      right: -33px;
      left: auto;
      border-radius: 0 0 0 21px;
    }
    .main-timeline .timeline:nth-child(2n) .circle span:after{
      border-radius: 21px 0 0 0;
    }
    .main-timeline .timeline:nth-child(2n) .content{
      padding: 0 40px 0 0;
      margin-left: 0;
    }
    .main-timeline .timeline:nth-child(2n) .icon{
      right: -14px;
      left: auto;
    }
    .main-timeline .timeline:nth-child(2n) .icon:before,
    .main-timeline .timeline:nth-child(2n) .icon span:before,
    .main-timeline .timeline:nth-child(2n) .icon span:after{
      left: -15px;
      right: auto;
    }
    .main-timeline .timeline:nth-child(2n) .icon span:before{
      border-radius: 0 0 21px 0;
    }
    .main-timeline .timeline:nth-child(2n) .icon span:after{
      border-radius: 0 21px 0 0;
    }
    .main-timeline .timeline:nth-child(2),
    .main-timeline .timeline:nth-child(odd),
    .main-timeline .timeline:nth-child(even){
      margin: 0;
    }
  }
  @media only screen and (max-width: 576px){
    .main-timeline:before{ left: 0; }
    .main-timeline .timeline:first-child:before,
    .main-timeline .timeline:last-child:before{
      left: -10px !important;
      right: auto !important;
    }
    .main-timeline .circle,
    .main-timeline .timeline:nth-child(2n) .circle{
      width: 130px;
      height: 130px;
      float: none;
      margin: 0 auto;
    }
    .main-timeline .timeline-content:before{
      width: 99.5%;
      top: 68px;
      left: 0.5%;
    }
    .main-timeline .circle:before,
    .main-timeline .icon{
      display: none;
    }
    .main-timeline .content,
    .main-timeline .timeline:nth-child(2n) .content{
      padding: 0 10px;
    }
    .main-timeline .year{
      margin-bottom: 15px;
    }
    .main-timeline .description{
      text-align: center;
    }
  }
</style>

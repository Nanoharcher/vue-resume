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
        education:[],
        icons : [],
        gallery: [],
        certificate: []
      }
    },
    created () {
      this.$http.get('/api/education').then(function(res){
        var data = res.data
        this.$set(this, 'education', res.body)
        this.$set(this,'icons', this.education.icon)
        if (!this.icons) this.icons = [];
        if (!this.gallery) this.gallery = [];
        if (!this.certificate) this.certificate = [];
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
        //console.log(this.icons)
        //console.log(this.gallery)
        console.log(this.certificate)
      },function(){
        //alert('请求失败处理');   //失败处理
      });
    },
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

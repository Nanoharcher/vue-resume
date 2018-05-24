<template>
  <div>
    <b-container fluid class="aboutme">
      <b-row class="basicinfo">
        <b-col lg="5" md="5" sm="5" cols="12" class="avatar">
          <b-row>
            <b-col class= "coffee" lg="12" md="12" sm="12" cols="12" v-show="tabletOnly"><img src="../assets/images/coffee.png"></b-col>
            <b-col lg="12" md="12" sm="12" cols="12"  id="gallery">
              <div id="pictures">
                <img src="../assets/images/img5.png" alt="" style="z-index: 4; top: 0px;" v-b-popover.hover="'你们以为我到处吃到处玩胖了？果断健身房走一波瘦下来。'" title="中国北京">
                <img src="../assets/images/img1.png" alt="" style="z-index: 5; top: 0px;" v-b-popover.hover="'这就是美术课本上那有名的维纳斯，机会难得合拍一张！'" title="法国巴黎">
                <img src="../assets/images/img2.png" alt="" style="z-index: 1; top: 0px;" v-b-popover.hover="'身后是巴黎圣母院，虽然不是基督教徒，不过还是请允许我祈祷一波，信仰圣光吧！'" title="法国巴黎">
                <img src="../assets/images/img3.png" alt="" style="z-index: 2; top: 0px;" v-b-popover.hover="'身在美丽的水之都，到处都是水，记得在这里吃了一盘意大利面居然花了10欧，而且味道不怎么样= ='" title="意大利威尼斯">
                <img src="../assets/images/img4.png" alt="" style="z-index: 3; top: 0px;" v-b-popover.hover="'这是我在瑞典研究生毕业后的第一次旅行，身后是凯旋门，必须离这么远才能把整个门拍到。'" title="法国巴黎">
              </div>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="6" md="7" sm="6" cols="12" class="historybook">
          <IntroductionComponent></IntroductionComponent>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  import {switchgellary} from '../assets/js/avatarGellary'
  import IntroductionComponent from './Introduction.vue'
  export default {
    name: 'AboutMe',
    created(){
      switchgellary();
      if(this.screenWidth<=768&&this.screenWidth>576){
        this.tabletOnly = true;
      }else{
        this.tabletOnly = false;
      }
    },
    data(){
      return{
        screenWidth: document.body.clientWidth,
        tabletOnly: false
      }
    },
    mounted () {
      window.onresize = () => {
        return (() => {
          window.screenWidth = document.body.clientWidth
          this.screenWidth = window.screenWidth
        })()
      }
    },
    watch: {
      screenWidth (val) {
        this.screenWidth = val
        if(this.screenWidth<=768&&this.screenWidth>576){
          this.tabletOnly = true;
        }else{
          this.tabletOnly = false;
        }
      }
    },
    components:{IntroductionComponent}
  }
</script>
<style scoped>

  .aboutme{
    background-color:transparent;
    padding-top:5%;
    padding-bottom:10%;
    background-image: url("../assets/images/background.jpg");
    background-position: 100% 100%;
    margin:0;
  }
  .basicinfo{
    margin:0;
    padding:0;
    min-height: 800px;
  }
  .avatar{
    margin:0;
    padding:0;
    background-color:transparent;
    text-align:left;
  }
  #gallery {
    position: relative;
    padding: 10%;
    /*top: 15%;*/
  }
  .coffee{
    padding:20%
  }
  .coffee img{
    width:100%;
    height:auto;
  }
  #pictures {
    position: relative;
  }
  #pictures img {
    position: absolute;
    top: 0;
    left: 0;
    cursor:pointer;
    width:100%;
    height:auto
  }
  .historybook{
    background-image: url(../assets/images/notebook.png);
    background-repeat:no-repeat;
    background-position: center;
    background-size: 100% 100%;
    padding:13% 8% 10% 8%;
    transform:rotate(15deg);
    -ms-transform:rotate(15deg);
    -moz-transform:rotate(15deg);
    -webkit-transform:rotate(15deg);
    -o-transform:rotate(15deg);
  }
  @media screen and (max-width: 2560px) {
    .basicinfo{
      min-height: 1200px;
    }
    .historybook{
      padding: 13% 8% 10% 8%;
    }
  }
  @media screen and (max-width: 1440px) {
    .basicinfo{
      min-height: 800px;
    }
  }
  @media screen and (max-width: 1024px) {
    .basicinfo{
      min-height: 600px;
    }
    .historybook{
      padding: 15% 10% 10% 10%;
    }
  }
  @media screen and (max-width: 768px) {
    .basicinfo{
      min-height: 750px;
    }
    .historybook{
      transform:rotate(0deg);
      -ms-transform:rotate(0deg);
      -moz-transform:rotate(0deg);
      -webkit-transform:rotate(0deg);
      -o-transform:rotate(0deg);
      padding: 20% 10% 15% 10%;
    }
  }
  @media screen and (max-width: 576px) {
    #gallery{
      min-height: 400px;
      top: 0px;
    }
    .historybook{
      padding: 33% 15% 30% 15%;
    }
    .basicinfo{
      min-height: 1200px;
    }
  }
  @media screen and (max-width: 375px) {
    #gallery{
      min-height: 300px;
      top: 0px;
    }
    .historybook{
      padding: 55% 15% 40% 15%;
    }
  }
</style>

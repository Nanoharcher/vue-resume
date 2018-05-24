<template>
  <div>
    <b-container fluid class="projectexperience">
      <b-row class="projectexpContent">
        <div class="index-items">
          <a class="index-link" :style="projectgallery[index]" :href="projecturls[index]" target="_blank" v-for="(item,index) in projectexperience" :key="item.id">
            <div class="index-link-content">
              <p class="index-link-title">{{projectexperience[index].projectname}}</p>
            </div>
          </a>
        </div>
      </b-row>
    </b-container>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        projectexperience:[],
        projectgallery:[],
        projecturls:[]
      }
    },
    created () {
      this.$http.get('/api/projectexperience').then(function(res){
        if (!this.projectgallery) this.projectgallery = []
        if (!this.projecturls) this.projecturls = []
        var data = res.data
        console.log(res.data)
        this.$set(this, 'projectexperience', data)
        for (let i = 0; i < this.projectexperience.length; i++) {
          if (this.projectexperience[i].Access != 0) {
            this.projectgallery.push({backgroundImage: 'url(' + require('../assets/images/'+this.projectexperience[i].projectimage) + ')'})
            this.projecturls.push(this.projectexperience[i].projecturl)
          }
        }
      },function(){
        //alert('请求失败处理');   //失败处理
      });
    }
  }
</script>

<style scoped>
  .projectexpContent {
    box-sizing: border-box;
    background: #000 url("../assets/images/project-background.jpg") center/cover no-repeat;
    position: relative;
  }
  @media screen and (max-height: 800px) {
    .projectexpContent {
      padding-top: 1vh; } }
  .projectexpContent::before, .projectexpContent::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
    transition: opacity .3s ease-in-out; }
  .projectexpContent .index-items {
    position: relative;
    z-index: 2;
    width:100%;
  }
  @keyframes index-link-active {
    0% {
      transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(0); }
    16% {
      transform: perspective(1600px) rotateX(5deg) rotateY(3deg) translateZ(32px); }
    100% {
      transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(65px); }
  }

  @keyframes index-link {
    0% {
      transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(65px);
    }
    100% {
      transform: perspective(1600px) rotateX(0) rotateY(0) translateZ(0); }
  }
  .index-link {
    display: block;
    box-sizing: border-box;
    padding: 2.4vh 3.1vh;
    width: calc(100% - 120px);
    height: 23.1vh;
    margin: 2.1vh auto;
    position: relative;
    color: #fff;
    text-decoration: none;
    background-size: cover;
    background-position: center;
    animation: index-link 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
    transition: -webkit-filter .3s ease-in-out;
    transition: filter .3s ease-in-out;
    transition: filter .3s ease-in-out, -webkit-filter .3s ease-in-out;
  }
  .index-link:hover {
    animation: index-link-active 0.7s cubic-bezier(0.315, 0.605, 0.375, 0.925) forwards;
  }
  .index-link-title {
    color: #6db9ff;
  }
  .index-link-content {
    position: absolute;
    left: 2.4vh;
    bottom: 1.85vh;
    background:#2e2f40;
    opacity: 0.8;
    padding: 20px;
  }
  .index-link-title {
    font-size: 3.89vh;
    font-weight: bolder;
    margin:0;
  }
  .index-link .icon-divide {
    font-size: 1.85vh;
  }
  @media screen and (max-width: 768px) {
    .index-link-title{
      font-size:14px;
    }
    .index-link{
      width:90%
    }
  }
</style>

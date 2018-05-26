<template>
  <div id="app">
    <b-container fluid class="topmenu" v-show="$route.meta.navShow">
      <div class="nav">
        <b-navbar type="dark" variant="navmobile" toggleable>
          <b-navbar-toggle target="nav_dropdown_collapse"></b-navbar-toggle>
          <b-navbar-brand class="navtitle" href="#">简历</b-navbar-brand>
          <b-collapse is-nav id="nav_dropdown_collapse">
            <b-navbar-nav>
              <b-nav-item class="nav_item" v-for="item in navigation" :key="item.id"><router-link :to="{name:item.router}">{{item.name}}</router-link></b-nav-item>
            </b-navbar-nav>
          </b-collapse>
        </b-navbar>
      </div>
    </b-container>
    <router-view class="routerview"></router-view>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data(){
        return{
          navigation:[{"name":"个人简介","router":"AboutMe"},{"name":"教育背景","router":"Education"},{"name":"工作经验","router":"WorkExperience"},{"name":"项目经验","router":"ProjectExperience"},{"name":"掌握技能","router":"Skills"}]
        }
    },
//    created () {
//      this.$http.get('/api/navigation.json').then(function(res){
//        var data = res.data
//        console.log(res.data)
//        this.$set(this, 'navigation', res.body)
//      },function(){
//        //alert('请求失败处理');   //失败处理
//      });
//    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
  }
  .topmenu{
    padding:0;
    margin:0;
    position: -webkit-sticky;
    position: -moz-sticky;
    position: -ms-sticky;
    position: sticky;
    top: 0;
    z-index:1000;
  }
  nav ul {
    list-style: none;
    padding-left: 0;
    margin-top: 0;
    margin-bottom: 0;
  }
  .nav {
    width: 100%;
    margin: 0 auto;
    background: #36373c;
    text-align:center;
  }
  .nav a{
    display: block;
    padding: 0 10px;
    line-height: inherit;
    cursor: pointer;
    text-decoration: none;
    color: #FFF;
    font-weight: bolder;
  }
  .navtitle{
    color:red!important;
    font-weight:bolder;
  }
  .nav_item{
    background:#36373c;
  }
  .nav_item:hover{
    text-decoration: none;
    background: #595959;
  }
  .bg-navmobile{
    background: #36373c;
    width:100%;
  }
</style>

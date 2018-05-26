<template>
  <div class="introContent">
    <h1>个人简介</h1>
    <div class="introduction">
      <p><label>姓名：<span>{{introduction.name}}</span></label><label>生日：<span>{{introduction.birthday}}</span></label></p>
      <p><label>电话：<span>{{introduction.telephone}}</span></label><label>邮箱：<span>{{introduction.email}}</span></label></p>
      <p><label>毕业院校：<span>{{introduction.college}}</span></label><label>学历：<span>{{introduction.education}}</span></label></p>
    </div>
    <div class="line"></div>
    <div class="introduction-detail">
      <h1>自我评价</h1>
      <p>
        {{introduction.summary}}
      </p>
    </div>
  </div>
</template>


<script>
  export default {
    data(){
        return{
            introduction:[]
        }
    },
    created () {
      this.$http.get('/api/introduction.json').then(function(res){
        var data = res.data
        console.log(res.data)
        this.$set(this, 'introduction', res.body)
      },function(){
        //alert('请求失败处理');   //失败处理
      });
    }
  }
</script>

<style scoped>
  .line{
    height:1px;
    width:100%;
    background:#00CCFF;
    overflow:hidden;
  }
  .introContent{
    text-align:center
  }
  .introContent h1, .introduction-detail h1{
    padding:10px;
    font-family: 'fantasy', sans-serif;
  }
  .introContent p, .introduction-detail p{
    margin:0;
    font-weight:400;
    text-align: left
    /*font-style:italic;*/
  }
  .introduction label{
    width:50%;
    float:left;
  }
  @media screen and (max-width: 2560px) {
    .introContent h1, .introduction-detail h1{
      font-size:36px;
    }
    .introContent p, .introduction-detail p{
      font-size:20px;
    }
  }
  @media screen and (max-width: 1440px) {
    .introContent h1, .introduction-detail h1{
      font-size:20px;
    }
    .introContent p, .introduction-detail p{
      font-size:14px;
    }
  }
  @media screen and (max-width: 1024px) {
    .introContent p, .introduction-detail p{
      font-size:12px;
    }
  }
  @media screen and (max-width: 768px) {
    .introContent h1, .introduction-detail h1{
      font-size:16px;
    }
    .introContent h1, .introduction-detail h1{
      padding:0;
    }
    .introduction label{
      width:100%;
    }
  }
  @media screen and (max-width: 576px) {
    .introduction label{
      width:100%;
    }
  }
  @media screen and (max-width: 375px) {

  }


</style>

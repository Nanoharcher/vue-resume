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
            introduction:{"name":"马旭骁","birthday":"1993年3月8日","telephone":"+86 13520496130","email":"2474451540@qq.com","college":"瑞典皇家理工学院","education":"硕士","summary":"本人于2011年高中毕业，随后到瑞典留学。本科三年就读于克里斯提安斯塔德学院，专业为计算机科学与软件开发。研究生两年就读于瑞典皇家理工学院，专业为媒体技术。 有着扎实的编程基础以及对媒体产业的深刻理解和创新思维。熟悉多平台的网络开发，用户体验以及人机交互的设计和开发，数据通信，图像声音以及视频的处理，数据库等相关技术。为人积极向上，热情， 且充满活力。对不了解的知识有着谦逊的学习态度，且有着超强的学习能力。有着很好的团队精神，跟所有同事的关系都超级好。 渴望在一个乐观向上的的环境里工作，同时提高自己的能力。回到国内后，由于对前端开发的热爱以及对其职业前景的期待，选择就职于联想集团，职位为前端开发工程师。主要工作内容为亚太地区联想官方网站的开发，维护，以及测试。官网面向多个地区，如香港、台湾、韩国、新加坡、马来西亚、泰国印度尼西亚等等，因为工作交流基本上使用英语，所以很开心的发现即使回到国内英语水平也并未退步。"}
        }
    },
//    created () {
//      this.$http.get('/api/introduction.json').then(function(res){
//        var data = res.data
//        console.log(res.data)
//        this.$set(this, 'introduction', res.body)
//      },function(){
//        //alert('请求失败处理');   //失败处理
//      });
//    }
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

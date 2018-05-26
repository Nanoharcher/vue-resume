<template>
  <div class="tablecontent">
    <b-table responsive :items="courses"></b-table>
  </div>
</template>
<script>
  export default {
    name: "Courses",
    data () {
      return {
        education:[{"schoolname":"北京第十二中学","specialty":"N/A","year":"2008 - 2011","icon":"SchoolIcon1.png","gallery":"N/A","certificate":"N/A","description":"北京第十二中学，是北京市丰台区唯一的一所市级重点中学，是北京市首批十四所高中示范校之一。本人于2008年至2011年期间就读于此高中，品学端正，成绩优异。因身为非北京户口学生，无法在京高考，于是在高三加入了国际部，准备出国留学。"},{"schoolname":"克里斯蒂安斯塔德学院","specialty":"计算机科学与软件开发","year":"2011 - 2014","icon":"SchoolIcon2.png","gallery":"HKR.jpg","certificate":"Cer_HKR.jpg","description":"克里斯蒂安斯塔德大学成立于1977年，位于瑞典南部，它集高等教育与科学研究为一体，提供多个领域的教育研究机会，也从事应用技术的研究和开发。学校师资力量雄厚，校园人文学术气氛和谐友好。本人于2011年读于此学院，2014年以优异成绩顺利毕业，并被瑞典皇家理工学院录取。所学专业为计算机科学与软件开发。正是这段时间的学习使我对编程产生了浓厚的兴趣。 并决定读研深造且继续学习相关专业。","courses":[{"课程名称":"基础编程"},{"课程名称":"离散数学"},{"课程名称":"数字电子系统设计"},{"课程名称":"算法理论和数据结构"},{"课程名称":"软件工程"},{"课程名称":"面向对象编程"},{"课程名称":"计算机科学"},{"课程名称":"数据库技术"},{"课程名称":"网络开发与安全"},{"课程名称":"操作系统"},{"课程名称":"网络软件开发"}]},{"schoolname":"瑞典皇家理工学院","specialty":"媒体技术","year":"2014 - 2016","icon":"SchoolIcon3.png","gallery":"KTH.jpg","certificate":"Cer_KTH.jpg","description":"KTH 瑞典皇家理工学院是位于瑞典首都斯德哥尔摩的欧洲顶尖学府，世界百强名校之一。该校为瑞典国内规模最大、历史最悠久、国际化程度最高的理工院校，瑞典全国约三分之一的工程师都出自这所大学。本人于2014年就读于此学院，2016年以优异成绩顺利毕业并发表了毕业论文。 所学专业为媒体技术，主要包含打印技术，图像处理，人机交互，网络开发等媒体领域的编程技术。","courses":[{"课程名称":"媒体技术理论与方法"},{"课程名称":"图像处理与计算机视觉"},{"课程名称":"媒体生产"},{"课程名称":"人机多模式交互和界面"},{"课程名称":"语音技术"},{"课程名称":"图形艺术生产"},{"课程名称":"数字图像出版"},{"课程名称":"视频技术"},{"课程名称":"语音识别技术"},{"课程名称":"媒体可持续发展"},{"课程名称":"远程呈现技术"}]}],
        courses:[]
      }
    },
    created(){
      if (!this.courses) this.courses = [];
      this.courses=this.education[this.$route.params.id].courses
      //console.log(this.education)
    }
//    beforeCreate () {
//      this.$http.get('/api/education').then(function(res){
//        var data = res.data
//        this.$set(this, 'education', res.body)
//        if (!this.courses) this.courses = [];
//        this.courses=this.education[this.$route.params.id].courses
//      },function(){
//        //alert('请求失败处理');   //失败处理
//      });
//    },
  }
</script>
<style scoped>
</style>

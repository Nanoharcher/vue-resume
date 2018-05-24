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
        education:[],
        courses:[]
      }
    },
    beforeCreate () {
      this.$http.get('/api/education').then(function(res){
        var data = res.data
        this.$set(this, 'education', res.body)
        if (!this.courses) this.courses = [];
        this.courses=this.education[this.$route.params.id].courses
      },function(){
        //alert('请求失败处理');   //失败处理
      });
    },
  }
</script>
<style scoped>
</style>

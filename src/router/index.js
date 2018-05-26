import Vue from 'vue'
import Router from 'vue-router'
import Resume from '@/components/Resume'
import AboutMe from '@/components/AboutMe'
import Education from '@/components/Education'
import Courses from '@/components/Courses'
import WorkExperience from '@/components/WorkExperience'
import ProjectExperience from '@/components/ProjectExperience'
import Skills from '@/components/Skills'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [
    {path:'/',redirect:'/AboutMe',meta:{ navShow: true}},
    {path: '/', name: 'AboutMe', component: AboutMe,meta:{ navShow: true}},
    {path:'/AboutMe',name:'AboutMe',component: AboutMe ,meta:{ navShow: true}},
    {path:'/Education',name:'Education',component: Education, meta:{ navShow: true}},
    {path:'/Courses/:id',name:'Courses',component: Courses, meta:{ navShow: false}},
    {path:'/WorkExperience',name:'WorkExperience',component: WorkExperience, meta:{ navShow: true}},
    {path:'/ProjectExperience',name:'ProjectExperience',component: ProjectExperience, meta:{ navShow: true}},
    {path:'/Skills',name:'Skills',component: Skills, meta:{ navShow: true}}
  ]
})

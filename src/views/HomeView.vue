<template>
  <div class="home">
      <Header msg="Header" /> 
    <!-- <About msg="About" /> -->
    <!-- <Service msg="Service" /> -->
    <!-- <Support msg="Support" /> -->
    <!-- <OurProjects msg="OurProjects" /> -->
    <!-- <VideoBusiness msg="VideoBusiness" /> --> 
    <!-- <WorkProcess title="P R O C E S S" subtitle="Work Process" /> -->
    <!-- <OurClients msg="OurClients" /> -->
    <!-- <Testimonials msg="Testimonials" /> -->
    <!-- <Partnership msg="Partnership" /> -->
    <!-- <RecentPosts msg="RecentPosts" /> -->
    <!-- <Footer msg="Footer" />  -->
    
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import About from '@/components/About.vue'
import OurClients from '@/components/OurClients.vue'
import OurProjects from '@/components/OurProjects.vue'
import Partnership from '@/components/Partnership.vue'
import RecentPosts from '@/components/RecentPosts.vue'
import Service from '@/components/Service.vue'
import Support from '@/components/Support.vue'
import Testimonials from '@/components/Testimonials.vue'
import VideoBusiness from '@/components/VideoBusiness.vue'
import WorkProcess from '@/components/WorkProcess.vue'
import Footer from '@/components/Footer.vue'


export default {
  name: 'HomeView',
  components: {
    Header,
    About,
    OurClients,
    Footer,
    OurProjects,
    Partnership,
    RecentPosts,
    Service,
    Support,
    Testimonials,
    VideoBusiness,
    WorkProcess
  }
}
</script>

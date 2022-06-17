<template>
  <div class="home">
    <Header msg="Header" />
    <Header msg="About" />
    <Footer msg="Service" />
    <Footer msg="Support" />
    <Footer msg="OurProjects" />
    <Footer msg="VideoBusiness" />
    <Footer msg="WorkProcess" />
    <Footer msg="OurClients" />
    <Footer msg="Testimonials" />
    <Footer msg="Partnership" />
    <Footer msg="RecentPosts" />
    <Footer msg="Footer" />
    
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

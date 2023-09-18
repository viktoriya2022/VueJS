<template>
  <div id="app">
    <!-- <IndexPage/> -->
    <!-- <BlogPage/> -->
    <!-- <BlogDetails/> -->
    <!-- <ProjectPage/> -->
    <ProjectDetails/>
  </div>
</template>

<script>
// import IndexPage from './assets/pages/IndexPage.vue';
// import BlogPage from './assets/pages/BlogPage.vue'
// import BlogDetails from './assets/pages/BlogDetails.vue';
// import ProjectPage from './assets/pages/ProjectPage.vue';
import ProjectDetails from './assets/pages/ProjectDetails.vue';

export default {
  name: 'App',
  components: {
    // IndexPage
    // BlogPage
    // BlogDetails
    // ProjectPage
    ProjectDetails
}
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
}
a {
    text-decoration: none;
    cursor: pointer;
}
.center {
    padding-left: calc(50% - 600px);
    padding-right: calc(50% - 600px);
}

</style>

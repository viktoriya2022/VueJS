<template>
  <div id="app">
    <!-- <ProjectPage/> -->
    <!-- <IndexPage/> -->
    <BlogPage/>
    <!-- <BlogDetails/> -->
  </div>
</template>

<script>
// import ProjectPage from './assets/pages/ProjectPage.vue';
// import IndexPage from './assets/pages/IndexPage.vue';
import BlogPage from './assets/pages/BlogPage.vue'
// import BlogDetails from './assets/pages/BlogDetails.vue';

export default {
  name: 'App',
  components: {
    BlogPage
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

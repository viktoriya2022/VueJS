<template>
    <div>
        <div class="blog-title">
        <img class="title-img" :src="img" alt="picture">
        <div class="blog-subtitle blog-img">
            <span class="article-heading">{{ title }}</span>
            <span class="project-subtitle">{{ subtitle }}</span>
        </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'TitleBlock',
    props: ['img', 'title', 'subtitle'],
    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.blog {
    margin-bottom: 252px;
}
.blog-title {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 200px;
    flex-direction: column;
    align-items: center;
    position: relative;
}
.blog-subtitle {
    width: 500px;
    height: 180px;
    background-color: white;
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
.title-img {
    width: 100%;
    max-width: 1900px;    
}
.article-heading {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 50px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 62.5px */
    letter-spacing: 1px;  
}
.project-subtitle {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: 0.22px;
}
.blog-img {
    border-radius: 43px 43px 0 0;
}
</style>
<template>
    <div>
        <HeaderBlock/>
        <TitleBlock
        :title="title"
        :subtitle="subtitle"
        :img="img"/>
        <FooterBlock/>
    </div>
</template>

<script>
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import TitleBlock from '@/components/TitleBlock.vue';

export default {
    name: 'ProjectPage',
    data() {
        return {
            title: 'Our Project',
            subtitle: 'Home / Project',
            img: '../images/Photo_16.png'
        }
    },
    methods: {
        getArticle(button) {
            this.articles = this.articles.filter(elem => elem.tag === button.tag);
        }
    },

    components: { 
        HeaderBlock, 
        FooterBlock, 
        TitleBlock }
};
</script>

<style lang="scss" scoped>


</style>
<template>
    <div>
        <HeaderBlock/>
        <main>
            <div class="blog-title">
                <img class="title-img" src="../images/Photo_13.png" alt="picture">
            </div>
            <div id="app" class="main_container center">
                <article_block>
                    <div class="details-block">
                <section class="article_block">
                    <div 
                        v-for="(item) in articles" 
                        :key="item.id">
                        <span class="article-heading">{{ item.title }}</span>
                        <img class="latest_post-img" :src="item.img" alt="picture">
                        <p class="project-subtitle">{{ item.text }}</p>
                    </div>
                </section>
                <div>
                    <h2>Tags</h2>
                    <div class="tags-block">
                        <button 
                            :key="button.id"
                            v-for="(button) in tags" 
                            @click="getArticle(button)" 
                            class="tag-button"> 
                            {{ button.title }}
                        </button>   
                    </div> 
                </div>
            </div>
                </article_block>
            </div>
        </main>
        <FooterBlock/>
    </div>
</template>

<script>
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';

export default {
    name: 'BlogDetails',
    data() {
        return {
            articles: [
                { id: 0, 
                tag: 'kitchen', 
                title: 'Lets Get Solution for Building Construction Work', 
                img: "../images/Photo_14.png", 
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecthumour, or randomised words which don t look even slightly believable.Embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary.'},
                { id: 1, 
                tag: 'bedroom', 
                title: 'Design sprints are great',
                img: '../images/Photo_15.png',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
                { id: 2, 
                tag: 'bedroom', 
                title: 'Design sprints are great',
                img: '../images/Photo_15.png',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
                { id: 3, 
                tag: 'kitchen', 
                title: 'Design sprints are great',
                img: '../images/Photo_14.png',
                text: 'Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
                { id: 4, 
                tag: 'kitchen_planning', 
                title: 'Design sprints are great',
                img: '../images/Photo_15.png',
                text: 'KITCHEN PLANNING Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
                { id: 5, 
                tag: 'kitchen_planning', 
                title: 'Design sprints are great',
                img: '../images/Photo_14.png',
                text: 'OTHER KITCHEN PLANNINGLorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.Contrary to popular belief.There are many variations of passages of Lorem Ipsum available, but the majority have suffered.'},
            ],
            tags: [
                {id: 0, tag: 'kitchen', title:'Kitchen'},
                {id: 1, tag: 'bedroom', title:'Bedroom'},
                {id: 2, tag: 'building', title:'Building'},
                {id: 3, tag: 'architecture', title:'Architecture'},
                {id: 4, tag: 'kitchen_planning', title:'Kitchen Planning'}
            ]
        }
    },
    methods: {
        getArticle(button) {
            this.articles = this.articles.filter(elem => elem.tag === button.tag);
        }
    },

    components: { HeaderBlock, FooterBlock }
};
</script>

<style lang="scss" scoped>

.blog-title {
    display: flex;
    justify-content: center;
    margin-top: 40px;
    margin-bottom: 200px;
    flex-direction: column;
    align-items: center;
    position: relative;
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

.article_block {
    max-width: 800px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.details-block {
    display: flex;
    gap: 52px;
    margin-bottom: 96px;
}

.tags-block {
    display: flex;
    flex-wrap: wrap;
    gap: 11px;
    margin-top: 24px;
}

.tag-button {
    display: flex;
    padding: 9px 30px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    border-radius: 10px;
    background: #F4F0EC;
}

.tag-button:hover {
    background: black;
    color:white
}

</style>
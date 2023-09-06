<template>
    <div>
        <HeaderBlock/>
        <TitleBlock
        :title="title"
        :subtitle="subtitle"
        :img="img"/>
        <section class="latest_post center">
            <div class="article-heading">Latest Post</div>
            <div class="latest_post-content">
                <img class="latest_post-img" src= "../images/Photo_12.png" alt="picture">
                <div class="blog-subcontent">
                    <p class="blog-text">Low Cost Latest Invented Interior Designing Ideas</p>
                    <div class="latest_post-info">
                        <p class="project-subtitle latest_post-par">
                            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.
                        </p>
                        <p class="project-subtitle latest_post-par">
                            Lorem Ipsum is not simply random text. It has roots in a piece of classica.
                        </p>
                        <div class="blog-date">
                                <h3 class="date-title">26 December, 2022  </h3>
                            <a href="#">
                                <svg class="blog_button" width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="35" cy="35.0001" r="35" fill="#F4F0EC"/>
                                    <path d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="blog center">
            <div class="article-heading">Articles & News</div>
 
            <div id="blog" class="blog-items center">
                    <div v-for="card in cards" :key="card.id" class="blog-item">
                        <div class="blog-content">
                            <div class="tag">
                                <h3 class="tag-text">{{ card.tag }}</h3>
                            </div>
                            <img class="blog-img" :src= "card.img" alt="picture">
                            <div class="blog-subcontent">
                                <div class="blog-text">{{ card.text }}</div>
                                <div class="blog-date">
                                        <h3 class="date-title">{{ card.date }} </h3>
                                    <a href="#">
                                        <svg class="blog_button" width="52" height="52" viewBox="0 0 70 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <circle cx="35" cy="35.0001" r="35" fill="#F4F0EC"/>
                                            <path d="M32 44.0001L40 35.0001L32 26.0001" stroke="#292F36" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            <div id="pages" class="pagination" >
                <div v-for="item in items" :key="item.id">
                    <div class="container">
                        <svg class="pages" width="53" height="52" viewBox="0 0 53 52" :fill=" item.color" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="26.5" cy="26" r="25.5" :stroke="item.stroke"/>
                        </svg>
                        <h2 class="pagination-number">{{item.number}}</h2>
                    </div>
                </div>
            </div>
        </section>
        <FooterBlock/>
    </div>
</template>

<script>
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import TitleBlock from '@/components/TitleBlock.vue';

export default {
    name: 'BlogPage',
    data: function() {
        return {
            title: 'Articles & News',
            subtitle: 'Home / Blog',
            img: "../images/Photo_11.png",
            cards: [
              { id: 1, 
                tag: 'Kitchen Design', 
                img: '../images/Photo_5.png', 
                text: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022',
             },
              { id: 2, 
                tag: 'Living Design', 
                img: '../images/Photo_6.png', 
                text: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December, 2022'
             },
              { id: 3, 
                tag: 'Interior Design', 
                img: '../images/Photo_7.png', 
                text: 'Best For Any Office & Business Interior Solution',
                date: '25 December, 2022'
             },
              { id: 4, 
                tag: 'Kitchen Design', 
                img: '../images/Photo_8.png', 
                text: 'Let’s Get Solution For Building Construction Work',
                date: '26 December, 2022',
             },
              { id: 5, 
                tag: 'Interior Design', 
                img: '../images/Photo_9.png', 
                text: 'Low Cost Latest Invented Interior Designing Ideas.',
                date: '22 December, 2022'
             },
              { id: 6, 
                tag: 'Interior Design', 
                img: '../images/Photo_10.png', 
                text: 'Best For Any Office & Business Interior Solution',
                date: '25 December, 2022'
             }
            ],
            items: [
                {id:1, number:'01', color: '#F4F0EC', stroke: 'none'}, 
                {id:2, number:'02', color: 'white', stroke:'#CDA274'}, 
                {id:3, number:'03', color: 'white',stroke:'#CDA274'}, 
                {id:4, number:'>', color: 'white',stroke:'#CDA274'}, 
            ]
        };
    },
    mounted() {
    },
    methods: {},
    components: { HeaderBlock, FooterBlock, TitleBlock }
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
 .latest_post-par {
    margin-bottom: 25px;
 }

.latest_post-img {
    border-radius: 50px;
}
.latest_post-info {
    display: contents;
}

.latest_post-content {
    margin-bottom: 156px;
}

.latest_post-content {
    display: flex;
    gap: 65px;
    padding: 22px;
    margin-top: 33px;
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

.blog-items {
    display: flex;
    justify-content: center;
    gap: 27px;
    flex-wrap: wrap;
    margin-top: 30px;
}


.blog-item {
    display: inline-flex;
    padding: 21px;
    align-items: flex-start;
    gap: 10px;
    border-radius: 62px;
    border: 1px solid #E7E7E7;
    box-shadow: 0px 10px 30px 0px rgba(255, 255, 255, 0.25);
    position: relative;
    width: 337px;
}

.blog-item:hover {
    background-color: #F4F0EC;
}

.blog-item:hover circle {
    fill: white;
}

.blog-img {
    border-radius: 43px 43px 0 0;
}

.blog-text {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
    margin-top: 21px;
    margin-bottom: 30px;
}

.date-title {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.blog-date {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.blog-button {
    height: 50px;
}

.item-colour {
    background-color: #F4F0EC;
}

.button-white {
    color: #FFF;
}

.tag {
    width: 124px;
    height: 41px;
    flex-shrink: 0;
    border-radius: 8px 8px 8px 0px;
    background: #FFF;
    position: absolute;
    display: flex;
    flex-direction: column;
    justify-content: center;
    top: 249px;
    left: 51px;
    align-items: center;
}

.tag-text {
    color: #4D5053;
    font-family: Jost;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 24px */
    letter-spacing: 0.16px;
    text-transform: capitalize;
}

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-top: 51px;
}

.container {
    position: relative;
}

.pages {
    position: absolute;
}

.pagination-number {
    position: absolute;
    top: 12px;
    right: -37px;
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
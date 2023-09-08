<template>
    <div>
        <HeaderBlock/>
        <TitleBlock
        :title="title"
        :subtitle="subtitle"
        :img="img"/>
        <div class="button-container">
            <div class="button-block center">
                <button 
                    v-for="(button) in tags" 
                    :key="button.id"
                    @click="getCards(button)">
                    {{ button.title }}
                </button>
            </div>
        </div>
        <div class="card-block center">
            <CardsBlock
            v-for="(card) in cards" :key="card.id"
            :cardTitle="cardTitle"
            :cardSubtitle="cardSubtitle"
            :cardImg="cardImg"
            :tag="tag"
            :card="card"
            />
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
        <FooterBlock/>
    </div>
</template>

<script>
import CardsBlock from '@/components/CardsBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import TitleBlock from '@/components/TitleBlock.vue';

export default {
    name: 'ProjectPage',
    data() {
        return {
            title: 'Our Project',
            subtitle: 'Home / Project',
            img: '../images/Photo_16.png',
            cards: [
                {
                    cardTitle: 'Minimal Bedroom',
                    cardSubtitle: 'Decor / Artchitecture',
                    cardImg: '../images/Photo_17.png',
                    tag: 'bedroom'
                },
                {
                    cardTitle: 'Minimal Bedroom',
                    cardSubtitle: 'Decor / Artchitecture',
                    cardImg: '../images/Photo_18.png',
                    tag: 'bathroom'
                },
                {
                    cardTitle: 'Classic Bedroom',
                    cardSubtitle: 'Decor / Artchitecture',
                    cardImg: '../images/Photo_19.png',
                    tag: 'kitchen'
                },
                {
                    cardTitle: 'Modern Bedroom',
                    cardSubtitle: 'Decor / Artchitecture',
                    cardImg: '../images/Photo_20.png',
                    tag: 'bedroom'
                },
                {
                    cardTitle: 'Minimal Bedroom table',
                    cardSubtitle: 'Decor / Artchitecture',
                    cardImg: '../images/Photo_21.png',
                    tag: 'bedroom'
                },
                {
                    cardTitle: 'System Table',
                    cardSubtitle: 'Decor / Artchitecture',
                    cardImg: '../images/Photo_22.png',
                    tag: 'bedroom'
                },
                {
                    cardTitle: 'Modern Bedroom',
                    cardSubtitle: 'Decor / Artchitecture',
                    cardImg: '../images/Photo_23.png',
                    tag: 'bedroom'
                },
                {
                    cardTitle: 'Modern Bedroom',
                    cardSubtitle: 'Decor / Artchitecture',
                    cardImg: '../images/Photo_24.png',
                    tag: 'bedroom'
                },
            ],
            tags: [
                {id: 0, tag: 'bathroom', title:'Bathroom'},
                {id: 1, tag: 'bedroom', title:'Bedroom'},
                {id: 2, tag: 'kitchen', title:'Kitchen'},
                {id: 3, tag: 'living_area', title:'Living area'}
            ], 
            items: [
                {id:1, number:'01', color: '#F4F0EC', stroke: 'none'}, 
                {id:2, number:'02', color: 'white', stroke:'#CDA274'}, 
                {id:3, number:'03', color: 'white',stroke:'#CDA274'}, 
                {id:4, number:'>', color: 'white',stroke:'#CDA274'}, 
            ]
        }
    },
    methods: {
        getCards(button) {
            this.card = this.card.filter(elem => elem.tag === button.tag);
        }
    },

    components: {
    HeaderBlock,
    FooterBlock,
    TitleBlock,
    CardsBlock
}
};
</script>

<style lang="scss" scoped>

.button-container {
    display: flex;
    justify-content: center;
}
.button-block {
    display: flex;
    width: 880px;
    justify-content: center;
    align-items: center;
    margin-bottom: 61px;
}

button {
    height: 75px;
    width: 220px;
    border-radius: 18px;
    background: #FFF;
    border-color: #CDA274;
    font-size: 18px;
}
button:hover {
    background: #CDA274;
    color: white
}
.card-block {
    display: grid;
    grid-template-columns: repeat(auto-fit, 550px);
    gap: 100px;
}
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-top: 51px;
}
.container {
    margin-top: 61px;
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
</style>
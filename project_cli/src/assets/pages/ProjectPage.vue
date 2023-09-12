<template>
    <div>
        <HeaderBlock/>
        <main>
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
            <PaginationBlock/>
        </main>
        <FooterBlock/>
    </div>
</template>

<script>
import CardsBlock from '@/components/CardsBlock.vue';
import FooterBlock from '@/components/FooterBlock.vue';
import HeaderBlock from '@/components/HeaderBlock.vue';
import PaginationBlock from '@/components/PaginationBlock.vue';
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
    CardsBlock,
    PaginationBlock
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

</style>
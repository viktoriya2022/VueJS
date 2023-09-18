<template>
    <div>
        <HeaderBlock/>
        <main>
            <TitleBlock
                :title="title"
                :subtitle="subtitle"
                :img="img"/>
            <div class="button__container">
                <div class="button__block center">
                    <button 
                        :key="button.id"
                        v-for="(button) in allTags" 
                        @click="getCards(button)"
                        class="button">
                        {{ button.title }}
                    </button>
                </div>
            </div>
            <div class="card-block center">
                <CardsBlock
                    v-for="(card) in allCards" 
                    :key="card.id"
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
import { mapGetters } from 'vuex';

export default {
    name: 'ProjectPage',
    computed: {
        ...mapGetters(['allCards', 'allTags', 'getCards']),
    },
    data() {
        return {
            title: 'Our Project',
            subtitle: 'Home / Project',
            img: '../images/Photo_16.png',
        }
    },
    // methods: {
    //     getCards(button) {
    //         this.cards = this.cards.filter((elem) => elem.tag === button.tag);
    //     }
    // },

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

.card-block {
    // display: grid;
    // grid-template-columns: repeat(auto-fit, 550px);
    gap: 100px;
    column-count: 2;
}

.button {
    height: 75px;
    width: 220px;
    border-radius: 18px;
    background: #FFF;
    border-color: #CDA274;
    font-size: 18px;
    
    &__container {
        display: flex;
        justify-content: center;
    }
    &__block {
        display: flex;
        width: 880px;
        justify-content: center;
        align-items: center;
        margin-bottom: 61px;
    }
}
button:hover {
    background: #CDA274;
    color: white
}

</style>
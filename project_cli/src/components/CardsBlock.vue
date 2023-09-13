<template>
        <div >
            <div class="card">
            <img :src="card.cardImg" alt="picture">
            <div class="card-block_text">
                <div class="subcontent">
                    <h3 class="title">{{ card.cardTitle }}</h3>
                    <h3 class="subtitle">{{ card.cardSubtitle }}</h3>
                </div>
                <a href="#">
                    <img src="../assets/images/project-button.svg" alt="">
                </a>
            </div>
        </div>
        </div>
</template>

<script>
export default {
    name: 'CardsBlock',
    props: ['card'],
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
.project {
    margin-top: 90px;
    margin-bottom: 100px;
    display: flex;
    flex-direction: column;
    gap: 56px;
}



// .card-block {
//     display: grid;
//     grid-template-columns: repeat(auto-fit, 550px);
//     gap: 100px;
// }

.card-block_text {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 24px;
}

.title {
    color: #292F36;
    font-family: DM Serif Display;
    font-size: 25px;
    font-style: normal;
    font-weight: 400;
    line-height: 125%; /* 31.25px */
    letter-spacing: 0.5px;
}

.subtitle {
    color: #4D5053;
    font-family: Jost;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 33px */
    letter-spacing: 0.22px;
}
</style>
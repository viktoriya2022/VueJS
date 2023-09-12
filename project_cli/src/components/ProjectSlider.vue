<template>
    <div>
        <div class="wrapper">
            <div class="slider"
            :style="{'margin-left': '-' + (100 * (currentSlideIndex)) + '%'}">
                <SliderItem
                    v-for="item in slider_data" 
                    :key="item.id"
                    :item_data="item"
                />
            </div>
            <div class="zoom">
                <img src="../../public/images/zoom_icon.png" alt="">
            </div>
        </div>
        <div class="button-block">
            <button @click="prevSlide"></button>
            <!-- <svg class="button" xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" 
                @click="prevSlide">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/>
            </svg> -->
            <button @click="nextSlide"></button>
            <!-- <svg class="button"  xmlns="http://www.w3.org/2000/svg" height="1.5em" viewBox="0 0 512 512" 
            @click="nextSlide">
                <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256z"/> -->
            <!-- </svg> -->
        </div>
        </div>
</template>

<script>
import SliderItem from './SliderItem.vue';

export default {
    name: 'ProjectSlider',
    props: {
        slider_data: {
            type: Array,
            default: () => []
        }
    },
    data() {
        return {
            currentSlideIndex: 0
        };
    },
    mounted() {
    },
    methods: {
        prevSlide() {
            if(this.currentSlideIndex > 0) {
            this.currentSlideIndex--
            }
        },
        nextSlide() {
            if(this.currentSlideIndex >= this.slider_data.length - 1) {
                this.currentSlideIndex = 0
            } else
            this.currentSlideIndex++
        }
    },
    components: { 
        SliderItem }
};
</script>

<style lang="scss" scoped>
.wrapper {
    max-width: 1300px;
    overflow: hidden;
    margin: 0 auto;
    position: relative;
}
.slider {
    display: flex;
    transition: all ease .3s;
}

.zoom {
    position: absolute;
    z-index: 5;
    top: 320px;
    left: 510px;
}
.zoom:hover {
    scale: 1.05;
}
.button-block {
    margin-top: 20px;
    display: flex;
    gap: 10px;
    justify-content: center;
}
button {
    width: 20px;
    height: 20px;
    border-radius: 50%;
}
// .button:hover {
//     background-color:rgb(252, 251, 245)
// }
// .button:active {
//     box-shadow: -1px 3px 14px -2px rgba(0,0,0,0.75);
// }
// button:hover {
//     background-color:rgb(223, 220, 202)
// }
button:active {
    box-shadow: 0px 0px 2px 0px rgba(0,0,0,0.75) inset;
}
</style>
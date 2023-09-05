<template>
    <div>
        <div>
            <p>Наименование: {{ product.name }}</p>
            <p>Цена: {{ formattedPrice }}</p>
            <p v-if=!product.available
                :class="$style.denied">
                Out of stock
            </p>
            <button v-else>
                Купить
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProductDetails',
    props: ['product'],

    data() {
        return {
            available: true,
            currency: '$',
        };
    },
    computed: {
        formattedPrice(){
            return this.currency + this.product.price
        }
    },
};
</script>

<style module>
    .denied {
        color: red
    }
</style>
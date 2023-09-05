<template>
    <div>
        <ProductDetails
        v-for="product in products" 
        :key="product.id"
        :product="product"/>
    </div>
</template>

<script>
import ProductDetails from './ProductDetails.vue';

export default {
    name: 'ProductList',
    data() {
        return {
            products: [
                {id: 1, name: 'product 1', price: 1000, available: false},
                {id: 2, name: 'product 2', price: 100, available: true},
                {id: 3, name: 'product 3', price: 5, available: false},
                {id: 4, name: 'product 4', price: 200, available: false},
            ]
        };
    },
    components: { ProductDetails }
};
</script>

<style lang="scss" scoped>

</style>
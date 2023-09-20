<template>
    <div>
        <div id="pages" class="pagination" >
            <div v-for="item in items" :key="item.id">
                <div class="container">
                    <a href="#"
                    class="pagination__pages">
                        <svg  width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#CDA274"/>
                    </svg>
                    <h2 class="pagination__number">{{item.number}}</h2>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    name: 'PaginationBlock',
    data: function() {
        return {
            items: [
                {id:1, number:'01'}, 
                {id:2, number:'02'}, 
                {id:3, number:'03'}, 
                {id:4, number:'>'}, 
            ]
        };
    },
};
</script>

<style lang="scss" scoped>
.container {
    position: relative;
}
.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 78px;
    margin-top: 51px;

    &__pages:hover circle{
        stroke: none;
        fill: #F4F0EC;
    }
    // &__pages: stroke{
    //     stroke-width: 1px;
    //     stroke: #CDA274;
    // }
     
    &__pages {
        position: absolute;
    }
    
    &__number {
        position: absolute;
        top: 14px;
        right: 18px;
        color: #292F36;
        font-family: Jost;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 150%;
        text-transform: capitalize;
    }
}

</style>
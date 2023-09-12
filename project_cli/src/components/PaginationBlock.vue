<template>
    <div>
        <div id="pages" class="pagination" >
            <div v-for="item in items" :key="item.id">
                <div class="container">
                    <svg class="pages" width="53" height="52" viewBox="0 0 53 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26.5" cy="26" r="25.5" stroke="#292F36"/>
                    </svg>
                    <h2 class="pagination-number">{{item.number}}</h2>
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

.pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 80px;
    margin-top: 51px;
}
.pages:hover circle{
    stroke: none;
    fill: #F4F0EC;
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

</style>
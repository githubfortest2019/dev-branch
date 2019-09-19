<template>
	<div class="module-tabs">
        <span class="tab">Отчеты</span>
        <span class="tab">Мероприятия</span>
        <span class="active">Консолидация</span>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                
            }
        }
    }
</script>

<style scoped lang="less">
    @import '../styles.less';
    
    .module-tabs {
        display: flex;
        flex-flow: row nowrap;
        background-color: @color-grey-5;
        height: @header-height;

        span {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 20px;
            cursor: pointer;

            &.active {
                background-color: @color-grey-6;
            }
        }
    }
</style>
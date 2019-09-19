<template>
	<div class="module-wrapper">
        <ModuleTabs />
        <Consolidation />
    </div>
</template>

<script>
    import ModuleTabs from '@/components/ModuleTabs.vue'
    import Consolidation from '@/components/Consolidation.vue'

    export default {
        components: {
            ModuleTabs,
            Consolidation
        }
    }
</script>

<style scoped lang="less">
    @import '../styles.less';
    
    .module-wrapper {
        width: @module-wrapper-width;
    } 
</style>
<template>
    <div id="app">
        <Header />
        <main class="wrapper">
            <ul>
                <li data-toggle="modal" data-target="#testModal">1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </main>
        <!-- <div style="display: flex; flex-flow: row nowrap; justify-content: center;" class="color">
            <div style="width: 4vh; height: 4vh; background-color: #333333">333333</div>
            <div style="width: 4vh; height: 4vh; background-color: #4D4D4D">4D4D4D</div>
            <div style="width: 4vh; height: 4vh; background-color: #6f6f6f">6f6f6f</div>
            <div style="width: 4vh; height: 4vh; background-color: #b4b4b4">b4b4b4</div>
            <div style="width: 4vh; height: 4vh; background-color: #E4E4E4">E4E4E4</div>
            <div style="width: 4vh; height: 4vh; background-color: #f8f8f8">f8f8f8</div>
        </div> -->



        <div class="modal fade" id="testModal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h4 class="modal-title">Default Modal</h4>
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">×</span>
                        </button>
                    </div>
                    <div class="modal-body">
                        <p>One fine body…</p>
                    </div>
                    <div class="modal-footer justify-content-between">
                        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
                <!-- /.modal-content -->
            </div>
            <!-- /.modal-dialog -->
        </div>



    </div>
</template>

<script>
    import Header from '@/components/Header.vue'

    export default {
        components: {
            Header
        }
    }
</script>

<style lang="less">
    @import 'styles.less';

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    ::-webkit-scrollbar {
        width: 15px;
    }

    ::-webkit-scrollbar-track {
        background-color: @color-grey-6;
    }

    ::-webkit-scrollbar-thumb {
        background-color: @color-grey-4;
        border-radius: 10px;
        border: 3px solid @color-grey-6;
    }

    .wrapper {
        display: flex;       
    }
</style>
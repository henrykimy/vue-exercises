<template>
    <h1>Mount 됐습니다. <!-- {{ message }} --></h1>
    <!-- <button ref="mntCompBtn" @click="message = '자식컴포넌트 내용이 변경되었습니다.'">자식 컴포넌트 변경</button> -->
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'OptionsMountingComp',

    data() {
        return {
            // beforeUpdate / updated() 부모 컴포넌트에서 보여주기 용
            // message: '자식 컴포넌트입니다.'
        }
    },

    /** 셋업 훅 */
    setup() {
        console.log('OptionsMountingComp setup()');
    },

    /** 비포크리에이트 훅 */
    beforeCreate() {
        console.log('OptionsMountingComp beforeCreate()');
    },

    /** 크리에이티드 */
    created() {
        console.log('OptionsMountingComp created()');
    },

    /** 비포마운트 */
    beforeMount() {
        console.log('OptionsMountingComp beforeMount()');
    },

    /** 마운티드 */
    mounted() {
        console.log('OptionsMountingComp mounted()');
    },

    /** 6. 비포언마운티드 */
    beforeUnmount() {
        // 이 컴포넌트가 DOM에서 제거되기 시작될때 실행되는 Hook
        // 아직 DOM에 있는 노드 참조 가능
        // Vue 2.X beforeDestroy()
        console.log('OptionsMountingComp DOM에서 제거 전!');
        console.log(this.$refs.mntCompBtn);
    },

    /** 7. 언마운티드 */
    unmounted() {
        // 이 컴포넌트가 DOM에서 제거가 완료되고 난 이후
        // DOM에서 이전에 있었던 노드 참조 불가
        // Vue 2.X destroyed()
        console.log('OptionsMountingComp 에서 제거 완료!');
        console.log(this.$refs.mntCompBtn);
    }
})
</script>
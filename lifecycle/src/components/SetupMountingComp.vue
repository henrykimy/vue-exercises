<template>
    <h1>Mount 됐습니다. {{ message }}</h1>
    <button ref="mntCompBtn" @click="message = '자식컴포넌트 내용이 변경되었습니다.'">자식 컴포넌트 변경</button>
</template>

<script setup lang="ts">
import { 
    onBeforeMount, 
    onBeforeUnmount, 
    onMounted, 
    onUnmounted, 
    ref } from 'vue';

const message = ref('자식 컴포넌트입니다.');

/** 0. 셋업 훅 */
console.log('setup()');
console.log('beforeCreate()');
console.log('created()');

/** 1. 온비포마운트 */
onBeforeMount(() => {
    console.log('LifecycleHookView DOM에 추가 완료!');
});

/** 2. 마운티드 */
onMounted(() => {
    console.log('LifecycleHookView DOM에 추가완료 그 이후...!');
});

/** 6. 비포언마운티드 */
onBeforeUnmount(() => {
    // 이 컴포넌트가 DOM에서 제거되기 시작될때 실행되는 Hook
    // 아직 DOM에 있는 노드 참조 가능
    // Vue 2.X beforeDestroy()
    console.log('OptionsMountingComp DOM에서 제거 전!');
}),

/** 7. 언마운티드 */
onUnmounted(() => {
    // 이 컴포넌트가 DOM에서 제거가 완료되고 난 이후
    // DOM에서 이전에 있었던 노드 참조 불가
    // Vue 2.X destroyed()
    console.log('OptionsMountingComp 에서 제거 완료!');
});
</script>
<template>
    <h1>Options API</h1>
    <h1 ref="heading">개발자 툴을 열어서 console.log()를 확인하세요</h1>
    <!-- <h2>메세지 : {{ message }} </h2> -->
    <br />
    <br />
    <br />
    <br />
    <button @click="mount = !mount">Mount / UnMount</button>
    <!-- <h1>Mount 됐습니다</h1> -->
    <MountingComp ref="mntComp" v-if="mount"/>
</template>

<script setup lang="ts">
/** 뷰 기능 임포트 */
import { 
    onBeforeMount,
    onMounted,
    onBeforeUpdate,
    onUpdated,
    ref } from 'vue';

/** 현재 뷰에서 사용할 컴포넌트 임포트 */
import MountingComp from '../components/SetupMountingComp.vue';

/** 데이터 */
const mount = ref(false);
// const message = ref('안녕하세요.');

/** 0. 셋업 훅 */
console.log('setup()');
console.log('beforeCreate()');
console.log('created()');

// 뷰 Composition API 기능 중에 하나이기 때문에 import 해줘야 한다;

/** 1. 온비포마운트 */
onBeforeMount(() => {
    console.log('LifecycleHookView DOM에 추가 완료!');
});

/** 2. 마운티드 */
onMounted(() => {
    console.log('LifecycleHookView DOM에 추가완료 그 이후...!');
});

/** 3. 비포업데이트 */
onBeforeUpdate(() => {
    console.log('******* 업데이트 시작 *******');
    console.log('LifecycleHookView 컴포넌트에 변경 땅!');
});

/** 4. 업데이티드 */
onUpdated(() => {
    console.log('LifecycleHookView 컴포넌트에 변경 완료! 그 이후!');
});
</script>
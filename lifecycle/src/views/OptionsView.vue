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

<script lang="ts">

// google vue lifecycle definition 

/**
 * yarn create vite
 */



/** 뷰 기능 임포트 */
import { defineComponent } from 'vue';

/** 현재 뷰에서 사용할 컴포넌트 임포트 */
import MountingComp from '../components/OptionsMountingComp.vue';

/** TypeScript 호환을 위해서 defineComponent 사용 */
export default defineComponent({
    /** 컴포넌트 명 */
    name: 'LifecycleHookView',



    /** 현재 컴포넌트에서 사용할 다른 컴포넌트 */
    components: {MountingComp},


    /**
     * Lifecycle Hooks
     * 
     */

    /** 0. 셋업 훅 */
    setup() {
        // Composition API 부터 사용 가능함 Vue 3.X
        // Lifecycle 시작 전 딱 한 번 실행됨
        console.log('LifecycleHookView 초기화! 옵션들 셋팅!');
    },

    /** 1. 비포크리에이트 훅 */
    beforeCreate() {
        // 컴포넌트 인스턴스의 생성시작 시점
        // 아직까지는 컴포넌트 내부 데이터, 로직(computed 등) 은 준비된 상태가 아님 
        // 좋은 예 내부 로직에 피해가 가지 않도록 외부 로직을 임포트 할 때 좋음
        console.log('LifecycleHookView 생성');
        // this.alertHello();
    },

    /** 2. 크리에이티드 */
    created() {
        // 컴포넌트 인스턴스 생성완료 시점
        // 컴포넌트 내부 데이터, 로직(computed, watchers, methods...) 준비 완료
        // 아직 DOM에 추가되기 이전
        // 외부 로직을 임포트 하고 나서 내부적을 로직을 추가로 실행할 경우
        console.log('LifecycleHookView 생성완료 하지만 아직 DOM에 추가되기 이전!');
        // this.alertHello();
    },

    // 메소드
    // methods: {
    //     alertHello() {
    //         alert('Hello');
    //     }
    // },

    /** 3. 비포마운트 */
    beforeMount() {
        // DOM에 추가할 노드 컴파일 -> 컴파일 완료 -> DOM에 추가 직전 시점까지
        // alert('beforeMount');
        console.log('LifecycleHookView DOM에 추가 완료!');
        console.log(this.$refs.heading); //=> undefined
    },

    /** 4. 마운티드 */
    mounted() {
        // 렌더링 완료 -> DOM에 추가 완료 -> 그 이후
        // DOM에 추가된 컴포넌트의 렝더링 된 노드 참조 가능
        // DOM에 추가된 컴포넌트의 노드에 대한 후속 로직 처리할 수 있음
        console.log('LifecycleHookView DOM에 추가완료 그 이후...!');
        // console.log(this.$refs.heading);
    },

    /** h1 태그 다른 컴포넌트로 옮김 */

        /** 데이터 */
        data() {
        return {
            mount: false,
            // message: '안녕하세요.'
        }
    },

    /** 7. 비포업데이트 */
    beforeUpdate() {
        // <template>... 여기에 있는 내용이 변경될 경우 </template>
        // DOM에 있는 내용을 다시 렌더링 시작!
        // 업데이트 요이땅! 하면 시작되는 Hook
        // 컴포넌트 데이터에 대한 가공/변경 가능
        console.log('******* 업데이트 시작 *******');
        console.log('LifecycleHookView 컴포넌트에 변경 땅!');

        // this.message = '안녕!';
    },
    
    /** 8. 업데이티드 */
    updated() {
        // DOM업데이트 완료 상태
        // 렌더링 완료 그 이후
        // 이 Hook에서는 절대로 컴포넌트 종속된 데이터 변경을 하지 말하야 함 -> 업데이트가 한 번 더 실행됨
        // 자식 컴포넌트에는 해당이 안됨 
        console.log('LifecycleHookView 컴포넌트에 변경 완료! 그 이후!');
        
        // this.message = '안녕!';
    }


    /**
     * DEVTOOLS SIMULATION
     */

     /**
      * OPTIONS API 복붙 -> Script Setup 방식으로 다시
      */
});
</script>
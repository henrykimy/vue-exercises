<template>
  <SiteNavigation />
  <main>
    <RouterView />
  </main>
</template>

<script setup lang="ts">
import SiteNavigation from './components/SiteNavigation.vue';
import { RouterView } from 'vue-router';
</script>
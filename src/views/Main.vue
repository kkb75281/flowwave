<template lang="pug">
br

Logo(@click="router.push('/')")

main
	router-view
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import Logo from '@/components/Logo.vue';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less"></style>
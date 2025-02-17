<template lang="pug">
Header

main#main
	router-view
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

import Header from '@/components/Header.vue';

const router = useRouter();
const route = useRoute();
</script>

<style scoped lang="less">

</style>
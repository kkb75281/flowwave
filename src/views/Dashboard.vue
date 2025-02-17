<template lang="pug">
.wrap

Upload
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import Upload from '@/components/Upload.vue';

let router = useRouter();
let route = useRoute();
</script>

<style lang="less" scoped>
.wrap {
	max-width: 600px;
	margin: 0 auto;
}
</style>
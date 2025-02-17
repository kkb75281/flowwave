<template lang="pug">
#upload-wrap(:class="{'show': showUpload}")
	.header 
		svg.arrow(@click="cancelUpload")
			use(xlink:href="@/assets/icon/material-icon.svg#icon-arrow-back")
		span New Record

</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

let router = useRouter();
let route = useRoute();

let cancelUpload = () => {
	
}
</script>

<style lang="less" scoped>
#upload-wrap {
	position: fixed;
	left: 0;
	top: 0;
	width: 100vw;
	height: 100vh;
	background-color: #fff;
	z-index: 10;
}

.header {
	position: relative;
	text-align: center;
	padding: 1rem 20px;

	.arrow {
		position: absolute;
		left: 1rem;
		top: 1rem;
		width: 1.2rem;
		height: 1.2rem;
		fill: #000;
	}
}
</style>
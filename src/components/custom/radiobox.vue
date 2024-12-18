<template lang="pug">
#custom-radiobox
	input#radiobox(v-model="radiobox" type="radio" hidden)
	label.radiobox-wrap(for="radiobox" :class="{ 'active': radiobox }")
		span.radiobox-button(v-if="radiobox")
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

let radiobox = ref(false);

watch(radiobox, (newValue) => {
	console.log('Radiobox value changed:', newValue);
});
</script>

<style lang="less" scoped>
.radiobox-wrap {
	position: relative;
	width: 24px;
	height: 24px;
	border-radius: 8px;
	border: 1px solid var(--black-color-100);
	cursor: pointer;
}
.radiobox-button {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 20px;
	height: 20px;
	border-radius: 6px;
	background-color: var(--primary-color);
}
</style>
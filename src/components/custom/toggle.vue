<template lang="pug">
#custom-toggle
	input#toggle(v-model="toggle" type="checkbox" hidden)
	label.toggle-wrap(for="toggle" :class="{ 'active': toggle }")
		span.toggle-button
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

let toggle = ref(false);

watch(toggle, (newValue) => {
	console.log('Toggle value changed:', newValue);
});
</script>

<style lang="less" scoped>
.toggle-wrap {
	position: relative;
	width: 4rem;
	padding: 0.8rem;
	// background-color: var(--primary-color-100);
	border: 1px solid var(--black-color-100);
	border-radius: 20px;
	transition: all .3s;
	cursor: pointer;

	&.active {
		// background-color: #BBC6F9;
		background-color: var(--primary-color-100);

		.toggle-button {
			left: calc(100% - 2px - 1.4rem);
			background-color: var(--primary-color);
		}
	}
}

.toggle-button {
	position: absolute;
	top: 50%;
	left: 2px;
	transform: translateY(-50%);
	border-radius: 50%;
	width: 1.4rem;
	height: 1.4rem;
	background-color: #BBC5CB;
	transition: all .3s;
}
</style>
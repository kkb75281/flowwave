<template lang="pug">
#custom-select
	.select-wrap(@click="toggleOption = !toggleOption")
		span {{ selectedOtion }}
		svg.arrow
			use(xlink:href="@/assets/icon/material-icon.svg#icon-arrow-down")
	.option-wrap(v-if="toggleOption")
		.option(v-for="option in options" @click="selectedOtion=option.option; emit('update:modelValue', option.value); toggleOption=false") {{ option.option }}
</template>

<script setup lang="ts">
import { ref } from 'vue';

let emit = defineEmits(['update:modelValue']);
let props = defineProps(['modelValue', 'options', 'firstValue']);
let selectedOtion = props.options[0].option;

let toggleOption = ref(false);
</script>

<style lang="less" scoped>
#custom-select {
	position: relative;
	font-size: 0.8rem;

	.select-wrap {
		position: relative;
		width: 100%;
		padding: 0.5rem 0.8rem;
		border-radius: 8px;
		border: 1px solid var(--black-color-100);
		cursor: pointer;

		.arrow {
			position: absolute;
			top: 50%;
			right: 0.5rem;
			transform: translateY(-50%);
			width: 24px;
			height: 24px;
			fill: var(--black-color-400);
		}
	}

	.option-wrap {
		position: absolute;
		top: 100%;
		left: 0;
		width: 100%;
		margin-top: 4px;
		border-radius: 8px;
		box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
		background-color: #fff;
		overflow: hidden;
		z-index: 1;

		.option {
			padding: 0.5rem 0.8rem;
			cursor: pointer;

			&:hover {
				background-color: var(--primary-color-100);
			}
		}
	}

	// select {
	// 	-webkit-appearance: none;
	// 	-moz-appearance: none;
	// 	appearance: none;
	// }
}
</style>
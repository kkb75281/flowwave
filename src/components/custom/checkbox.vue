<template lang="pug">
#custom-checkbox
	input#checkbox(v-model="checkbox" type="checkbox" hidden)
	label.checkbox-wrap(for="checkbox" :class="{ 'active': checkbox }")
		span.checkbox-button(v-if="checkbox")
			svg.check
				use(xlink:href="@/assets/icon/material-icon.svg#icon-check")
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

let checkbox = ref(false);

watch(checkbox, (newValue) => {
	console.log('Checkbox value changed:', newValue);
});
</script>

<style lang="less" scoped>
.checkbox-wrap {
	position: relative;
	width: 24px;
	height: 24px;
	border-radius: 8px;
	border: 1px solid var(--black-color-100);
	cursor: pointer;
}
.checkbox-button {
	position: absolute;
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	width: 20px;
	height: 20px;
	border-radius: 6px;
	background-color: var(--primary-color);
}
.check {
	position: absolute;
	width: 20px;
	height: 20px;
	fill: #fff;
}
</style>
<template lang="pug">
//- #custom-checkbox
label.custom-checkbox(for="checkbox")
	input#checkbox(:checked='props.modelValue' @input.stop="e=>{$emit('update:modelValue', e.target.checked)}" :disabled="props.disabled" type="checkbox" hidden)
	.checkbox-wrap
		span.checkbox-button(v-if="props.modelValue")
			svg.check
				use(xlink:href="@/assets/icon/material-icon.svg#icon-check")

	.checkbox-label
		slot
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';

let emit = defineEmits(['update:modelValue']);
let props = defineProps(['modelValue', 'disabled', 'firstValue']);

let checkbox = ref(false);

watch(checkbox, (newValue) => {
	console.log('Checkbox value changed:', newValue);
});
</script>

<style lang="less" scoped>
.custom-checkbox {
	display: flex;
	align-items: center;
	gap: 8px;
	cursor: pointer;
}
.checkbox-wrap {
	position: relative;
	width: 24px;
	height: 24px;
	border-radius: 8px;
	border: 1px solid var(--black-color-100);
}
.checkbox-label {
	user-select: none;
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
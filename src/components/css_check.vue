<template lang="pug">
section#color
	h1 :root

	.color-box-wrap
		.color-box(style="background-color:var(--primary-color)")
		.color-box(style="background-color:var(--danger-color)")
		.color-box(style="background-color:var(--gray-color)")
		.color-box(style="background-color:var(--black-color)")

	p(style="color:var(--primary-color)") --primary-color
	p(style="color:var(--danger-color)") --danger-color
	p(style="color:var(--gray-color)") --gray-color
	p(style="color:var(--black-color)") --black-color

	.color-box-wrap
		.color-box(style="background-color:var(--black-color-100)")
		.color-box(style="background-color:var(--black-color-200)")
		.color-box(style="background-color:var(--black-color-300)")
		.color-box(style="background-color:var(--black-color-400)")
		.color-box(style="background-color:var(--black-color-500)")

	p(style="color:var(--black-color-100)") --black-color-100
	p(style="color:var(--black-color-200)") --black-color-200
	p(style="color:var(--black-color-300)") --black-color-300
	p(style="color:var(--black-color-400)") --black-color-400
	p(style="color:var(--black-color-500)") --black-color-500

br

section#custom
	h1 Custom

	br

	.input-wrap
		label Text
		input(type="text" placeholder="text")
	
	br

	.input-wrap
		label Email
		input(type="email" pattern="[a-zA-Z0-9]+[@][a-zA-Z0-9]+[.]+[a-zA-Z]+[.]*[a-zA-Z]*" placeholder="email")

	br

	.input-wrap
		label Password
		Password

	br

	.input-wrap
		label Number
		input(type="number" placeholder="number")

	br

	.input-wrap.flex
		label Toggle
		Toggle

	br

	.input-wrap.flex
		Checkbox
		label Checkbox

	br

	.input-wrap.flex
		Radiobox
		label Radiobox

	br

	.input-wrap
		label Select
		Select(v-model="selectValue" :options="[{option: '1', value: 1}, {option: '2', value: 2}]")

br

section#button
	h1 Button

	br

	.button-wrap
		button.btn.outline.btn-primary Primary
		button.btn.outline.btn-primary(disabled) Primary
		button.btn.btn-primary Primary
		button.btn.btn-primary(disabled) Primary

	br

	.button-wrap
		button.btn.outline.btn-danger Danger
		button.btn.outline.btn-danger(disabled) Danger
		button.btn.btn-danger Danger
		button.btn.btn-danger(disabled) Danger

	br

	//- .button-wrap
		button.btn.outline.btn-gray Gray
		button.btn.btn-gray Gray

</template>

<script setup lang="ts">
import { ref } from 'vue';

import Toggle from '@/components/custom/toggle.vue';
import Checkbox from '@/components/custom/checkbox.vue';
import Radiobox from '@/components/custom/radiobox.vue';
import Password from '@/components/custom/password.vue';
import Select from '@/components/custom/select.vue';

let selectValue = ref(1);
</script>

<style lang="less" scoped>
section {
	padding: 0 20px;
}
.color-box {
	width: 100px;
	height: 100px;
	margin: 10px;
	display: inline-block;
}
</style>
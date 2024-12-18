<template lang="pug">
#custom-password
	input#password(:type='showPassword ? "text" : "password"' type="password" placeholder="password")
	svg.lock
		use(xlink:href="@/assets/icon/material-icon.svg#icon-lock")
	svg.eye(@click="showPassword = !showPassword")
		template(v-if="showPassword")
			use(xlink:href="@/assets/icon/material-icon.svg#icon-visibility")
		template(v-else)
			use(xlink:href="@/assets/icon/material-icon.svg#icon-visibility-off")
</template>

<script setup lang="ts">
import { ref } from 'vue';

let showPassword = ref(false);
</script>

<style lang="less" scoped>
#custom-password {
	position: relative;

	input {
		padding-left: 1.8rem;
		padding-right: 1.8rem;
	}
	.lock {
		position: absolute;
		top: 50%;
		left: 0.5rem;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;
		fill: var(--black-color-400);
	}
	.eye {
		position: absolute;
		top: 50%;
		right: 0.5rem;
		transform: translateY(-50%);
		width: 20px;
		height: 20px;
		fill: var(--black-color-400);
		cursor: pointer;
	}
}
</style>
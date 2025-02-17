<template lang="pug">
header#header
	.abs-icon.mode
		svg.mode-icon(@click="darkMode = !darkMode")
			template(v-if="darkMode")
				use(xlink:href="@/assets/icon/material-icon.svg#icon-moon-fill")
			template(v-else)
				use(xlink:href="@/assets/icon/material-icon.svg#icon-sun")

	Logo(@click="router.push('/')")
	
	.abs-icon.menu
		.menu-icon(@click="menuOpen = !menuOpen" :class="{ 'rotate': menuOpen }") 🌊
		//- svg.menu-icon(@click="menuOpen = !menuOpen" :class="{ 'rotate': menuOpen }")
		//- 	use(xlink:href="@/assets/icon/material-icon.svg#icon-login")

	.menu-wrap(v-if="menuOpen" :class="{ 'open': menuOpen }")
		p sksksk
		//- .profile
		//- .menu
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';

import Logo from '@/components/Logo.vue';

let router = useRouter();
let route = useRoute();

let darkMode = ref(false);
let menuOpen = ref(false);
</script>

<style lang="less" scoped>
#header {
	position: relative;
	padding: 1rem 20px;
	text-align: center;
	// overflow-x: hidden;

	.abs-icon {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		cursor: pointer;
		z-index: 10;

		&.mode {
			left: 1rem;
		}
		&.menu {
			right: 1rem;
		}

		svg {
			display: block;
			width: 1.1rem;
			height: 1.1rem;
			margin: auto;
			fill: var(--black-color-400);
		}
	}
}

.menu-icon {
	transition: all .3s;
	// transform: rotate(-180deg) scaleX(1);
	transform: scaleX(1);
	user-select: none;

	&.rotate {
		// transform: rotate(-180deg) scaleX(-1);
		transform: scaleX(-1);
	}
}

.menu-wrap {
	position: absolute;
	top: 0;
	right: 0;
	// width: 100%;
	// height: 100vh;
	padding: 0 20px;
	padding-top: 3rem;
	background-color: var(--black-color-100);
	transition: all .3s;
	transform: scale(0);
	color: #fff;

	&.open {
		transform: scale(1);
	}
}
</style>
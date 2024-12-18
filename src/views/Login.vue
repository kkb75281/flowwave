<template lang="pug">

#middle.login
	br

	Logo(@click="router.push('/')")

	br
	br
	br
	br

	.title Login

	br
	br

	form
		.input-wrap
			label Email
			input(type="email" placeholder="user@email.com")

		br

		.input-wrap
			label Password
			Password

		br

		.option-wrap
			.input-wrap.flex
				Checkbox
				label Remember me
			
			router-link(to="/forgot-password") Forgot password?

		br
		br

		button.btn.btn-primary Login
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';

import Logo from '@/components/Logo.vue';
import Password from '@/components/custom/password.vue';
import Checkbox from '@/components/custom/checkbox.vue';

const router = useRouter();
const route = useRoute();
</script>

<style lang="less" scoped>
.option-wrap {
	display: flex;
	align-items: center;
	justify-content: space-between;
	font-size: 0.8rem;

	a {
		text-decoration: none;
		color: var(--primary-color);

		&:hover {
			text-decoration: underline;
		}
	}
}
</style>
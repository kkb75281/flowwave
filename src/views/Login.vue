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

	form(@submit.prevent="login")
		.input-wrap
			label Email
			input(type="email" name="email" placeholder="user@email.com" :disabled="promiseRunning" required)

		br

		.input-wrap
			label Password
			Password(:disabled="promiseRunning")

		br

		.option-wrap
			.input-wrap
				Checkbox(v-model="remember" @change="(e)=>{setLocalStorage(e)}" :disabled="promiseRunning") Remember me
				//- label Remember me
			
			router-link(to="/forgot-password") Forgot password?

		br
		br

		button.btn.btn-primary Login
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref } from 'vue';
import { skapi } from '@/main';
import { user } from '@/assets/ts/user';

import Logo from '@/components/Logo.vue';
import Password from '@/components/custom/password.vue';
import Checkbox from '@/components/custom/checkbox.vue';

const router = useRouter();
const route = useRoute();

let promiseRunning = ref(false);
let remember = ref(false);

let setLocalStorage = (e) => {
	localStorage.setItem('remember', e.target.checked ? 'true' : 'false');
	console.log('localStorage("remember") is', window.localStorage.getItem('remember'));
}

let login = (e) => {
	promiseRunning.value = true;

    skapi.login(e).then(async (u) => {
        router.push('/');
    }).catch(err => {
		for (let k in user) {
			delete user[k];
		}
		if (err.code === "USER_IS_DISABLED") {
				alert("This account is disabled.");
		}
		else if (err.code === "INCORRECT_USERNAME_OR_PASSWORD") {
				alert("Incorrect email or password.");
		}
		else if (err.code === "NOT_EXISTS") {
				alert("Incorrect email or password.");
		}
		else {
				alert(err.message);
		}
    }).finally(() => {
        promiseRunning.value = false;
    })
}
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
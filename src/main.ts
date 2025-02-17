import '@/assets/less/main.less'
import { user } from '@/assets/ts/user';

import { createApp } from 'vue'
import { Skapi } from 'skapi-js';
import App from './App.vue'
import router from './router'

const app = createApp(App);

let userCheck = (profile: object | null) => {
	if(profile) {
		console.log(profile);
	} else {
		console.log('No user logged in');
	}
}

const skapi = new Skapi(
    'ap22X8jrP05SYfTugi5D',
    'bf305ace-03b5-4f9d-b88f-291458748ca3',
    { autoLogin: window.localStorage.getItem('remember') === 'true', eventListener: {onLogin: userCheck} },
    // { hostDomain: 'skapi.app', target_cdn: 'd1wrj5ymxrt2ir' }
);

app.use(router);

app.mount('#app');

export { skapi };
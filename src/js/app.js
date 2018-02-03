import 'babel-polyfill'

import Vue from 'vue'

import App from './components/App.vue'

// eslint-disable-next-line
new Vue({
    el: '#app',
    render: h => h(App),
    mounted() {
        // eslint-disable-next-line
        console.log('Go')
    },
})

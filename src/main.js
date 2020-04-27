/*
    入口js
*/
 import Vue from 'vue'
import APP from './App'
import router from './router'
new Vue({
    el:'#app',
    render:h=>h(APP),
    router
})
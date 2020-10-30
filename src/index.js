import $ from 'jquery';
import './css/1.css'
import './css/1.less'
import './css/1.scss'


$(function() {
    $('li:odd').css('backgroundColor', '#ccc')
    $('li:even').css('backgroundColor', 'lightblue')
})

class Person {
    static info = 'nico'
}
console.log(Person.info);

//————————————————————————————————————————————————————————————————
// 在webpack项目中使用vue
import Vue from 'vue'
// 导入单文件组件
import App from './components/app.vue'
const vm = new Vue({
    el: "#app",
    // 渲染指定的组件，h是一个creatElement函数
    render: h => h(App)
})
<script setup>
import { ref, inject } from 'vue'
const parentSetIndex = inject('parentSetIndex')

function setIndex(index) {
    this.parentSetIndex(index)
}
const items = ref([
    { "index": 1, "name": "主机", "url": "/host" },
    { "index": 2, "name": "检查项", "url": "/check_items" },
])

const showSideBar=ref(true)
function hideAndShowSideBar(){
    showSideBar.value=!showSideBar.value
}
</script>

<template>
    <input type="checkbox" checked=true @click="hideAndShowSideBar()"/>
    <ul v-if="showSideBar">
        <li v-for="item in items" @click="setIndex(item.index)">{{ item.name }}</li>
    </ul>
</template>

<style scoped>
ul{
    list-style: none;
    
    padding-left: 13px;
    margin: 0
}
li {
    font-size: x-large;
    margin-left: 0%;
    /* list-style: none; */
    cursor: pointer;
}
li:hover{
    background-color: blueviolet;
}
input{
    position: absolute;
}
</style>

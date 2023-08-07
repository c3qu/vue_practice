<script setup>
import {ref} from 'vue'

const items = ref([
    { "index": 1, "name": "主机", "url": "/host" },
    { "index": 2, "name": "检查项", "url": "/check_items" },
])

const showSideBar=ref(true)

</script>

<template>
    <div>
    <input type="checkbox" checked=true @click="showSideBar=!showSideBar"/>
    <ul v-if="showSideBar">
        <li v-for="item in items" @click="$emit('update:modelValue',item.index)">{{ item.name }}</li>
    </ul>
    </div>
</template>

<style scoped>
ul{
    list-style: none;
    
    padding-left: 13px;
    margin: 0
}
li {
    font-size: 3rem;
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

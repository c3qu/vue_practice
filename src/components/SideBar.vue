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

</script>

<template>
    <ul>
        <li v-for="item in items" @click="setIndex(item.index)">{{ item.name }}</li>
    </ul>
</template>

<style scoped>
li {
    font-size: x-large;
    list-style: none;
    cursor: pointer;
}
</style>

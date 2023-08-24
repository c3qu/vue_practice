<script setup>
import {ref} from "vue";

const items = ref([
  {index: 1, name: "主机", url: "/host_detail"},
  {index: 2, name: "检查项", url: "/check_item_detail"},
  {index: 3, name: "Table", url: '/eleUITable'},
  {index: 4, name: "可折叠列表", url: '/collapsible'},
  {index: 5, name: "Dialog", url: '/ElementDialog'}

]);

const showSideBar = ref(true);
</script>

<template>
  <div>
    <input type="checkbox" checked="checked" @click="showSideBar = !showSideBar"/>
    <ul v-if="showSideBar">
      <li v-for="item in items" @click="$router.replace(item.url)">
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<style scoped>
ul {
  list-style: none;

  padding-left: 13px;
  margin: 0;
}

li {
  font-size: 3rem;
  margin-left: 0;
  /* list-style: none; */
  cursor: pointer;
}

li:hover {
  background-color: blueviolet;
}

input {
  position: absolute;
}
</style>

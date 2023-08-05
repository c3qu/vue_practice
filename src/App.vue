<script setup>
import { ref, provide } from "vue"
import SideBar from './components/SideBar.vue'
import HostDetail from './components/HostDetail.vue'
import CheckItemDetail from './components/CheckItemDetail.vue'
const index = ref(1)

function setIndex(i) {
  index.value = i
}

provide('parentSetIndex', setIndex)
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <div class="main_show_area">
      <SideBar />
      <HostDetail v-if="index === 1" />
      <CheckItemDetail v-if="index === 2" />
    </div>
  </main>
</template>

<style scoped>
.main_show_area {
  display: flex;
  flex-direction: row;
}
</style>

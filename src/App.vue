<script setup>
import { ref, provide } from "vue"
import SideBar from './components/SideBar.vue'
import HostDetail from './components/HostDetail.vue'
import CheckItemDetail from './components/CheckItemDetail.vue'

const index = ref(1)

function setIndex(i) {
  index.value = i
}
const compNameList = [
  HostDetail,
  CheckItemDetail
]
provide('parentSetIndex', setIndex)
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <div class="main_show_area">
      <SideBar />
      <component :is="compNameList[index-1]" />
    </div>
  </main>
</template>

<style scoped>
.main_show_area {
  display: flex;
  flex-direction: row;
}
</style>

<script setup>
import { ref, provide } from "vue"
import SideBar from './components/SideBar.vue'
import HostDetail from './components/HostDetail.vue'
import CheckItemDetail from './components/CheckItemDetail.vue'
import HostAddCheckItemDetail from "./components/HostAddCheckItemDetail.vue";

const index = ref(1)
let childInfo=null
function setIndex(i,info) {
  index.value = i
  if (info!=null){
    console.log(info)
    childInfo=info
  }
}
const compNameList = [
  HostDetail,
  CheckItemDetail,
  HostAddCheckItemDetail
]
provide('parentSetIndex', setIndex)
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <div class="main_show_area">
      <SideBar v-model="index" />
      <component  :is="compNameList[index-1]" :info="childInfo" @set-index="setIndex"/>
    
    </div>
  </main>
</template>

<style scoped>
.main_show_area {
  display: flex;
  flex-direction: row;
}
</style>

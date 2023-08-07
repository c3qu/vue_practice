<script setup>
import { ref, provide } from "vue"
import SideBar from './components/SideBar.vue'
import HostDetail from './components/HostDetail.vue'
import CheckItemDetail from './components/CheckItemDetail.vue'
import HostAddCheckItemDetail from "./components/HostAddCheckItemDetail.vue";

const index = ref(1)
let childInfo=null
const setIndex=(i,info)=>{
  index.value = i
  if (info!=null){
    childInfo=info
  }
}
const compNameList = [
  HostDetail,
  CheckItemDetail,
  HostAddCheckItemDetail
]
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

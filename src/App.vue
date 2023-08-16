<script setup lang="ts">
import {ref} from "vue";
import HostDetail from "@/views/HostDetail.vue";
import CheckItemDetail from "@/views/CheckItemDetail.vue";
import HostAddCheckItemDetail from "@/views/HostAddCheckItemDetail.vue";
import Collapsible from "@/views/Collapsible.vue";
import SideBar from "@/views/SideBar.vue";
import {RouterView} from "vue-router";


const index = ref(4);
let childInfo: Object;
const setIndex = (i: number, info: Object) => {
  index.value = i;
  if (info != null) {
    childInfo = info;
  }
};
const compNameList = [
  HostDetail,
  CheckItemDetail,
  HostAddCheckItemDetail,
  Collapsible,
];
</script>

<template>
  <header>
    <div class="wrapper"></div>
  </header>

  <main>
    <div class="main_show_area">
      <SideBar v-model="index"/>
      <RouterView/>
    </div>

  </main>
</template>

<style scoped>
.main_show_area {
  display: flex;
  flex-direction: row;
}
</style>
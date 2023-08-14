<script setup lang="ts">
import { ref } from "vue";
import { Category, CheckItem, CollapsibleList } from "@/components/Ok";

const listData = ref(
  new CollapsibleList([
    new Category("服务器存储", false, [
      new CheckItem(1, "存储使用情况", true),
      new CheckItem(2, "硬盘寿命", true),
    ]),
    new Category("管理员账户", true, [
      new CheckItem(1, "管理员账户是否存在越权", false),
      new CheckItem(2, "是否有弱密码", false),
    ]),
  ]),
);
let data_bak={}
const handler1=()=>{
  data_bak={...listData.value}
}

const handler2=()=>{
  console.log(JSON.stringify(data_bak)===JSON.stringify(listData.value))
}


</script>
<template>
  <button @click="handler1">测试1</button>
  <button @click="handler2">测试2</button>
  <div class="collapsible-list1">
    <div>
      <input type="checkbox" v-model="listData.isAllSelected" />
      <label
        @click="listData.isAllExpand = !listData.isAllExpand"
        class="all-choose"
        >全选</label
      >
    </div>
    <div v-for="v in listData.items" class="collapsible-list2">
      <div class="category">
        <input type="checkbox" v-model="v.selected" />
        <label @click="v.isExpand = !v.isExpand" :key="v.categoryName">
          {{ v.categoryName }}
        </label>
      </div>

      <div class="min-item" v-for="i in v.data" v-show="v.isExpand">
        <input type="checkbox" v-model="i.selected" />
        <label>
          {{ i.name }}
        </label>
      </div>
    </div>
  </div>
</template>

<style scoped>
.all-choose {
  font-size: xxx-large;
  user-select: none;
  width: max-content;
}

label {
  width: auto;
}

.collapsible-list1 {
  display: flex;
  flex-direction: column;
}

.collapsible-list2 {
  display: flex;
  flex-direction: column;
}

.category {
  font-size: xxx-large;
  user-select: none;
  display: flex;
  flex-direction: row;
}

.min-item {
  display: flex;
  flex-direction: row;
}
</style>

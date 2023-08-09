<script setup>
import {ref} from "vue";

const data=ref({
  list_1:{
    data:[1,2,3],
    is_expand:true
  },
  list_2:{
    data:[4,5,6],
    is_expand:true
  }
})
const is_expand=ref(true)
function fold_or_expand(index){

}

</script>

<template >
  <div>
  <div v-for="(v,k) in data">
    <label @click="v.is_expand=!v.is_expand" :key="{k}">{{k}}</label>
    <div v-for="i in v.data" class="min-item" v-show="v.is_expand">
    <input type="checkbox"><div>{{i}}</div>
    </div>
  </div>
  </div>

</template>

<style scoped>
  div{
    display: block;
  }
  .min-item{
    display: flex;
  }

</style>
<script setup lang="ts">
import {ref} from "vue";
import {useRoute} from "vue-router";
import {publicStore} from "@/stores/Public";
import {useCounterStore} from "@/stores/counter";

const column_names = ref({
  name: "姓名",
  sex: "性别",
  address: "地址",
});

const info = publicStore().getData().value
</script>
<template>
  <form>
    <div v-for="(v, k) in column_names">
      <label>{{ v }}</label>
      <input type="text" :value="`${info[k]}`" readonly/>
    </div>
  </form>
</template>

<style scoped>
form {
  font-size: 1rem;
  display: flex;
  flex-direction: column;
}

div {
  display: flex;
  flex-direction: row;
}

label {
  display: block;
  width: 5rem;
}
</style>

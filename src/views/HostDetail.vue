<script setup lang="ts">
import {ref} from "vue";
import {useRouter} from 'vue-router'
import {publicStore} from "@/stores/Public";
import axios from "axios";

// const axios = require('axios');

const instance = axios.create({
  baseURL: 'http://127.0.0.1:8000/',
  timeout: 1000,
  headers: {'Access-Control-Allow-Origin': '*'}
});
const personData = ref({})
instance.get('/person/')
    .then(function (response) {
      personData.value = response.data
    })
    .catch(function (error) {
      console.log(error);
    });

const column_name = ref({
  name: "姓名",
  sex: "性别",
  address: "地址",
});
const router = useRouter()
const ps = publicStore()

function show_detail(row: any) {
  router.push({
    name: 'host_add_check_item_detail'
  })
  ps.setData(row)
}
</script>

<template>
  <table>
    <tr>
      <th v-for="value in column_name">{{ value }}</th>
    </tr>
    <tr
        v-for="row in personData"
        @click="show_detail(row)"
        class="table_body"
        title="打开对应检查项"
    >
      <td v-for="(_, key) in column_name">{{ row[key] }}</td>
      <td><a href="https://github.com/c3qu" target="_blank">操作</a></td>
    </tr>
  </table>
</template>

<style scoped>
table {
  font-size: 3rem;
  border-collapse: collapse;
  cursor: pointer;
}

td,
th {
  border: 1px solid white;
}

.table_body:hover {
  background-color: blue;
}
</style>

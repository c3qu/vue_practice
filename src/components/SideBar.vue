<script setup>
import { ref } from 'vue'
const data = ref([{ "name": "谭旭升", "age": 13 }, { "name": "白白陶", "age": 31 }])
const colunm_names = ["姓名", "年龄"]
</script>

<template>
    <table>
        <th>
        <td v-for="colunm_name in colunm_names">{{ colunm_name }}</td>
        </th>
        <tr v-for="row in data">
            <td>{{ row.name }}</td>
            <td>{{ row.age }}</td>
        </tr>
    </table>
</template>

<style></style>

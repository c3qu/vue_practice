<script setup>
import { ref } from 'vue'
const data = ref(
    [
        {
            "name": "谭旭升",
            "age": 13,
            "address": "厦门"
        },
        {
            "name": "白白陶",
            "age": 31,
            "address": "日本"
        }
    ]
)
const colunm_names = ref(
    {
        "name": "姓名",
        "age": "年龄",
        "address": "地址",
    }
)
</script>

<template>
    <table>
        <tr>
        <th v-for="value in colunm_names">{{ value }}</th>
        </tr>
        <tr v-for="row in data">
            <td v-for="_, key in colunm_names">{{ row[key] }}</td>
        </tr>
    </table>
</template>

<style>
table{
    border-collapse: collapse;
}
td,th{
    border: 1px solid white;
    
}
</style>

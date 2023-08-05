<script setup>
import { ref } from 'vue'
const data = ref(
    [
        {
            "name": "服务器空间",
            "status": "已检查"
        },
        {
            "name": "CPU占用情况",
            "status": "已检查",
        }
    ]

)
const colunm_names = ref(
    {
        "name": "检查项名称",
        "status": "状态",
    }
)
function show_detail() {
    alert("OK")
}
</script>

<template>
    <table>
        <tr>
            <th v-for="value in colunm_names">{{ value }}</th>
        </tr>
        <tr v-for="row in data" @click="show_detail" class="table_body">
            <td v-for="_, key in colunm_names">{{ row[key] }}</td>
            <td><a href="https://github.com/c3qu" target="_blank">操作</a></td>
        </tr>
    </table>
</template>

<style scoped>
table {
    font-size: larger;
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

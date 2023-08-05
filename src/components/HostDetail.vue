<script setup>
import { ref,inject} from 'vue'
const data = ref(
    [
        {
            "name": "谭旭升",
            "age": 30,
            "address": "重庆"
        },
        {
            "name": "桃白白",
            "age": 40,
            "address": "日本"
        },
        {
            "name": "周鱼",
            "age": 20,
            "address": "重庆"
        }
    ]
)
const parentSetIndex = inject('parentSetIndex')
const colunm_names = ref(
    {
        "name": "姓名",
        "age": "年龄",
        "address": "地址",
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
        <tr v-for="row in data" @click="parentSetIndex(3)" class="table_body" title="打开对应检查项">
            <td v-for="_, key in colunm_names">{{ row[key] }}</td>
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
}</style>

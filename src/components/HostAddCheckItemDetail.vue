<script setup>
import { ref} from 'vue'
const info=defineProps(["info"])
const data=ref(info.info)
const colunm_names = ref(
    {
        "name": "姓名",
        "age": "年龄",
        "address": "地址",
    }
)
</script>
<template>
<form>
    <div v-for="v,k in data">
        <label>{{ colunm_names[k] }}</label>
        <input type="text" :value="`${v}`" readonly/>
    </div>
    <!-- <div><label>IP</label><input type="text" value="1.1.1.1" readonly/></div>
    <div><label>MAC地址</label><input type="text" value="50-5A-65-C1-08-68" readonly/></div>
    <div><label>主机名</label><input type="text" value="谭旭升的笔记本" readonly/></div> -->

</form>
</template>

<style>
form{
    font-size: 1rem;
    display: flex;
    flex-direction: column;
}
div{
    display: flex;
    flex-direction: row;
}
label{
    display: block;
    width: 5rem;
}

</style>
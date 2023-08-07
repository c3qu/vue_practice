<script setup>
import { ref} from 'vue'
defineProps({
    info:Object
})
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
    <div v-for="v,k in info">
        <label>{{ colunm_names[k] }}</label>
        <input type="text" :value="`${v}`" readonly/>
    </div>
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
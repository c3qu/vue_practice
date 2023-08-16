import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const publicStore = defineStore('Public', () => {
    const data = ref({})
    function getData() {
        return data.value
    }
    function setData(data){
        this.data.value=data
    }
    return { data, getData,setData }
})

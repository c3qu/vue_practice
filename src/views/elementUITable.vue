<script setup lang="ts">
import {ref} from 'vue'
import type {TableColumnCtx, TableInstance} from 'element-plus'

interface User {
  date: string
  name: string
  address: string
  tag: string
}

const tableRef = ref<TableInstance>()

const resetDateFilter = () => {
  // tableRef.value!.clearFilter(['date'])
  console.log(tableData)
  console.log(tableDataBak)
}
// TODO: improvement typing when refactor table

const formatter = (row: User, column: TableColumnCtx<User>) => {
  return row.address
}
const filterTag = (value: string, row: User) => {
  return row.tag === value
}
const filterHandler = (
    value: string,
    row: User,
    column: TableColumnCtx<User>
) => {
  const property = column['property']
  return row[property] === value
}
const value = ref('')

const options = [
  {
    value: 'Home',
    label: 'Home',
  },
  {
    value: 'Company',
    label: 'Company',
  }
]
const tableData: User[] = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Home',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
    tag: 'Office',
  },
]
let tableDataBak: User[] = []
const copyArray = (arr: any[]) => {
  return arr.map(e => {
    if (typeof e === 'object') {
      return Object.assign({}, e)
    } else {
      return e
    }
  })
}
const clone = (obj: any) => {
  if (obj.constructor === Array) {
    return obj.map(e => {
      clone(e)
    })
  } else if (obj.constructor === Object) {
    const tmpObj:object= {}
    for (const i in obj) {
      tmpObj[i] = clone(obj[i])
    }
    return tmpObj
  } else {
    return obj
  }
}

const clearFilter = () => {
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// tableRef.value!.clearFilter()
//   Object.assign(tableDataBak, tableData)
//   tableDataBak = copyArray(tableData)
  tableDataBak = structuredClone(tableData)
}

</script>
<template>
  <div>
    <el-button @click="resetDateFilter">reset date filter</el-button>
    <el-button @click="clearFilter">reset all filters</el-button>
    <el-table
        ref="tableRef"
        row-key="date"
        :data="tableData"
        style="width: 100%"
        :cell-style="{padding: '0', height: '10px'}"
    >
      <el-table-column
          prop="date"
          label="Date"
          sortable
          width="180"
          column-key="date"
          formatter=""
          :filters="[
        { text: '2016-05-01', value: '2016-05-01' },
        { text: '2016-05-02', value: '2016-05-02' },
        { text: '2016-05-03', value: '2016-05-03' },
        { text: '2016-05-04', value: '2016-05-04' },
      ]"
          :filter-method="filterHandler"
      />
      <el-table-column prop="name" label="Name" width="180"/>
      <el-table-column prop="address" label="Address" :formatter="formatter"/>

      <el-table-column
          prop="tag"
          label="Tag"
          width="200"
          :filters="[
        { text: 'Home', value: 'Home' },
        { text: 'Office', value: 'Office' },
      ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
      >

        <template #default="scope">
          <el-select v-model="scope.row.tag" class="m-2" size="large">
            <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.value"
            />
          </el-select>
          <!--          <el-tag-->
          <!--              :type="scope.row.tag === 'Home' ? '' : 'success'"-->
          <!--              disable-transitions-->
          <!--          >-->
          <!--            {{ scope.raw }}-->
          <!--          </el-tag>-->
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

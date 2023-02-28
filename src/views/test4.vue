<template>
  <div class="about">
    <h1>请查看 files/src/views/test4.vue 文件</h1>
  </div>
</template>
<script>
export default {
  name: 'test4',
}
</script>
<script setup>
import { reactive } from 'vue'

const arr1 = reactive([
  { name: 'Facebook', age: 24 },
  { name: 'Github', age: 18 },
  { name: 'OpenAI', age: 18 },
])
const arr2 = reactive([
  { name: 'Google', age: 24 },
  { name: 'Copilot', age: 20 },
  { name: 'John', age: 24 },
])

const groupByAge = function (arr1, arr2) {
  let result = {}
  let arr = arr1.concat(arr2) // 将数组中的元素去重
  let temp = new Set(arr)
  arr = [...temp] // 根据年龄分组
  arr.forEach((item) => {
    let ageGroup = item.age
    if (result[ageGroup]) {
      result[ageGroup].push(item)
    } else {
      result[ageGroup] = [item]
    }
  })
  return result
}
console.log(groupByAge(arr1, arr2))
</script>

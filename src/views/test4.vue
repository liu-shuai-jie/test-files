<template>
  <div class="about">
    <h1>请查看 files/src/views/test4.vue 文件</h1>
  </div>
</template>
<script>
export default {
  name: "test4",
};
</script>
<script setup>
import { reactive } from "vue";

const arr1 = reactive([
  { name: "Facebook", age: 24 },
  { name: "Github", age: 18 },
  { name: "OpenAI", age: 18 },
]);
const arr2 = reactive([
  { name: "Google", age: 24 },
  { name: "Copilot", age: 20 },
  { name: "John", age: 24 },
]);

const groupByAge = function (arr1 = [], arr2 = []) {
  let result = {};
  const arr = arr1.concat(arr2);
  console.log(arr);
  arr.forEach((item) => {
    let age = item.age;
    if (result[age]) {
      // push之前判断里面有没有 避免重复
      let flag = result[age].find(
        (per) => per.name === item.name && per.age === item.age
      );
      if (!flag) {
        result[age].push(item);
      }
    } else {
      result[age] = [item];
    }
  });
  return result;
};
console.log(groupByAge(arr1, arr2));
</script>

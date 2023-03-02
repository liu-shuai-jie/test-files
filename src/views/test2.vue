<template>
  <div>请查看 files/src/views/test2.vue 文件,F12打开控制台看输出结果</div>
</template>
<script>
export default {
  name: "test2",
};
</script>
<script setup>
import axios from "axios";
// axios.get('https://jsonplaceholder.typicode.com/posts/1', function (err, response1) {
//   if (err) {
//     console.error(err);
//   } else {
//     axios.get('https://jsonplaceholder.typicode.com/comments?postId=' + response1.data.id, function (err, response2) {
//       if (err) {
//         console.error(err);
//       } else {
//         axios.get('https://jsonplaceholder.typicode.com/users/' + response2.data[0].userId, function (err, response3) {
//           if (err) {
//             console.error(err);
//           } else {
//             axios.get('https://jsonplaceholder.typicode.com/todos?userId=' + response3.data.id, function (err, response4) {
//               if (err) {
//                 console.error(err);
//               } else {
//                 // Do something with the data
//                 const data1 = response1.data;
//                 const data2 = response2.data;
//                 const data3 = response3.data;
//                 const data4 = response4.data;
//                 const allData = [data1, data2, data3, data4];
//                 localStorage.setItem('allData', JSON.stringify(allData));
//               }
//             });
//           }
//         });
//       }
//     });
//   }
// });
const promise_method = (url, params) => {
  return new Promise((resolve, reject) => {
    axios.get(url + params, function (err, res) {
      if (err) {
        reject(err);
      } else {
        resolve(res);
      }
    });
  });
};
// promise 解决
let allData = [];
promise_method("https://jsonplaceholder.typicode.com/posts/1")
  .then((res) => {
    allData.push(res.data);
    return promise_method(
      "https://jsonplaceholder.typicode.com/comments?postId=",
      res.data.id
    );
  })
  .then((res) => {
    allData.push(res.data);
    return promise_method(
      "https://jsonplaceholder.typicode.com/users/",
      res.data[0].userId
    );
  })
  .then((res) => {
    allData.push(res.data);
    return promise_method(
      "https://jsonplaceholder.typicode.com/todos?userId=",
      res.data.id
    );
  })
  .then((res) => {
    allData.push(res.data);
    localStorage.setItem("allData", JSON.stringify(allData));
  });

// async + await  解决
const async_await_method = async () => {
  let res1 = await axios.get("https://jsonplaceholder.typicode.com/posts/1");
  let res2 = await axios.get(
    "https://jsonplaceholder.typicode.com/comments?postId=" + res1.data.id
  );
  let res3 = await axios.get(
    "https://jsonplaceholder.typicode.com/users/" + res2.data[0].userId
  );
  let res4 = await axios.get(
    "https://jsonplaceholder.typicode.com/todos?userId=" + res3.data.id
  );
  const allData = [res1.data, res2.data, res3.data, res4.data];
  localStorage.setItem("allData", JSON.stringify(allData));
};
async_await_method();
</script>

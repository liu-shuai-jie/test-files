<template>
  <div class="about">
    <h1>请查看 files/src/views/test2.vue 文件</h1>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'test2',
  methods: {
    //# 题目二：优化下面代码（需要完成使用 Promise 优化和 async/await 两种优化方式）
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
    //promise方法
    // fetchData(url) {
    //   return axios.get(url)
    // },
    // async getData() {
    //   const [res1, res2, res3, res4] = await Promise.all([
    //     fetchData('https://jsonplaceholder.typicode.com/posts/1'),
    //     fetchData(
    //       'https://jsonplaceholder.typicode.com/comments?postId=' + res1.data.id
    //     ),
    //     fetchData(
    //       'https://jsonplaceholder.typicode.com/users/' + res2.data[0].userId
    //     ),
    //     fetchData(
    //       'https://jsonplaceholder.typicode.com/todos?userId=' + res3.data.id
    //     ),
    //   ])
    //   const data1 = res1.data
    //   const data2 = res2.data
    //   const data3 = res3.data
    //   const data4 = res4.data
    //   const allData = [data1, data2, data3, data4]
    //   localStorage.setItem('allData', JSON.stringify(allData))
    // },
    // async + await
    async getData() {
      try {
        const response1 = await axios.get(
          'https://jsonplaceholder.typicode.com/posts/1'
        )
        const response2 = await axios.get(
          'https://jsonplaceholder.typicode.com/comments?postId=' +
            response1.data.id
        )
        const response3 = await axios.get(
          'https://jsonplaceholder.typicode.com/users/' +
            response2.data[0].userId
        )
        const response4 = await axios.get(
          'https://jsonplaceholder.typicode.com/todos?userId=' +
            response3.data.id
        )
        const data1 = response1.data
        const data2 = response2.data
        const data3 = response3.data
        const data4 = response4.data
        const allData = [data1, data2, data3, data4]
        localStorage.setItem('allData', JSON.stringify(allData))
      } catch (error) {
        console.error(error)
      }
    },
    // getData()
  },
}
</script>

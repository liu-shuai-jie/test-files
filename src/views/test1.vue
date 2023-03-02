<template>
  <header>
    <div>
      <h2 style="font-style: italic; letter-spacing: 2px">一体化平台</h2>
      <p>总览</p>
      <!-- <h4></h4> -->
      <p><span>云平台</span><i class="fa-solid fa-angle-down"></i></p>
      <p>|</p>
      <p>云服务器</p>
      <p>域名服务</p>
      <p>网站备案</p>
      <p><i class="fa-regular fa-ellipsis" style="font-size: 24px"></i></p>
      <p><i class="fa-regular fa-plus" style="font-size: 24px"></i></p>
    </div>
    <div>
      <p><i style="font-size: 24px" class="fa-sharp fa-solid fa-qrcode"></i></p>
      <p style="position: relative">
        <i style="font-size: 24px" class="fa-sharp fa-regular fa-envelope"></i>
        <span class="floatRed">1</span>
      </p>
      <p>帮助</p>
      <p><span>工单</span><i class="fa-solid fa-angle-down"></i></p>
      <p><span>费用</span><i class="fa-solid fa-angle-down"></i></p>
      <div style="width: 200px">
        <img
          style="width: 25px; height: 25px; margin-right: 5px"
          alt="用户头像"
          src="../assets/user-normal.png"
        />
        <span class="omit">用户名用户名用户名用户名用户名</span>
        <i class="fa-solid fa-angle-down"></i>
      </div>
    </div>
  </header>
</template>
<script>
export default {
  name: "header",
};
</script>
<script setup></script>
<style scoped>
p {
  margin: 14px;
  font-size: 16px;
}
h2 {
  margin: 0px;
  color: #c1c6c8;
}
.user-normal-box {
  display: flex;
  align-items: center;
}
header {
  width: 100%;
  min-width: 1890px;
  height: 64px;
  background: #262f3e;
  color: #c1c6c8;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-sizing: border-box;
}
header > div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
header > div:nth-child(1) {
  width: 40%;
}
header > div:nth-child(2) {
  width: 30%;
}
i {
  font-size: 12px;
  margin-left: 5px;
}
.omit {
  display: inline-block;
  width: 150px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 25px;
  line-height: 25px;
  vertical-align: bottom;
}
.floatRed {
  display: inline-block;
  width: 30px;
  height: 17px;
  line-height: 17px;
  font-size: 12px;
  color: #fff;
  position: absolute;
  top: -5px;
  right: -20px;
  background-color: #006eff;
  border-radius: 20px;
}
</style>

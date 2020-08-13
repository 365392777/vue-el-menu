<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>-->
    <router-view />
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  // color: #2c3e50;
  padding: 0;
  margin: 0;
}

// element-ui中表格el-table表头与内容右边框错位问题
body .el-table th.gutter {
  display: table-cell !important;
}

.has-gutter th {
  // color: #ffffff !important;
  background-color: #DCE3F1 !important;
}

// #nav {
//   // padding: 30px;
//   a {
//     font-weight: bold;
//     color: #2c3e50;

//     &.router-link-exact-active {
//       color: #42b983;
//     }
//   }
// }
</style>

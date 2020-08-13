<template>
  <div class="treeview">
    <el-container class="index-container">
      <!-- <el-header>
      </el-header>-->
      <el-container>
        <el-aside width="200px">
          <!-- 左侧树形导航 -->
          <!-- <asideBar></asideBar>  :show-icon="false"-->
          <div id="Tree" class="mytree">
             <!-- :render-content="renderContent" 节点图标 -->
              <!-- icon-class="el-icon-s-promotion" :show-icon="false" 默认-->
            <el-tree
              :data="treeData"
              :props="defaultProps"
              :indent="0"
              icon-class=""
              :default-expand-all="true"
              class="ztree tree"
              @node-click="nodeClick"
            >
            <!--不用span标签模式就要用 :render-content="renderContent"这个方法  -->
              <span class="custom-tree-node" slot-scope="{ node, data }">
               <i :class="data.icon">{{ data.name }}</i>
              </span>
            </el-tree>
          </div>
        </el-aside>
        <el-main>
          <!-- :height="tableHeight" -->
          <div style="color:red;">
            <i class="iconfont icontaobao-circle-fill"></i>
          </div>
          <el-table
            ref="multipleTable"
            :data="tableData"
            tooltip-effect="dark"
            style="width: 100%"
            :header-cell-style="$store.state.header_cell_style"
            border
            @selection-change="handleSelectionChange"
          >
            <el-table-column type="selection" width="55"></el-table-column>
            <el-table-column label="日期" width="120">
              <template slot-scope="scope">{{ scope.row.date }}</template>
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120"></el-table-column>
            <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
          </el-table>
          <div style="margin-top: 20px">
            <el-button @click="toggleSelection()">取消选择</el-button>
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import zTree from '@/components/MenuTree' // 树形结构
import '@/assets/icon-font/iconfont.css'
export default {
  components: {
    zTree
  },
  data () {
    return {
      treeData: [
        {
          name: '模板分类',
          open: true,
          icon: 'el-icon-platform-eleme',
          children: [
            {
              name: '全院',
              icon: 'iconfont iconfeiji',
              children: [
                {
                  icon: 'el-icon-help',
                  name: '全院测试22'
                },
                { name: '广州' }
              ]
            },
            {
              name: '个人',
              children: [
                {
                  name: '主诉',
                  children: [{ name: '主诉' }, { name: '既往史' }]
                },
                { name: '既往史' }
              ]
            }
          ]
        },
        {
          name: '全院',
          icon: 'iconfont iconicon_work',
          children: [
            {
              icon: 'el-icon-help',
              name: '全院测试22'
            },
            { name: '全院测试' }
          ]
        }
      ],
      defaultProps: {
        label: 'name',
        children: 'children'
      },
      tableData: [
        {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        },
        {
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }
      ],
      multipleSelection: [],
      iconarrow: 'iconarrow-right',
      tableHeight: 'calc(100vh - 350px)'
    }
  },
  methods: {
    nodeClick (label, row, children) {
      console.log(label, row, children)
    },
    toggleSelection (rows) {
      console.log(rows)
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row)
        })
      } else {
        this.$refs.multipleTable.clearSelection()
      }
    },
    // 树形节点的点击事件
    handleSelectionChange (val) {
      // console.log(val)
      // this.multipleSelection = val
    },

    // 树形控件的图标
    renderContent: function () {
      // console.log(arguments)
      var createElement = arguments[0]
      var level = arguments[1].node.level
      console.log(level, 'level')
      // for(let i=0; i)
      if (level === 1) {
        // 一级标题图标
        return createElement('span', [
          createElement('i', { attrs: { class: 'el-icon-platform-eleme' } }),
          createElement('span', '     '),
          createElement('span', arguments[1].node.label)
        ])
      } else if (level === 2) {
        // 二级标题图标
        return createElement('span', [
          createElement('i', { attrs: { class: 'iconfont iconicon_work' } }),
          createElement('span', '     '),
          createElement('span', arguments[1].node.label)
        ])
      } else {
        // 最后一级图标
        return createElement('span', [
          createElement('i', { attrs: { class: 'iconfont iconicon_qq' } }),
          createElement('span', '     '),
          createElement('span', arguments[1].node.label)
        ])
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.treeview {
  // margin-top: 10px;
  padding-top: 10px;
  height: 100%;

  // height: calc(100vh - 123px);
  //  background-color: pink;
}
.el-container {
  height: 100%;
}
.el-aside {
  height: calc(100vh - 123px);
  background-color: #fff;
  // background-color: #e9eef3;
  // text-align: center;
}
.el-main {
  padding-top: 0;
  color: #333;
}
.el-tree {
  background-color: #fff;
  color: #2f8dfb;
}
.mytree {
  height: 100%;
}
// 添加提示线
.mytree /deep/ {
  .el-tree > .el-tree-node:after {
    border-top: none;
  }
  .el-tree-node {
    position: relative;
    padding-left: 16px;
  }
  //节点有间隙，隐藏掉展开按钮就好了,如果觉得空隙没事可以删掉
  .el-tree-node__expand-icon.is-leaf {
    display: none;
  }
  .el-tree-node__children {
    padding-left: 16px;
  }

  .el-tree-node :last-child:before {
    height: 38px;
  }

  .el-tree > .el-tree-node:before {
    border-left: none;
  }

  .el-tree > .el-tree-node:after {
    border-top: none;
  }

  .el-tree-node:before {
    content: '';
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }

  .el-tree-node:after {
    content: '';
    left: -4px;
    position: absolute;
    right: auto;
    border-width: 1px;
  }

  .el-tree-node:before {
    border-left: 1px dashed #4386c6;
    bottom: 0px;
    height: 100%;
    top: -26px;
    width: 1px;
  }

  .el-tree-node:after {
    border-top: 1px dashed #4386c6;
    height: 20px;
    top: 12px;
    width: 24px;
  }
}
/deep/ .el-tree-node :last-child:before{
  padding-right: 8px;
}
/deep/ .el-tree-node__content {
  // padding-left: 10px !important;
}
// 节点背景颜色
/deep/ .el-tree li a.curSelectedNode {
  background-color: #2f8dfb;
  color: white;
  border: 1px #2f8dfb solid;
}
// 添加提示线

// .tree-icon {
//     display:inline-block;
//  }
// .child-class{
//     //图标设置
//     background-position:-110px -80px; background-image:url("../../utils/zTree/css//img/zTreeStandard.png");
//     // *background-image:url("../../utils/zTree/img/zTreeStandard.gif")
// }
// .group-class {
//     //图标设置
// }
</style>

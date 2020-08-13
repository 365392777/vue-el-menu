<template>
  <div>
       <!-- @cell-mouse-enter="cellMouseEnter"
      @cell-mouse-leave="cellMouseLeave" -->
    <el-table
      :key="key"
      :data="data"
      :span-method="spanMethod"
      :row-class-name="tableRowClassName"
      style="width: 100%"
      v-bind="$attrs"
      v-on="$listeners"
    >
      <slot></slot>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'MergeTable',
  props: {
    // 表格数据
    data: {
      type: Array,
      default: () => []
    },
    // 根据某字段标识计算合并
    mark: {
      type: String,
      default: 'id'
    },
    // 需要合并的列字段
    markField: {
      type: Array,
      default: () => []
    }
  },

  data () {
    return {
      tableData: [],
      spanArr: [],
      position: 0,
      // needSpan: ["id", "name"], // 需要合并的属性
      needSpan: [], // 需要合并的属性
      spanArrObj: {},
      // spanArrObj: {
      //   id: [],
      //   name: []
      // },
      rowIndex: '-1',
      OrderIndexArr: [],
      hoverOrderArr: [],
      key: '1'
    }
  },
  created () {
    // this.getSpanArr();
  },
  watch: {
    // 监听数据变动
    data (val) {
      this.tableData = val
      // 清空缓存，重新计算
      this.OrderIndexArr = []
      this.getSpanArr()
      this.getOrderNumber()
      this.key = new Date().getTime()
    }
  },
  mounted () {
    this.needSpan = this.markField
    this.tableData = this.data
    this.getSpanArr()
    this.getOrderNumber()
  },
  methods: {
    // 合并行方法
    spanMethod ({ row, column, rowIndex, columnIndex }) {
      var data
      this.needSpan.forEach(e => {
        if (column.property === e) {
          const _row = this.spanArrObj[e][rowIndex]
          const _col = _row > 0 ? 1 : 0
          data = {
            rowspan: _row,
            colspan: _col
          }
        }
      })
      return data
    },
    // 获取合并行参数(数组)
    rowspan (prop, first) {
      this.tableData.forEach((item, index) => {
        if (index === 0) {
          this.spanArrObj[prop].push(1)
          this.position = 0
        } else {
          if (
            this.tableData[index][first] === this.tableData[index - 1][first] &&
            this.tableData[index][prop] === this.tableData[index - 1][prop]
          ) {
            this.spanArrObj[prop][this.position] += 1
            this.spanArrObj[prop].push(0)
          } else {
            this.spanArrObj[prop].push(1)
            this.position = index
          }
        }
      })
    },
    getSpanArr () {
      this.needSpan.forEach(item => {
        this.spanArrObj[item] = []
        this.rowspan(item, this.mark)
      })
    },
    tableRowClassName ({ row, rowIndex }) {
      var arr = this.hoverOrderArr
      for (var i = 0; i < arr.length; i++) {
        if (rowIndex === arr[i]) {
          return 'success-row'
        }
      }
    },

    // // 鼠标滑出事件
    // cellMouseEnter (row, column, cell, event) {
    //   this.rowIndex = row.rowIndex
    //   this.hoverOrderArr = []
    //   this.OrderIndexArr.forEach(element => {
    //     if (element.indexOf(this.rowIndex) >= 0) {
    //       this.hoverOrderArr = element
    //     }
    //   })
    // },
    // // 鼠标滑入事件
    // cellMouseLeave (row, column, cell, event) {
    //   this.rowIndex = '-1'
    //   this.hoverOrderArr = []
    // },

    // 获取相同编号的数组
    getOrderNumber () {
      var OrderObj = {}
      this.tableData.forEach((element, index) => {
        element.rowIndex = index
        if (OrderObj[element[this.mark]]) {
          OrderObj[element[this.mark]].push(index)
        } else {
          OrderObj[element[this.mark]] = []
          OrderObj[element[this.mark]].push(index)
        }
      })

      for (var k in OrderObj) {
        if (OrderObj[k].length > 1) {
          this.OrderIndexArr.push(OrderObj[k])
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>
/deep/.el-table .success-row {
  background: #f5f7fa;
}
// 鼠标移入表格的颜色
// /deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
//   background-color: #f19944;
//   // border: 1px solid #f19944;
//  //color: #f19944; /* 设置文字颜色，可以选择不设置 */
// }
</style>

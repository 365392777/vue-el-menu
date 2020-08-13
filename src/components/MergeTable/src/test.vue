<template>
  <div>
    <el-table
      :data="tableData"
      :span-method="spanMethod"
      :row-class-name="tableRowClassName"
      border
      style="width: 100%"
      @cell-mouse-enter="cellMouseEnter"
      @cell-mouse-leave="cellMouseLeave"
    >
      <!-- <el-table-column prop="id" label="ID" width="180"></el-table-column> -->
      <el-table-column prop="name" label="姓名"></el-table-column>
      <el-table-column prop="amount1" label="数值 1"></el-table-column>
      <el-table-column prop="amount2" label="数值 2"></el-table-column>
      <el-table-column prop="amount3" label="数值 3"></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: "MergeTable",
  data() {
    return {
      tableData: [
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "12987122",
          name: "王小虎",
          amount1: "234",
          amount2: "3.2",
          amount3: 10
        },
        {
          id: "1298712",
          name: "王小虎",
          amount1: "165",
          amount2: "4.43",
          amount3: 12
        },
        {
          id: "12987124",
          name: "王小二",
          amount1: "324",
          amount2: "1.9",
          amount3: 9
        },
        {
          id: "12987125",
          name: "张三",
          amount1: "621",
          amount2: "2.2",
          amount3: 17
        },
        {
          id: "12987125",
          name: "张三",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        },
        {
          id: "12987125",
          name: "张三",
          amount1: "539",
          amount2: "4.1",
          amount3: 15
        }
      ],
      spanArr: [],
      position: 0,
      needSpan: ["id", "name"], // 需要合并的属性
      spanArrObj: {
        id: [],
        name: []
      },
      rowIndex: "-1",
      OrderIndexArr: [],
      hoverOrderArr: []
    };
  },
  created() {
    this.getSpanArr();
  },
  watch: {
    tableData() {
      this.getOrderNumber();
    }
  },
  mounted() {
    this.getOrderNumber();
  },
  methods: {
    // 合并行方法
    spanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        const _row = this.spanArrObj["id"][rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
      if (columnIndex === 1) {
        const _row = this.spanArrObj["name"][rowIndex];
        const _col = _row > 0 ? 1 : 0;
        return {
          rowspan: _row,
          colspan: _col
        };
      }
    },
    // 获取合并行参数(数组)
    rowspan(prop, first = "id") {
      // this.position = 0
      // this.spanArrObj = []
      this.tableData.forEach((item, index) => {
        if (index === 0) {
          this.spanArrObj[prop].push(1);
          this.position = 0;
        } else {
          if (
            this.tableData[index][first] === this.tableData[index - 1][first] &&
            this.tableData[index][prop] === this.tableData[index - 1][prop]
          ) {
            this.spanArrObj[prop][this.position] += 1;
            this.spanArrObj[prop].push(0);
          } else {
            this.spanArrObj[prop].push(1);
            this.position = index;
          }
        }
      });
    },
    getSpanArr() {
      this.needSpan.forEach(item => {
        this.rowspan(item);
      });
    },
    // editRow () {
    //   this.$forceUpdate() // vue提供的方法 - 强制刷新视图
    // },
    tableRowClassName({ row, rowIndex }) {
      var arr = this.hoverOrderArr;
      for (var i = 0; i < arr.length; i++) {
        if (rowIndex === arr[i]) {
          return "success-row";
        }
      }
    },

    cellMouseEnter(row, column, cell, event) {
      this.rowIndex = row.rowIndex;
      this.hoverOrderArr = [];
      this.OrderIndexArr.forEach(element => {
        if (element.indexOf(this.rowIndex) >= 0) {
          this.hoverOrderArr = element;
        }
      });
    },

    cellMouseLeave(row, column, cell, event) {
      this.rowIndex = "-1";
      this.hoverOrderArr = [];
    },

    // 获取相同编号的数组
    getOrderNumber() {
      var OrderObj = {};
      this.tableData.forEach((element, index) => {
        element.rowIndex = index;
        if (OrderObj[element.id]) {
          OrderObj[element.id].push(index);
        } else {
          OrderObj[element.id] = [];
          OrderObj[element.id].push(index);
        }
      });

      for (var k in OrderObj) {
        if (OrderObj[k].length > 1) {
          this.OrderIndexArr.push(OrderObj[k]);
        }
      }
    }
  }
};
</script>

<style lang="scss" scoped>
/deep/.el-table .success-row {
  background: #f5f7fa;
}
</style>
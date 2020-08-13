<template>
  <div class="box">
    <div class="topLsit">
      <!-- 表头复选 -->
      <el-popover placement="right" width="900" trigger="click">
        <el-checkbox-group v-model="colOptions" id="siftIng">
          <el-checkbox v-for="item in colSelect" :label="item" :key="item" id="siftIngId"></el-checkbox>
        </el-checkbox-group>
        <el-button slot="reference">筛选</el-button>
      </el-popover>
      <!-- 列表顶部 -->
      <el-row type="flex" justify="space-between" align="middle" class="tooltip">
        <el-col>
          <el-button>新增</el-button>
          <el-button @click="handleMoreDelete">删除</el-button>
        </el-col>
        <div>
          <el-input placeholder="请输入内容" class="input-with-select" v-model="searchValue">
            <el-button slot="append" icon="el-icon-search" @click="handleSearch"></el-button>
          </el-input>
        </div>
      </el-row>
    </div>
    <!-- 表格内容 -->
    <!-- border 表格需要边框则添加-->
    <!-- @cell-click="tableDbEdit" 某一行点击 -->
    <!-- :sortable="dropCol[index].sortable || false"  判断某个表头是否拥有这个属性sortable  v-loading="loading"  -->
    <el-table
      :data="listArr.slice((currpage - 1) * pagesize, currpage * pagesize)"
      border
      :height="tableHeight"
      v-loading="loading"
      @selection-change="handleSelectionChange"
      :header-cell-style="$store.state.header_cell_style"
      style="width: 99%"
    >
      <!-- 允许多选 -->
      <el-table-column type="selection" width="55"></el-table-column>
      <el-table-column label="图片" >
        <template slot-scope="scope" >
          <img :src="scope.row.cover" @click="tableDbEdit" width="100" height="60" />
        </template>
      </el-table-column>
      <!-- 表格列表内容 -->
      <!-- :show-overflow-tooltip="true" 文字内容过多处理 -->
      <el-table-column
        v-for="(item,index) in dropCol"
        :key="index"
        :prop="dropCol[index].prop"
        :label="item.label"
        :sortable="dropCol[index].sortable || false"
        :show-overflow-tooltip="true"
        v-if="dropCol[index].istrue"
      ></el-table-column>
      <el-table-column label="操作" width="100">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
          <el-button type="text" size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
    <div class="block">
      <!-- size-change: 修改条数触发 -->
      <!-- current-change: 切换到当前页的事件  -->
      <!-- current-page：默认当前的页数 -->
      <!-- page-sizes条数选择的下拉数据 -->
      <!-- page-size：默认条数 -->
      <!-- layout是布局 -->
      <!-- total 表示总条数 -->
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 15, 20]"
        :page-size="pagesize"
        layout="total, sizes, prev, pager, next, jumper"
        :total="listArr.length"
      ></el-pagination>
    </div>
    <!-- v-show="enSconce" -->
    <div class="backdrop" v-show="enSconce">
      <p @click="handleDelete">X</p>
      <!-- <img :src="listArr[index_num].cover" alt=""> -->
      <img :src="ImgB" alt />
    </div>
  </div>
</template>

<script>
// import { getorglist } from '@/api/api'
// import tagsView from '@components/tabs/tagsView'
import { mapActions } from 'vuex'
export default {
  components: {
    // 'top-tags': tagsView
  },
  data () {
    return {
      // 表头数据
      dropCol: [
        {
          label: '名称',
          prop: 'author_name',
          istrue: true
        },
        {
          label: '销售量Id',
          prop: 'id',
          istrue: true
        },
        {
          label: '销售额',
          prop: 'title',
          istrue: true
        },
        {
          label: '销售额目标',
          prop: '',
          istrue: true
        },
        {
          label: '折扣率',
          prop: 'discount',
          istrue: true
        },
        {
          label: '库存量',
          prop: 'stockNum',
          istrue: true,
          sortable: true,
          template: 'stockNum'
        }

      ],
      listArr: [], // 表格数据
      tableHeight: 'calc(100vh - 200px)',
      colOptions: [], // 复选框
      colSelect: [], // 筛选后
      loading: false,
      currentPage: 1,
      pagesize: 5, // 每页显示多少条
      currpage: 1, // 当前的页面
      multipleSelection: [],
      // 输入框的值
      searchValue: '',
      ids: [],
      ImgB: [],
      enSconce: false
    }
  },
  methods: {
    ...mapActions({
      gettable: 'common/$tablea' // 表格
    }),
    // 数据接口
    async Search () {
      await this.gettable().then(
        (res) => {
          this.listArr = res
          // this.nextTick(function () {
          //   this.listArr = res
          //   // DOM 更新了
          // })
        }
      )
    },
    handleSizeChange (val) {
      // console.log(`每页 ${val} 条`)
      this.pagesize = val
    },
    handleCurrentChange (val, psize) {
      this.currpage = val
      // console.log(`当前页: ${val}`)
    },
    handleClick (row) {
      console.log('查看' + row.id)
    },
    // 多选
    handleSelectionChange (val) {
      var ids = val.map(v => {
        return v.id
      })
      this.ids = ids
      this.multipleSelection = val
    },
    // 搜索
    handleSearch () {
      // this.getList()
    },
    // 删除多个 删除需要调用接口
    handleMoreDelete () {
      const id = this.ids.join(',')
      console.log('删除' + id)
    },
    // 图片点击
    tableDbEdit (row, column, cell, event) {
      this.ImgB = row.target.src
      this.enSconce = true
    },
    handleDelete () { // 关闭
      this.enSconce = false
    }

  },
  mounted () {
    // 表头筛选
    this.dropCol.map(item => {
      this.colSelect.push(item.label)
      // eslint-disable-next-line no-unused-expressions
      item.label !== '0' ? this.colOptions.push(item.label) : ''
    })
    this.Search()
    // console.log(this.colOptions)
    // console.log(this.$store.state)
  },
  watch: {
    // 表头隐藏
    colOptions (valArr) {
      // 筛选未选择的
      const arr = this.colSelect.filter(i => valArr.indexOf(i) < 0) // 未选中
      // console.log(arr)
      this.dropCol = this.dropCol.map(item => {
        item.istrue = !arr.includes(item.label)
        return item
      })
      // console.info(this.dropCol[1].prop)
    }
  }
}
</script>

<style lang="less" >
* {
  padding: 0;
  margin: 0;
}
.box{
  position: relative;
//   tr.ant-table-row > td {
//     white-space: nowrap;
//     overflow: hidden;
//     text-overflow: ellipsis;
//     max-width: 100px;
// }
}
.topLsit {
  display: flex;
}
.backdrop {
  width: 520px;
  height: 300px;
  top: 200px;
  left: 220px;
  position: absolute;
  background-color: rgba(5,255,255,0.2);;
  img{
    width: 80%;
    height: 80%;
     position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
  }
  p{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 0px;
    right: 0px;
    text-align: center;
    color: #fff;
    font-size: 16px;
    background-color: red;
  }
}

// 鼠标移入表格的颜色
/deep/ .el-table--enable-row-hover .el-table__body tr:hover > td {
  background-color: #f19944;
  // border: 1px solid #f19944;
 //color: #f19944; /* 设置文字颜色，可以选择不设置 */
}
// .el-table {
//   width: 99% !important;
// }
//  .el-table th.gutter{
//   display: table-cell!important;
// }
// .el-table .cell{height: 20px!important;}
// [v-cloak]{ display:none}
</style>

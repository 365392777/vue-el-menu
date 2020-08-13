<template>
  <div>
    <div>
      <el-form :inline="true" :model="formInline" class="demo-form-inline">
        <el-form-item label="关键词">
          <el-select v-model="formInline.region" placeholder="编号">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="编号">
          <el-input v-model="formInline.user" placeholder="审批人"></el-input>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">查询</el-button>
        </el-form-item>
      </el-form>
    </div>
    <merge
      ref="MargeTable"
      :data.sync="righttableData"
      :height="tableHeight"
      :header-cell-style="$store.state.header_cell_style"
      style="width: 100%"
      @row-click="row_dblclick"
      border
    >
      <el-table-column prop="dicname" label="申购单号"></el-table-column>
      <el-table-column prop="age" label="申购单主题"></el-table-column>
      <el-table-column prop="age" label="申购单位"></el-table-column>
      <el-table-column prop="age" label="申购人"></el-table-column>
      <el-table-column prop="age" label="商品类别"></el-table-column>
      <el-table-column prop="age" label="填表时间"></el-table-column>
      <el-table-column prop="age" label="流程"></el-table-column>
      <el-table-column prop="age" label="状态"></el-table-column>
      <el-table-column prop="age" label="状态申购单类型"></el-table-column>
      <!-- <el-table-column prop="age" label="操作"></el-table-column> -->
      <el-table-column label="操作" width="200" class="ic_button">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
        </template>
      </el-table-column>
    </merge>
  </div>
</template>

<script>
// import  merge-table  from '@/components/MergeTable/index',
import merge from '@/components/MergeTable/index'
export default {
  name: 'catalogue',
  props: {
    height: {
      type: String,
      default: 'calc((100vh - 238px) / 2)'
    },
    fullScreen: {
      type: Boolean,
      default: true
    },
    selects: {
      type: Object
    },
    getEditList: {
      type: Function
    },
    add: {
      type: Function
    }
  },
  components: {
    // merge-table
    merge
  },
  data () {
    return {
      righttableData: [
        {
          dicname: '10000000220',
          age: '测试'
        },
        {
          dicname: '9005000000',
          age: '硬盘'
        }
      ],
      tableHeight: 'calc(100vh - 248px)',
      formInline: {
        user: '',
        region: ''
      }
    }
  },
  methods: {
    row_dblclick (row) {
      console.log(row)
    },
    handleClick () {},
    onSubmit () {
      console.log('submit!')
    }
  }
}
</script>

<style>
</style>

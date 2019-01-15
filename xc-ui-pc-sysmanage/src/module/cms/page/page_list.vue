<!--编写页面静态部分,即view部分-->
<template>
  <div>
    <el-button type="primary" v-on:click="query" size="small">查询</el-button>
    <el-table
      :data="list"
      stripe
      style="width: 100%">
      <el-table-column type="index" width="60">
      </el-table-column>
      <el-table-column prop="pageName" label="页面名称" width="120">
      </el-table-column>
      <el-table-column prop="pageAliase" label="别名" width="120">
      </el-table-column>
      <el-table-column prop="pageType" label="页面类型" width="150">
      </el-table-column>
      <el-table-column prop="pageWebPath" label="访问路径" width="250">
      </el-table-column>
      <el-table-column prop="pagePhysicalPath" label="物理路径" width="250">
      </el-table-column>
      <el-table-column prop="pageCreateTime" label="创建时间" width="180">
      </el-table-column>
    </el-table>
    <el-pagination
      layout="prev, pager, next"
      :page-size="this.params.size"
      v-on:current-change="changePage"
      :total="total"
      :current-page="this.params.page"
      style="float:right;">
    </el-pagination>
  </div>

</template>

<!--编写页面静态部分,即model和vm部分-->
<script>
  //引入cms.js,并将所有的API起名为cmsApi
  import * as cmsApi from '../api/cms';

  export default {
    data() {
      return {
        list: [],
        total: 10,
        params: {
          page: 1,//页码
          size: 2//每页显示个数
        }
      }
    },
    methods: {
      //分页查询
      changePage: function (page) {
        this.params.page = page;
        this.query();
      },
      //查询
      query: function () {
        //alert("查询");
        //调用服务端的接口
        cmsApi.page_list(this.params.page, this.params.size)
        //回调函数用then
          .then((response) => {
            //将结果赋值给数据模型对象
            this.list = response.queryResult.list;
            this.total = response.queryResult.total;
          });
      },
      mounted() {
        //当Dom元素渲染完成后调用query
        this.query();
      }
    }
  }

</script>

<!--编写页面样式-->
<style scoped>

</style>

<!--编写页面静态部分,即view部分-->
<template>
  <div>
    <!--查询表单-->
    <el-form :model="params">
      <el-select v-model="params.siteId" placeholder="请选择站点">
        <el-option
          v-for="item in siteList"
          :key="item.siteId"
          :label="item.siteName"
          :value="item.siteId">
        </el-option>
      </el-select>
      页面别名：
      <el-input v-model="params.pageAliase" style="width: 100px"></el-input>
      <el-button type="primary" v-on:click="query" size="small">查询</el-button>
    </el-form>
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
        siteList: [],//站点列表
        list: [],
        total: 10,
        page: 0,//页码
        size: 2,//每页显示个数,
        params: {
          pageAliase: '',
          siteId: ''
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
        cmsApi.page_list(this.page, this.size, this.params)
        //回调函数用then
          .then((response) => {
            //将结果赋值给数据模型对象
            this.list = response.queryResult.list;
            this.total = response.queryResult.total;
          });
      }
    },
    mounted() {
      //默认查询页面
      this.query();
      //初始化站点列表
      this.siteList = [
        {
          siteId: '5a751fab6abb5044e0d19ea1',
          siteName: '门户主站'
        },
        {
          siteId: '102',
          siteName: '测试站'
        }
      ]
    }
  }

</script>

<!--编写页面样式-->
<style scoped>

</style>

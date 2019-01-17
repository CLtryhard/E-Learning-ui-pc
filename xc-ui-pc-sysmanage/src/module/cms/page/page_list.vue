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
      <!--点击新增页面时,定向到新的路由-->
      <router-link class="mui-tab-item" :to="{path:'/cms/page/add/',query:{
        page:this.page,
        siteId:this.params.siteId
      }}">
        <!--新增页面按钮-->
        <el-button type="primary" size="small">新增页面</el-button>
      </router-link>

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
      <el-table-column label="操作" width="120">
        <template slot-scope="page">
          <el-button
            size="small" type="text"
            @click="update(page.row.pageId)">编辑
          </el-button>
          <el-button
            size="small" type="text"
            @click="del(page.row.pageId)">删除
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--分页组件-->
    <el-pagination
      layout="prev, pager, next"
      :page-size="this.size"
      v-on:current-change="changePage"
      :total="total"
      :current-page="this.page"
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
      //查询
      query: function () {
        //alert("查询");
        //调用服务端的接口q
        cmsApi.page_list(this.page, this.size, this.params)
        //回调函数用then
          .then((response) => {
            //将结果赋值给数据模型对象
            this.list = response.queryResult.list;
            this.total = response.queryResult.total;
          });
      },
      //分页查询
      changePage: function (page) {
        alert(page);
        this.page = page;
        this.query();
      },
      //修改页面信息
      update: function (pageId) {
        this.$router.push({
          path: '/cms/page/update/' + pageId/*, query: {
            page: this.page,
            siteId: this.params.siteId
          }*/
        });
      },
      //删除
      del: function (pageId) {
        this.$confirm('确认删除此页面吗?', '提示', {}).then(() => {
          cmsApi.page_del(pageId).then((res) => {
            if (res.success) {
              this.$message({
                type: 'success',
                message: '删除成功!'
              });
              //查询页面
              this.query()
            } else {
              this.$message({
                type: 'error',
                message: '删除失败!'
              });
            }
          })
        })
      }
    },
    //在新增页面点击返回时,由于我需要在页面渲染完成之前得到参数,所以勇敢created
    created() {
      this.page = Number.parseInt(this.$route.query.page || 1);
      this.params.siteId = this.$route.query.siteId || '';
      this.query();
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

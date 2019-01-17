import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';
import page_add from '@/module/cms/page/page_add.vue';
import page_update from '@/module/cms/page/page_update.vue';
export default [{
  path: '/',
  component: Home,
  //菜单名称
  name: 'CMS',
  hidden: false,
  children: [
    {path: '/cms/page/list', name: '页面列表', component: page_list, hidden: false},
    {path: '/cms/page/add', name: '新增页面', component: page_add, hidden: true},
    //通过v-bind,即:获取到id参数
    {path: '/cms/page/update/:pageId', name: '修改页面', component: page_update, hidden: true}
  ]
}
]

import Home from '@/module/home/page/home.vue';
import page_list from '@/module/cms/page/page_list.vue';

export default [{
  path: '/',
  component: Home,
  //菜单名称
  name: 'CMS',
  hidden: false,
  children: [
    {path: '/cms/page/list', name: '页面列表', component: page_list, hidden: false}
  ]


}
]

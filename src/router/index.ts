import { createRouter, createWebHistory, Router, RouteRecordRaw } from 'vue-router';
import NProgress from 'nprogress';
// import exceptionRoutes from '@/router/route.exception';
// import asyncRoutes from '@/router/route.async';
// import commonRoutes from '@/router/route.common';

const routes: Array<RouteRecordRaw> = [
  // 无鉴权的业务路由 ex:登录
  // ...commonRoutes,
  // 带鉴权的业务路由
  // ...asyncRoutes,
  // 异常页必须放在路由匹配规则的最后
  // ...exceptionRoutes,
  {
    path: '/login',
    name: 'login',
    meta: {
      title: '登录页',
    },
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      title: '主页',
    },
    component: () => import('@/views/home/index.vue'),
  },
  {
    path: '/tree',
    name: 'tree',
    meta: {
      title: '树形测试',
    },
    component: () => import('@/views/tree/tree.vue'),
  },
];

console.log(routes);


const router: Router = createRouter({
  // 新的vue-router4 使用 history路由模式 和 base前缀
  history: createWebHistory(import.meta.env.VITE_BASE as string),
  routes,
});

/**
 * @description: 全局路由前置守卫，在进入路由前触发，导航在所有守卫 resolve 完之前一直处于等待中。
 * @param {RouteLocationNormalized} to  即将要进入的目标
 * @param {RouteLocationNormalizedLoaded} from  当前导航正在离开的路由
 * @return {*}
 */
router.beforeEach((to, from) => {
  console.log('全局路由前置守卫：to,from\n', to, from);
  // 设置页面标题
  document.title = (to.meta.title as string) || import.meta.env.VITE_APP_TITLE as string;
  if (!NProgress.isStarted()) {
    NProgress.start();
  }
});

router.afterEach((to, from) => {
  console.log('全局路由后置守卫：to,from\n', to, from);
  NProgress.done();
});

export default router;

import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/test2.vue'
import SingupView from '../views/Signup.vue'
import NotFoundView from '../views/NotFound.vue'
import axios from 'axios'

const routes = [
  {
    path: '/',
    name: 'test',
    component: () => require('@/views/test1.vue'),
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/Signup',
    component: SingupView,
    meta: { requireAuth: true },
  },
  {
    path: '/NotFound',
    name: 'NotFound',
    component: NotFoundView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ '../views/test4.vue'),
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // axios请求拦截器
    axios.interceptors.request.use((config) => {
      //为请求头对象，添加Token 验证的Authorization 字段
      config.headers.Authorization = `Bearer xxxxxx`
      return config
    })
    axios
      .post('https://your-api.com/user/role')
      .then((response) => {
        if (response.data.role === 'admin') {
          next()
        } else {
          router.push({ name: 'NotFound' })
        }
      })
      .catch((err) => {
        alert(err)
        router.push({ name: 'NotFound' })
      })
  } else {
    next()
  }
})

export default router

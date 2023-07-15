import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _674c9caa = () => interopDefault(import('../pages/admin/index.vue' /* webpackChunkName: "pages/admin/index" */))
const _39085600 = () => interopDefault(import('../pages/championship/index.vue' /* webpackChunkName: "pages/championship/index" */))
const _242abc3e = () => interopDefault(import('../pages/demo/index.vue' /* webpackChunkName: "pages/demo/index" */))
const _28ab0704 = () => interopDefault(import('../pages/exchange/index.vue' /* webpackChunkName: "pages/exchange/index" */))
const _a4246110 = () => interopDefault(import('../pages/rating/index.vue' /* webpackChunkName: "pages/rating/index" */))
const _ab21a1f4 = () => interopDefault(import('../pages/referal/index.vue' /* webpackChunkName: "pages/referal/index" */))
const _1e6ba92c = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _13722a7e = () => interopDefault(import('../pages/settings/index.vue' /* webpackChunkName: "pages/settings/index" */))
const _45505d27 = () => interopDefault(import('../pages/surfing/index.vue' /* webpackChunkName: "pages/surfing/index" */))
const _58a8b42d = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _4337ecc0 = () => interopDefault(import('../pages/admin/championship/index.vue' /* webpackChunkName: "pages/admin/championship/index" */))
const _1ecd9f90 = () => interopDefault(import('../pages/admin/demotest/index.vue' /* webpackChunkName: "pages/admin/demotest/index" */))
const _4114d000 = () => interopDefault(import('../pages/admin/lang-question/index.vue' /* webpackChunkName: "pages/admin/lang-question/index" */))
const _22ea33ee = () => interopDefault(import('../pages/admin/news/index.vue' /* webpackChunkName: "pages/admin/news/index" */))
const _c4c7ed7e = () => interopDefault(import('../pages/admin/question/index.vue' /* webpackChunkName: "pages/admin/question/index" */))
const _5fed8e67 = () => interopDefault(import('../pages/admin/surfing/index.vue' /* webpackChunkName: "pages/admin/surfing/index" */))
const _54040cda = () => interopDefault(import('../pages/auth/login.vue' /* webpackChunkName: "pages/auth/login" */))
const _7cb6b47c = () => interopDefault(import('../pages/auth/register.vue' /* webpackChunkName: "pages/auth/register" */))
const _c7df8e9c = () => interopDefault(import('../pages/rating/championship/index.vue' /* webpackChunkName: "pages/rating/championship/index" */))
const _111c0a58 = () => interopDefault(import('../pages/rating/o/index.vue' /* webpackChunkName: "pages/rating/o/index" */))
const _f12635d8 = () => interopDefault(import('../pages/rating/referal/index.vue' /* webpackChunkName: "pages/rating/referal/index" */))
const _18acf3fe = () => interopDefault(import('../pages/admin/championship/create/index.vue' /* webpackChunkName: "pages/admin/championship/create/index" */))
const _62c7ed9e = () => interopDefault(import('../pages/admin/demotest/create/index.vue' /* webpackChunkName: "pages/admin/demotest/create/index" */))
const _f4c121da = () => interopDefault(import('../pages/admin/news/create/index.vue' /* webpackChunkName: "pages/admin/news/create/index" */))
const _0427e97c = () => interopDefault(import('../pages/admin/news/notification/index.vue' /* webpackChunkName: "pages/admin/news/notification/index" */))
const _58374df0 = () => interopDefault(import('../pages/admin/question/audio/index.vue' /* webpackChunkName: "pages/admin/question/audio/index" */))
const _4bb4f340 = () => interopDefault(import('../pages/admin/question/create/index.vue' /* webpackChunkName: "pages/admin/question/create/index" */))
const _14f3aaa9 = () => interopDefault(import('../pages/admin/question/excel/index.vue' /* webpackChunkName: "pages/admin/question/excel/index" */))
const _22fbbcdc = () => interopDefault(import('../pages/admin/question/images/index.vue' /* webpackChunkName: "pages/admin/question/images/index" */))
const _72710a7a = () => interopDefault(import('../pages/admin/surfing/create/index.vue' /* webpackChunkName: "pages/admin/surfing/create/index" */))
const _5f5e9e92 = () => interopDefault(import('../pages/admin/surfing/stat/index.vue' /* webpackChunkName: "pages/admin/surfing/stat/index" */))
const _451a3dc4 = () => interopDefault(import('../pages/rating/championship/all/index.vue' /* webpackChunkName: "pages/rating/championship/all/index" */))
const _abdf1d82 = () => interopDefault(import('../pages/admin/news/notification/create/index.vue' /* webpackChunkName: "pages/admin/news/notification/create/index" */))
const _807f8e8e = () => interopDefault(import('../pages/admin/question/audio/create/index.vue' /* webpackChunkName: "pages/admin/question/audio/create/index" */))
const _d8be0010 = () => interopDefault(import('../pages/admin/question/excel/create/index.vue' /* webpackChunkName: "pages/admin/question/excel/create/index" */))
const _98c6c336 = () => interopDefault(import('../pages/admin/question/images/create/index.vue' /* webpackChunkName: "pages/admin/question/images/create/index" */))
const _1f140075 = () => interopDefault(import('../pages/admin/news/notification/edit/_id.vue' /* webpackChunkName: "pages/admin/news/notification/edit/_id" */))
const _097694ef = () => interopDefault(import('../pages/admin/question/audio/edit/_id.vue' /* webpackChunkName: "pages/admin/question/audio/edit/_id" */))
const _3869c637 = () => interopDefault(import('../pages/admin/championship/edit/_id.vue' /* webpackChunkName: "pages/admin/championship/edit/_id" */))
const _3a1bf094 = () => interopDefault(import('../pages/admin/demotest/category-create/_id.vue' /* webpackChunkName: "pages/admin/demotest/category-create/_id" */))
const _ec053d32 = () => interopDefault(import('../pages/admin/demotest/edit/_id.vue' /* webpackChunkName: "pages/admin/demotest/edit/_id" */))
const _3e2f39fc = () => interopDefault(import('../pages/admin/demotest/view/_id.vue' /* webpackChunkName: "pages/admin/demotest/view/_id" */))
const _03d30849 = () => interopDefault(import('../pages/admin/news/edit/_id.vue' /* webpackChunkName: "pages/admin/news/edit/_id" */))
const _207ace16 = () => interopDefault(import('../pages/admin/question/edit/_id.vue' /* webpackChunkName: "pages/admin/question/edit/_id" */))
const _7765cfb1 = () => interopDefault(import('../pages/admin/question/view/_id.vue' /* webpackChunkName: "pages/admin/question/view/_id" */))
const _2d106f30 = () => interopDefault(import('../pages/admin/surfing/edit/_id.vue' /* webpackChunkName: "pages/admin/surfing/edit/_id" */))
const _ebfac2c0 = () => interopDefault(import('../pages/rating/championship/view/_id.vue' /* webpackChunkName: "pages/rating/championship/view/_id" */))
const _69552a0b = () => interopDefault(import('../pages/surfing/view/_id.vue' /* webpackChunkName: "pages/surfing/view/_id" */))
const _22741af6 = () => interopDefault(import('../pages/demo/_slug.vue' /* webpackChunkName: "pages/demo/_slug" */))
const _f981874c = () => interopDefault(import('../pages/ref_id/_slug.vue' /* webpackChunkName: "pages/ref_id/_slug" */))
const _438ef96a = () => interopDefault(import('../pages/users/_id.vue' /* webpackChunkName: "pages/users/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/admin",
    component: _674c9caa,
    name: "admin___us"
  }, {
    path: "/championship",
    component: _39085600,
    name: "championship___us"
  }, {
    path: "/demo",
    component: _242abc3e,
    name: "demo___us"
  }, {
    path: "/exchange",
    component: _28ab0704,
    name: "exchange___us"
  }, {
    path: "/rating",
    component: _a4246110,
    name: "rating___us"
  }, {
    path: "/referal",
    component: _ab21a1f4,
    name: "referal___us"
  }, {
    path: "/ru",
    component: _1e6ba92c,
    name: "index___ru"
  }, {
    path: "/settings",
    component: _13722a7e,
    name: "settings___us"
  }, {
    path: "/surfing",
    component: _45505d27,
    name: "surfing___us"
  }, {
    path: "/test",
    component: _58a8b42d,
    name: "test___us"
  }, {
    path: "/uz",
    component: _1e6ba92c,
    name: "index___uz"
  }, {
    path: "/admin/championship",
    component: _4337ecc0,
    name: "admin-championship___us"
  }, {
    path: "/admin/demotest",
    component: _1ecd9f90,
    name: "admin-demotest___us"
  }, {
    path: "/admin/lang-question",
    component: _4114d000,
    name: "admin-lang-question___us"
  }, {
    path: "/admin/news",
    component: _22ea33ee,
    name: "admin-news___us"
  }, {
    path: "/admin/question",
    component: _c4c7ed7e,
    name: "admin-question___us"
  }, {
    path: "/admin/surfing",
    component: _5fed8e67,
    name: "admin-surfing___us"
  }, {
    path: "/auth/login",
    component: _54040cda,
    name: "auth-login___us"
  }, {
    path: "/auth/register",
    component: _7cb6b47c,
    name: "auth-register___us"
  }, {
    path: "/rating/championship",
    component: _c7df8e9c,
    name: "rating-championship___us"
  }, {
    path: "/rating/o",
    component: _111c0a58,
    name: "rating-o___us"
  }, {
    path: "/rating/referal",
    component: _f12635d8,
    name: "rating-referal___us"
  }, {
    path: "/ru/admin",
    component: _674c9caa,
    name: "admin___ru"
  }, {
    path: "/ru/championship",
    component: _39085600,
    name: "championship___ru"
  }, {
    path: "/ru/demo",
    component: _242abc3e,
    name: "demo___ru"
  }, {
    path: "/ru/exchange",
    component: _28ab0704,
    name: "exchange___ru"
  }, {
    path: "/ru/rating",
    component: _a4246110,
    name: "rating___ru"
  }, {
    path: "/ru/referal",
    component: _ab21a1f4,
    name: "referal___ru"
  }, {
    path: "/ru/settings",
    component: _13722a7e,
    name: "settings___ru"
  }, {
    path: "/ru/surfing",
    component: _45505d27,
    name: "surfing___ru"
  }, {
    path: "/ru/test",
    component: _58a8b42d,
    name: "test___ru"
  }, {
    path: "/uz/admin",
    component: _674c9caa,
    name: "admin___uz"
  }, {
    path: "/uz/championship",
    component: _39085600,
    name: "championship___uz"
  }, {
    path: "/uz/demo",
    component: _242abc3e,
    name: "demo___uz"
  }, {
    path: "/uz/exchange",
    component: _28ab0704,
    name: "exchange___uz"
  }, {
    path: "/uz/rating",
    component: _a4246110,
    name: "rating___uz"
  }, {
    path: "/uz/referal",
    component: _ab21a1f4,
    name: "referal___uz"
  }, {
    path: "/uz/settings",
    component: _13722a7e,
    name: "settings___uz"
  }, {
    path: "/uz/surfing",
    component: _45505d27,
    name: "surfing___uz"
  }, {
    path: "/uz/test",
    component: _58a8b42d,
    name: "test___uz"
  }, {
    path: "/admin/championship/create",
    component: _18acf3fe,
    name: "admin-championship-create___us"
  }, {
    path: "/admin/demotest/create",
    component: _62c7ed9e,
    name: "admin-demotest-create___us"
  }, {
    path: "/admin/news/create",
    component: _f4c121da,
    name: "admin-news-create___us"
  }, {
    path: "/admin/news/notification",
    component: _0427e97c,
    name: "admin-news-notification___us"
  }, {
    path: "/admin/question/audio",
    component: _58374df0,
    name: "admin-question-audio___us"
  }, {
    path: "/admin/question/create",
    component: _4bb4f340,
    name: "admin-question-create___us"
  }, {
    path: "/admin/question/excel",
    component: _14f3aaa9,
    name: "admin-question-excel___us"
  }, {
    path: "/admin/question/images",
    component: _22fbbcdc,
    name: "admin-question-images___us"
  }, {
    path: "/admin/surfing/create",
    component: _72710a7a,
    name: "admin-surfing-create___us"
  }, {
    path: "/admin/surfing/stat",
    component: _5f5e9e92,
    name: "admin-surfing-stat___us"
  }, {
    path: "/rating/championship/all",
    component: _451a3dc4,
    name: "rating-championship-all___us"
  }, {
    path: "/ru/admin/championship",
    component: _4337ecc0,
    name: "admin-championship___ru"
  }, {
    path: "/ru/admin/demotest",
    component: _1ecd9f90,
    name: "admin-demotest___ru"
  }, {
    path: "/ru/admin/lang-question",
    component: _4114d000,
    name: "admin-lang-question___ru"
  }, {
    path: "/ru/admin/news",
    component: _22ea33ee,
    name: "admin-news___ru"
  }, {
    path: "/ru/admin/question",
    component: _c4c7ed7e,
    name: "admin-question___ru"
  }, {
    path: "/ru/admin/surfing",
    component: _5fed8e67,
    name: "admin-surfing___ru"
  }, {
    path: "/ru/auth/login",
    component: _54040cda,
    name: "auth-login___ru"
  }, {
    path: "/ru/auth/register",
    component: _7cb6b47c,
    name: "auth-register___ru"
  }, {
    path: "/ru/rating/championship",
    component: _c7df8e9c,
    name: "rating-championship___ru"
  }, {
    path: "/ru/rating/o",
    component: _111c0a58,
    name: "rating-o___ru"
  }, {
    path: "/ru/rating/referal",
    component: _f12635d8,
    name: "rating-referal___ru"
  }, {
    path: "/uz/admin/championship",
    component: _4337ecc0,
    name: "admin-championship___uz"
  }, {
    path: "/uz/admin/demotest",
    component: _1ecd9f90,
    name: "admin-demotest___uz"
  }, {
    path: "/uz/admin/lang-question",
    component: _4114d000,
    name: "admin-lang-question___uz"
  }, {
    path: "/uz/admin/news",
    component: _22ea33ee,
    name: "admin-news___uz"
  }, {
    path: "/uz/admin/question",
    component: _c4c7ed7e,
    name: "admin-question___uz"
  }, {
    path: "/uz/admin/surfing",
    component: _5fed8e67,
    name: "admin-surfing___uz"
  }, {
    path: "/uz/auth/login",
    component: _54040cda,
    name: "auth-login___uz"
  }, {
    path: "/uz/auth/register",
    component: _7cb6b47c,
    name: "auth-register___uz"
  }, {
    path: "/uz/rating/championship",
    component: _c7df8e9c,
    name: "rating-championship___uz"
  }, {
    path: "/uz/rating/o",
    component: _111c0a58,
    name: "rating-o___uz"
  }, {
    path: "/uz/rating/referal",
    component: _f12635d8,
    name: "rating-referal___uz"
  }, {
    path: "/admin/news/notification/create",
    component: _abdf1d82,
    name: "admin-news-notification-create___us"
  }, {
    path: "/admin/question/audio/create",
    component: _807f8e8e,
    name: "admin-question-audio-create___us"
  }, {
    path: "/admin/question/excel/create",
    component: _d8be0010,
    name: "admin-question-excel-create___us"
  }, {
    path: "/admin/question/images/create",
    component: _98c6c336,
    name: "admin-question-images-create___us"
  }, {
    path: "/ru/admin/championship/create",
    component: _18acf3fe,
    name: "admin-championship-create___ru"
  }, {
    path: "/ru/admin/demotest/create",
    component: _62c7ed9e,
    name: "admin-demotest-create___ru"
  }, {
    path: "/ru/admin/news/create",
    component: _f4c121da,
    name: "admin-news-create___ru"
  }, {
    path: "/ru/admin/news/notification",
    component: _0427e97c,
    name: "admin-news-notification___ru"
  }, {
    path: "/ru/admin/question/audio",
    component: _58374df0,
    name: "admin-question-audio___ru"
  }, {
    path: "/ru/admin/question/create",
    component: _4bb4f340,
    name: "admin-question-create___ru"
  }, {
    path: "/ru/admin/question/excel",
    component: _14f3aaa9,
    name: "admin-question-excel___ru"
  }, {
    path: "/ru/admin/question/images",
    component: _22fbbcdc,
    name: "admin-question-images___ru"
  }, {
    path: "/ru/admin/surfing/create",
    component: _72710a7a,
    name: "admin-surfing-create___ru"
  }, {
    path: "/ru/admin/surfing/stat",
    component: _5f5e9e92,
    name: "admin-surfing-stat___ru"
  }, {
    path: "/ru/rating/championship/all",
    component: _451a3dc4,
    name: "rating-championship-all___ru"
  }, {
    path: "/uz/admin/championship/create",
    component: _18acf3fe,
    name: "admin-championship-create___uz"
  }, {
    path: "/uz/admin/demotest/create",
    component: _62c7ed9e,
    name: "admin-demotest-create___uz"
  }, {
    path: "/uz/admin/news/create",
    component: _f4c121da,
    name: "admin-news-create___uz"
  }, {
    path: "/uz/admin/news/notification",
    component: _0427e97c,
    name: "admin-news-notification___uz"
  }, {
    path: "/uz/admin/question/audio",
    component: _58374df0,
    name: "admin-question-audio___uz"
  }, {
    path: "/uz/admin/question/create",
    component: _4bb4f340,
    name: "admin-question-create___uz"
  }, {
    path: "/uz/admin/question/excel",
    component: _14f3aaa9,
    name: "admin-question-excel___uz"
  }, {
    path: "/uz/admin/question/images",
    component: _22fbbcdc,
    name: "admin-question-images___uz"
  }, {
    path: "/uz/admin/surfing/create",
    component: _72710a7a,
    name: "admin-surfing-create___uz"
  }, {
    path: "/uz/admin/surfing/stat",
    component: _5f5e9e92,
    name: "admin-surfing-stat___uz"
  }, {
    path: "/uz/rating/championship/all",
    component: _451a3dc4,
    name: "rating-championship-all___uz"
  }, {
    path: "/ru/admin/news/notification/create",
    component: _abdf1d82,
    name: "admin-news-notification-create___ru"
  }, {
    path: "/ru/admin/question/audio/create",
    component: _807f8e8e,
    name: "admin-question-audio-create___ru"
  }, {
    path: "/ru/admin/question/excel/create",
    component: _d8be0010,
    name: "admin-question-excel-create___ru"
  }, {
    path: "/ru/admin/question/images/create",
    component: _98c6c336,
    name: "admin-question-images-create___ru"
  }, {
    path: "/uz/admin/news/notification/create",
    component: _abdf1d82,
    name: "admin-news-notification-create___uz"
  }, {
    path: "/uz/admin/question/audio/create",
    component: _807f8e8e,
    name: "admin-question-audio-create___uz"
  }, {
    path: "/uz/admin/question/excel/create",
    component: _d8be0010,
    name: "admin-question-excel-create___uz"
  }, {
    path: "/uz/admin/question/images/create",
    component: _98c6c336,
    name: "admin-question-images-create___uz"
  }, {
    path: "/ru/admin/news/notification/edit/:id?",
    component: _1f140075,
    name: "admin-news-notification-edit-id___ru"
  }, {
    path: "/ru/admin/question/audio/edit/:id?",
    component: _097694ef,
    name: "admin-question-audio-edit-id___ru"
  }, {
    path: "/uz/admin/news/notification/edit/:id?",
    component: _1f140075,
    name: "admin-news-notification-edit-id___uz"
  }, {
    path: "/uz/admin/question/audio/edit/:id?",
    component: _097694ef,
    name: "admin-question-audio-edit-id___uz"
  }, {
    path: "/admin/news/notification/edit/:id?",
    component: _1f140075,
    name: "admin-news-notification-edit-id___us"
  }, {
    path: "/admin/question/audio/edit/:id?",
    component: _097694ef,
    name: "admin-question-audio-edit-id___us"
  }, {
    path: "/ru/admin/championship/edit/:id?",
    component: _3869c637,
    name: "admin-championship-edit-id___ru"
  }, {
    path: "/ru/admin/demotest/category-create/:id?",
    component: _3a1bf094,
    name: "admin-demotest-category-create-id___ru"
  }, {
    path: "/ru/admin/demotest/edit/:id?",
    component: _ec053d32,
    name: "admin-demotest-edit-id___ru"
  }, {
    path: "/ru/admin/demotest/view/:id?",
    component: _3e2f39fc,
    name: "admin-demotest-view-id___ru"
  }, {
    path: "/ru/admin/news/edit/:id?",
    component: _03d30849,
    name: "admin-news-edit-id___ru"
  }, {
    path: "/ru/admin/question/edit/:id?",
    component: _207ace16,
    name: "admin-question-edit-id___ru"
  }, {
    path: "/ru/admin/question/view/:id?",
    component: _7765cfb1,
    name: "admin-question-view-id___ru"
  }, {
    path: "/ru/admin/surfing/edit/:id?",
    component: _2d106f30,
    name: "admin-surfing-edit-id___ru"
  }, {
    path: "/ru/rating/championship/view/:id?",
    component: _ebfac2c0,
    name: "rating-championship-view-id___ru"
  }, {
    path: "/uz/admin/championship/edit/:id?",
    component: _3869c637,
    name: "admin-championship-edit-id___uz"
  }, {
    path: "/uz/admin/demotest/category-create/:id?",
    component: _3a1bf094,
    name: "admin-demotest-category-create-id___uz"
  }, {
    path: "/uz/admin/demotest/edit/:id?",
    component: _ec053d32,
    name: "admin-demotest-edit-id___uz"
  }, {
    path: "/uz/admin/demotest/view/:id?",
    component: _3e2f39fc,
    name: "admin-demotest-view-id___uz"
  }, {
    path: "/uz/admin/news/edit/:id?",
    component: _03d30849,
    name: "admin-news-edit-id___uz"
  }, {
    path: "/uz/admin/question/edit/:id?",
    component: _207ace16,
    name: "admin-question-edit-id___uz"
  }, {
    path: "/uz/admin/question/view/:id?",
    component: _7765cfb1,
    name: "admin-question-view-id___uz"
  }, {
    path: "/uz/admin/surfing/edit/:id?",
    component: _2d106f30,
    name: "admin-surfing-edit-id___uz"
  }, {
    path: "/uz/rating/championship/view/:id?",
    component: _ebfac2c0,
    name: "rating-championship-view-id___uz"
  }, {
    path: "/admin/championship/edit/:id?",
    component: _3869c637,
    name: "admin-championship-edit-id___us"
  }, {
    path: "/admin/demotest/category-create/:id?",
    component: _3a1bf094,
    name: "admin-demotest-category-create-id___us"
  }, {
    path: "/admin/demotest/edit/:id?",
    component: _ec053d32,
    name: "admin-demotest-edit-id___us"
  }, {
    path: "/admin/demotest/view/:id?",
    component: _3e2f39fc,
    name: "admin-demotest-view-id___us"
  }, {
    path: "/admin/news/edit/:id?",
    component: _03d30849,
    name: "admin-news-edit-id___us"
  }, {
    path: "/admin/question/edit/:id?",
    component: _207ace16,
    name: "admin-question-edit-id___us"
  }, {
    path: "/admin/question/view/:id?",
    component: _7765cfb1,
    name: "admin-question-view-id___us"
  }, {
    path: "/admin/surfing/edit/:id?",
    component: _2d106f30,
    name: "admin-surfing-edit-id___us"
  }, {
    path: "/rating/championship/view/:id?",
    component: _ebfac2c0,
    name: "rating-championship-view-id___us"
  }, {
    path: "/ru/surfing/view/:id?",
    component: _69552a0b,
    name: "surfing-view-id___ru"
  }, {
    path: "/uz/surfing/view/:id?",
    component: _69552a0b,
    name: "surfing-view-id___uz"
  }, {
    path: "/ru/demo/:slug",
    component: _22741af6,
    name: "demo-slug___ru"
  }, {
    path: "/ru/ref_id/:slug?",
    component: _f981874c,
    name: "ref_id-slug___ru"
  }, {
    path: "/ru/users/:id?",
    component: _438ef96a,
    name: "users-id___ru"
  }, {
    path: "/surfing/view/:id?",
    component: _69552a0b,
    name: "surfing-view-id___us"
  }, {
    path: "/uz/demo/:slug",
    component: _22741af6,
    name: "demo-slug___uz"
  }, {
    path: "/uz/ref_id/:slug?",
    component: _f981874c,
    name: "ref_id-slug___uz"
  }, {
    path: "/uz/users/:id?",
    component: _438ef96a,
    name: "users-id___uz"
  }, {
    path: "/demo/:slug",
    component: _22741af6,
    name: "demo-slug___us"
  }, {
    path: "/ref_id/:slug?",
    component: _f981874c,
    name: "ref_id-slug___us"
  }, {
    path: "/users/:id?",
    component: _438ef96a,
    name: "users-id___us"
  }, {
    path: "/",
    component: _1e6ba92c,
    name: "index___us"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}

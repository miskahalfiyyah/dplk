import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: 'informasi-peserta',
  },
  {
    path: '/informasi-peserta',
    name: 'informasi-peserta',
    component: () => import('@/views/informasi-peserta/InformasiPeserta.vue'),
  },
  {
    path: '/pengkinian-data',
    name: 'pengkinian-data',
    component: () => import('@/views/pengkinian-data/PengkinianData.vue'),
  },
  {
    path: '/harga-unit',
    name: 'harga-unit',
    component: () => import('@/views/harga-unit/HargaUnit.vue'),
  },
  {
    path: '/bukti-transfer',
    name: 'bukti-transfer',
    component: () => import('@/views/bukti-transfer/BuktiTransfer.vue'),
  },
  {
    path: '/bukti-potong-pajak',
    name: 'bukti-potong-pajak',
    component: () => import('@/views/bukti-potong-pajak/BuktiPotongPajak.vue'),
  },
  {
    path: '/claim-tracker',
    name: 'claim-tracker',
    component: () => import('@/views/claim-tracker/ClaimTracker.vue'),
  },
  {
    path: '/typography',
    name: 'typography',
    component: () => import('@/views/typography/Typography.vue'),
  },
  {
    path: '/icons',
    name: 'icons',
    component: () => import('@/views/icons/Icons.vue'),
  },
  {
    path: '/cards',
    name: 'cards',
    component: () => import('@/views/cards/Card.vue'),
  },
  {
    path: '/simple-table',
    name: 'simple-table',
    component: () => import('@/views/simple-table/SimpleTable.vue'),
  },
  {
    path: '/form-layouts',
    name: 'form-layouts',
    component: () => import('@/views/form-layouts/FormLayouts.vue'),
  },
  {
    path: '/pages/informasi-saldo',
    name: 'pages-informasi-saldo',
    component: () => import('@/views/pages/informasi-saldo/InformasiSaldo.vue'),
  },
  {
    path: '/history-claim',
    name: 'history-claim',
    component: () => import('@/views/history-claim/HistoryClaim.vue'),
  },
  {
    path: '/simulasi',
    name: 'simulasi',
    component: () => import('@/views/simulasi/Simulasi.vue'),
  },
  {
    path: '/quisioner',
    name: 'quisioner',
    component: () => import('@/views/quisioner/Quisioner.vue'),
  },
  {
    path: '/download',
    name: 'download',
    component: () => import('@/views/pages/download-file/Download.vue'),
  },
  {
    path: '/pages/login',
    name: 'pages-login',
    component: () => import('@/views/pages/Login.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register-peserta',
    name: 'pages-register-peserta',
    component: () => import('@/views/pages/register-peserta/RegisterPeserta.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/upload-syarat',
    name: 'pages-upload-syarat',
    component: () => import('@/views/pages/register-peserta/UploadSyarat.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/informasi-skema',
    name: 'pages-informasi-skema',
    component: () => import('@/views/pages/register-peserta/InformasiSkema.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/change-password',
    name: 'pages-change-password',
    component: () => import('@/views/pages/change-password/ChangePass.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/privacy-policy',
    name: 'pages-privacy-policy',
    component: () => import('@/views/pages/disclaimer/Disclaimer.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/pages/register',
    name: 'pages-register',
    component: () => import('@/views/pages/Register.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '/error-404',
    name: 'error-404',
    component: () => import('@/views/Error.vue'),
    meta: {
      layout: 'blank',
    },
  },
  {
    path: '*',
    redirect: 'error-404',
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router

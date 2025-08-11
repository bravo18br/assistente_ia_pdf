import { createRouter, createWebHistory } from 'vue-router'

import MainLayout from '@/layouts/MainLayout.vue'
import PaginaInicial from '../views/PaginaInicial.vue'

import LoginLayout from '@/layouts/LoginLayout.vue'
import TelaLogin from '../views/TelaLogin.vue'

import LayoutDocumento from '@/layouts/LayoutDocumento.vue'
import TelaDocumentos from '@/views/TelaDocumentos.vue'
import DfdDoc from '@/components/Dfd/DfdDoc.vue'
import EtpDoc from '@/components/Etp/EtpDoc.vue'
import TrDoc from '@/components/Tr/TrDoc.vue'
import TesteTeste from '@/components/TesteTeste.vue'

const routes = [
  {
    path: '/',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'pagina-inicial',
        component: PaginaInicial
      }
    ]
  },
  {
    path: '/login',
    component: LoginLayout,
    children: [
      {
        path: '',
        name: 'tela-login',
        component: TelaLogin
      }
    ]
  },
  {
    path: '/documento',
    component: LayoutDocumento,
    children: [
      {
        path: ':tipo',
        name: 'tela-documentos',
        component: TelaDocumentos,
        children: [
          {
            path:'dfd',
            name:'documento-dfd',
            component: DfdDoc,
          },

          {
            path:'etp',
            name:'documento-etp',
            component: EtpDoc,
          },

          {
            path:'tr',
            name:'documento-tr',
            component: TrDoc,
          },

          {
            path:'...',
            name:'documento-...',
            component: TesteTeste
          }

        ]
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

  export default router
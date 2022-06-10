import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import i18n from '@/i18n'

import '@/style/index.scss'

import '@/permission'

createApp(App).use(store).use(router).use(ElementPlus, { locale }).use(i18n).mount('#app')

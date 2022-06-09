import { createI18n } from 'vue-i18n'
import zh from './lang/zh'
const messages = {
  en: {
    message: {
      ...zh
    }
  },
  zh: {
    message: {
      ...zh
    }
  }
}
const locale = 'zh'
const i18n = createI18n({
  // 使用composition API
  legacy: true,
  // 全局使用 t 函数
  globalInjection: true,
  locale,
  messages
})

export function generateTitle(title) {
  return i18n.global.t('message.route.' + title)
}

export default i18n

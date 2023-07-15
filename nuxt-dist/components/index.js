export const AdminDemoQuestionTable = () => import('../../components/AdminDemoQuestionTable.vue' /* webpackChunkName: "components/admin-demo-question-table" */).then(c => wrapFunctional(c.default || c))
export const AdminQuestionTable = () => import('../../components/AdminQuestionTable.vue' /* webpackChunkName: "components/admin-question-table" */).then(c => wrapFunctional(c.default || c))
export const AdminTableHeader = () => import('../../components/AdminTableHeader.vue' /* webpackChunkName: "components/admin-table-header" */).then(c => wrapFunctional(c.default || c))
export const ChampionshipTable = () => import('../../components/ChampionshipTable.vue' /* webpackChunkName: "components/championship-table" */).then(c => wrapFunctional(c.default || c))
export const Footer = () => import('../../components/Footer.vue' /* webpackChunkName: "components/footer" */).then(c => wrapFunctional(c.default || c))
export const News = () => import('../../components/News.vue' /* webpackChunkName: "components/news" */).then(c => wrapFunctional(c.default || c))
export const NuxtLogo = () => import('../../components/NuxtLogo.vue' /* webpackChunkName: "components/nuxt-logo" */).then(c => wrapFunctional(c.default || c))
export const TestViewTable = () => import('../../components/TestViewTable.vue' /* webpackChunkName: "components/test-view-table" */).then(c => wrapFunctional(c.default || c))
export const Tutorial = () => import('../../components/Tutorial.vue' /* webpackChunkName: "components/tutorial" */).then(c => wrapFunctional(c.default || c))
export const CkeditorNuxt = () => import('../../components/ckeditorNuxt.vue' /* webpackChunkName: "components/ckeditor-nuxt" */).then(c => wrapFunctional(c.default || c))
export const TelegramLogin = () => import('../../components/telegram-login.vue' /* webpackChunkName: "components/telegram-login" */).then(c => wrapFunctional(c.default || c))
export const UserStatus = () => import('../../components/user-status.vue' /* webpackChunkName: "components/user-status" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}

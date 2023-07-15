

export const Constants = {
  COMPONENT_OPTIONS_KEY: "nuxtI18n",
  STRATEGIES: {"PREFIX":"prefix","PREFIX_EXCEPT_DEFAULT":"prefix_except_default","PREFIX_AND_DEFAULT":"prefix_and_default","NO_PREFIX":"no_prefix"},
  REDIRECT_ON_OPTIONS: {"ALL":"all","ROOT":"root","NO_PREFIX":"no prefix"},
}
export const nuxtOptions = {
  isUniversalMode: false,
  trailingSlash: undefined,
}
export const options = {
  vueI18n: {},
  vueI18nLoader: false,
  locales: [{"code":"us","name":"English","file":"us.js"},{"code":"ru","name":"Русский","file":"ru.js"},{"code":"uz","name":"O'zbekcha","file":"uz.js"}],
  defaultLocale: "us",
  defaultDirection: "ltr",
  routesNameSeparator: "___",
  defaultLocaleRouteNameSuffix: "default",
  sortRoutes: true,
  strategy: "prefix_except_default",
  lazy: true,
  langDir: "/Users/akbarali/Projects/questa/lang",
  rootRedirect: null,
  detectBrowserLanguage: {"alwaysRedirect":false,"cookieCrossOrigin":false,"cookieDomain":null,"cookieKey":"i18n_redirected","cookieSecure":false,"fallbackLocale":"","redirectOn":"root","useCookie":true},
  differentDomains: false,
  baseUrl: "",
  vuex: {"moduleName":"i18n","syncRouteParams":true},
  parsePages: true,
  pages: {},
  skipSettingLocaleOnNavigate: false,
  onBeforeLanguageSwitch: () => {},
  onLanguageSwitched: () => null,
  normalizedLocales: [{"code":"us","name":"English","file":"us.js"},{"code":"ru","name":"Русский","file":"ru.js"},{"code":"uz","name":"O'zbekcha","file":"uz.js"}],
  localeCodes: ["us","ru","uz"],
  additionalMessages: [],
}

export const localeMessages = {
  'us.js': () => import('../../lang/us.js' /* webpackChunkName: "lang-us.js" */),
  'ru.js': () => import('../../lang/ru.js' /* webpackChunkName: "lang-ru.js" */),
  'uz.js': () => import('../../lang/uz.js' /* webpackChunkName: "lang-uz.js" */),
}

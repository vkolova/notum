import AppStore from '~~/stores/app'

const language = AppStore.language
const translations = require(`~~/i18n/${language}.json`);

const gettext = text => {
  process.env.DEVELOPMENT && !translations[text] && console.log(text)
  return translations[text] || text
}

export default gettext

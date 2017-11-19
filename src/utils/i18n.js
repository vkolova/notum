import AppStore from '~~/stores/app'

const language = AppStore.language
const translations = require(`~~/i18n/${language}.json`);

const gettext = text => translations[text]

export default gettext

import Vue from 'vue';
// eslint-disable-next-line import/no-extraneous-dependencies
import VueI18n from 'vue-i18n';
import enUS from './en-US';
import ptBr from './pt-BR';

Vue.use(VueI18n);

const messages = {
  'en-US': enUS,
  'pt-BR': ptBr,
};

const i18n = new VueI18n({
  locale: 'pt-BR',
  messages,
});

export { i18n };

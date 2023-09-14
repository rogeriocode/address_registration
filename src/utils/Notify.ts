import Vue from 'vue';

const vue = new Vue();
const messageTitle = 'Erro na busca de endereço';

export const notify = (text: string, type: 'success' | 'error', title: string = messageTitle) => {
  vue.$notify({
    group: 'address',
    type,
    title,
    text,
  });
};

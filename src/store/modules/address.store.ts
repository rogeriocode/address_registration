import { actionsStore } from '@/views/home/store/actions.store';
import { mutationsStore } from '@/views/home/store/mutations.store';
import { stateStore } from '@/views/home/store/state.store';

const state = {
  ...stateStore,
};
const actions = {
  ...actionsStore,
};
const mutations = {
  ...mutationsStore,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};

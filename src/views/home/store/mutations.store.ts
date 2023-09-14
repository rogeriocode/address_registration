import { i18n } from '@/plugins/i18n';
import Vue from 'vue';
import { IAddress, IAddressMutations, IAddressState } from '../models';

export const mutationsStore: IAddressMutations = {
  SET_SEARCH_ADDRESS(state: IAddressState, searchAddress: IAddress) {
    state.searchAddress = searchAddress;
  },
  ADD_ADDRESS(state: IAddressState, address: IAddress) {
    let accountAddress = state.address.length;

    address.id = accountAddress += 1;
    address.title = `${i18n.t('ADDRESS')} ${(accountAddress += 1)}`;
    address.createDate = new Date();
    address.updateDate = null;

    state.address.unshift(address);
  },
  UPDATE_ADDRESS(state: IAddressState, address: IAddress) {
    const {
      publicPlace,
      complement,
      neighborhood,
      locality,
      uf,
      id,
    } = address;

    const addressIndex = state.address.findIndex(
      (el: IAddress) => Number(el.id) === Number(id),
    );

    Vue.set(state.address[addressIndex], 'publicPlace', publicPlace);
    Vue.set(state.address[addressIndex], 'complement', complement);
    Vue.set(state.address[addressIndex], 'neighborhood', neighborhood);
    Vue.set(state.address[addressIndex], 'locality', locality);
    Vue.set(state.address[addressIndex], 'uf', uf);
    Vue.set(state.address[addressIndex], 'updateDate', new Date());
  },
  DELETE_ADDRESS(state: IAddressState, address: IAddress) {
    const { id } = address;
    state.address = state.address.filter(
      (el: IAddress) => Number(el.id) !== Number(id),
    );
  },
  TOGGLE_VISIBLE_DIALOG_ADDRESS(state: IAddressState) {
    state.visibleDialogAddAddress = !state.visibleDialogAddAddress;
  },
};

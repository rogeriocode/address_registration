import { IAddress, IAddressMutations, IAddressState } from '../models';

export const mutationsStore: IAddressMutations = {
  SET_SEARCH_ADDRESS(state: IAddressState, searchAddress: IAddress) {
    state.searchAddress = searchAddress;
  },
  ADD_ADDRESS(state: IAddressState, address: IAddress) {
    state.address.push(address);
  },
  TOGGLE_VISIBLE_DIALOG_ADDRESS(state: IAddressState) {
    state.visibleDialogAddAddress = !state.visibleDialogAddAddress;
  },
};

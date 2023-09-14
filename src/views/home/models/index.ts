import { ActionContext } from 'vuex';

export interface IAddress {
  title: string;
  publicPlace: string;
  complement: string;
  neighborhood: string;
  locality: string;
  uf: string;
  createDate: Date;
  updateDate: Date | null;
}

export interface IAddressState {
  address: IAddress[];
  searchAddress: IAddress | null;
  visibleDialogAddAddress: boolean;
}

export interface IAddressMutations {
  ADD_ADDRESS: (state: IAddressState, address: IAddress) => void;
  SET_SEARCH_ADDRESS: (state: IAddressState, searchAddress: IAddress) => void;
  TOGGLE_VISIBLE_DIALOG_ADDRESS: (state: IAddressState) => void;
}

export interface IActionsStore {
  fetchAddress: (context: ActionContext<IAddressState, unknown>, CEP: string) => void;
}

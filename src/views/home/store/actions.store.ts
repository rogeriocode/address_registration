import { notify } from '@/utils/Notify';
import { ActionContext } from 'vuex';
import { IActionsStore, IAddressState } from '../models';
import addressServices from '../services/address.service';

export const actionsStore: IActionsStore = {
  async fetchAddress(context: ActionContext<IAddressState, unknown>, CEP: string): Promise<void> {
    const { commit } = context;
    const cep = CEP.replace(/\./g, '');

    try {
      const data = await addressServices.getAddress(cep);
      if (data.erro) {
        notify('Não encontramos o endereço', 'error');
        commit('SET_SEARCH_ADDRESS', null);
        return;
      }

      const {
        logradouro: publicPlace,
        complemento: complement,
        bairro: neighborhood,
        localidade: locality,
        uf,
      } = data;

      const addressDTO = {
        title: null,
        publicPlace,
        complement,
        neighborhood,
        locality,
        uf,
        createDate: new Date(),
        updateDate: null,
      };

      commit('SET_SEARCH_ADDRESS', addressDTO);
      commit('TOGGLE_VISIBLE_DIALOG_ADDRESS');
    } catch (err: any) {
      notify(err, 'error');
    }
  },
};

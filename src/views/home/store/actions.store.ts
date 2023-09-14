import { notify } from '@/utils/Notify';
import { ActionContext } from 'vuex';
import { IActionsStore, IAddressState } from '../models';
import addressServices from '../services/address.service';

export const actionsStore: IActionsStore = {
  async fetchAddress(context: ActionContext<IAddressState, unknown>, CEP: string): Promise<void> {
    const { commit } = context;
    const zipCode = CEP.replace(/\./g, '');

    try {
      const data = await addressServices.getAddress(zipCode);

      if (data.erro) {
        notify('Não encontramos o endereço', 'error');
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
        publicPlace,
        complement,
        neighborhood,
        locality,
        uf,
      };

      commit('SET_SEARCH_ADDRESS', addressDTO);
      commit('TOGGLE_VISIBLE_DIALOG_ADDRESS');
    } catch (err: any) {
      notify(err, 'error');
    }
  },
};

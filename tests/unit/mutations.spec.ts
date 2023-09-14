import { IAddress, IAddressState } from '@/views/home/models';
import { mutationsStore } from '@/views/home/store/mutations.store';
import { faker } from '@faker-js/faker';

describe('mutationsStore', () => {
  const state: IAddressState = {
    address: [],
    searchAddress: null,
    visibleDialogAddAddress: false,
  };
  const address: IAddress = {
    id: faker.number.int(),
    title: faker.lorem.word(),
    publicPlace: faker.lorem.word(),
    complement: faker.lorem.word(),
    neighborhood: faker.lorem.word(),
    locality: faker.lorem.word(),
    uf: faker.lorem.word(),
    createDate: new Date('2023-09-14T20:12:02.592Z'),
    updateDate: null,
  };

  describe('SET_SEARCH_ADDRESS', () => {
    it('should update address with search value', () => {
      const { SET_SEARCH_ADDRESS } = mutationsStore;

      SET_SEARCH_ADDRESS(state, address);

      expect(state.searchAddress).toEqual(address);
    });
  });

  describe('ADD_ADDRESS', () => {
    it('should add address to list', () => {
      const { ADD_ADDRESS } = mutationsStore;

      ADD_ADDRESS(state, address);

      expect(state.address).toEqual([address]);
    });
  });

  describe('UPDATE_ADDRESS', () => {
    it('should update specific address in the list', () => {
      const { UPDATE_ADDRESS } = mutationsStore;

      UPDATE_ADDRESS(state, address);

      expect(state.address[0]).toEqual(address);
    });
  });

  describe('DELETE_ADDRESS', () => {
    it('should delete specific address in the list', () => {
      const { DELETE_ADDRESS } = mutationsStore;

      DELETE_ADDRESS(state, address);

      expect(state.address.length).toBe(0);
    });
  });
});

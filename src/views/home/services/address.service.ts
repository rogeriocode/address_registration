import { api } from '@/services/axios';

class AddressServices {
  constructor(private readonly $api = api) {}

  async getAddress(CEP: string) {
    try {
      const { data } = await this.$api.get(`ws/${CEP}/json/`);
      return data;
    } catch (err: any) {
      throw new Error(err);
    }
  }
}

export default new AddressServices();

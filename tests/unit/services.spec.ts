import AddressServices from '@/views/home/services/address.service';
import { AxiosInstance } from 'axios';

describe('AddressServices', () => {
  const createApi = {
    get: jest.fn(),
  } as unknown as AxiosInstance;

  afterEach(() => {
    jest.clearAllMocks();
  });

  const addressService = new AddressServices(createApi);

  it('should call the API with the correct endpoint and return the response data', async () => {
    const zipCode = '11111-111';
    const responseData = {
      logradouro: 'Praça da Sé',
      bairro: 'Sé',
      localidade: 'São Paulo',
      uf: 'SP',
    };

    (createApi.get as unknown as jest.Mock<AxiosInstance>)
      .mockResolvedValueOnce({ data: responseData } as never);

    const result = await addressService.getAddress(zipCode);

    expect(createApi.get).toHaveBeenCalledTimes(1);
    expect(createApi.get).toHaveBeenCalledWith(`ws/${zipCode}/json/`);

    expect(result).toEqual(responseData);
  });

  it('should rethrow an error when the API call fails', async () => {
    const zipCode = '11111-111';
    const mockError = new Error('Network error');

    await expect(addressService.getAddress(zipCode)).rejects.toThrow(mockError);

    expect(createApi.get).toHaveBeenCalledTimes(1);
    expect(createApi.get).toHaveBeenCalledWith(`ws/${zipCode}/json/`);
  });
});

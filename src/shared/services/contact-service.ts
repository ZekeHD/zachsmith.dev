import { AxiosResponse } from 'axios';

import HttpService from './axios-service';
import { Contact } from '../interfaces/Contact';

export default class ContactService {
  private ENDPOINT_URL = '/contact';

  constructor(public httpService = new HttpService()) {}

  public async getContacts(): Promise<AxiosResponse<Contact[]>> {
    return await this.httpService.axiosInstance.get(this.ENDPOINT_URL);
  }
}
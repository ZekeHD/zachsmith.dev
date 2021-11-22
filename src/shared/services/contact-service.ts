import HttpService from './axios-service';

export default class ContactService {
  private ENDPOINT_URL = '/contact'

  constructor(public httpService = new HttpService()) {}

  public async getContacts() {
    return await this.httpService.axiosInstance.get(this.ENDPOINT_URL);
  }
}
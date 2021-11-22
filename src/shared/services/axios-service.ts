import axios, { AxiosInstance } from 'axios';

export default class HttpService {
  axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: 'https://5f7a034ee402340016f936a9.mockapi.io'
    });
  }
}
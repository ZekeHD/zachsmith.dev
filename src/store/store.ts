import { InjectionKey } from '@vue/runtime-core';
import { createStore, Store } from 'vuex';

import ContactService from '../shared/services/contact-service';

const contactService = new ContactService();

export interface State {
  contacts: [];
};

export const key: InjectionKey<Store<State>> = Symbol();

export const store = createStore<State>({
  state: {
    contacts: [],
  },
  actions: {
    async getContacts({ commit }) {
      try {
        commit('updateContacts', (await contactService.getContacts()).data);
      } catch (e) {
        console.error('error', e);
      }
    },
  },
  mutations: {
    updateContacts(state, data) {
      state.contacts = data;
    },
  },
  getters: {
    contactsExcludingId: state =>
      state.contacts.filter((contact: any) => contact.id !== '4'),
  },
});
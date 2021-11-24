import { InjectionKey } from '@vue/runtime-core';
import { createStore, Store } from 'vuex';

import ContactService from '../shared/services/contact-service';
import { Contact } from '../shared/interfaces/Contact';

const contactService = new ContactService();

export interface State {
  contacts: Contact[];
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
    updateContacts(state, data: Contact[]) {
      state.contacts = data;
    },
  },
  getters: {
    contactsExcludingId: (state): Contact[] =>
      state.contacts.filter((contact: any) => contact.id !== '4'),
  },
});
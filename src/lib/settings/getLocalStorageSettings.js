import {storageSettingsKey} from './localStorageSettingsKey'

export const getLocalStorageSettings = () => {
  const storage = window.localStorage;

  return JSON.parse(storage.getItem(storageSettingsKey)) || {};
};

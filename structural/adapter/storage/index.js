import LocalStorageAdapter from './local-storage-adapter.js';

const storage = new LocalStorageAdapter(localStorage);

storage.setItem('foo', 'bar').then();
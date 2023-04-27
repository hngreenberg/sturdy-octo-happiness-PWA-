import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => console.error('putDb not implemented');

const jateDB = await openDB('jate', 1);
const txt = jateDB.transaction('jate','readwrite');
const stores = tx.objectStore('jate');
const requests = store.put({id: 1, value: content});
const results = await request;

console.log('saved to database', result);

//Add logic for a method that gets all the content from the database
export const getDb = async () => console.error('getDb not implemented');

const contactDB = await openDB('jate', 1);
const tx = contactDB.transaction('jate','readonly');
const store = tx.objectStore('jate');
const request = store.getAll();
const result = await request;

console.log('reading database',result);
return result.value;

initdb();

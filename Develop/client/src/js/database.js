import { openDB } from 'idb';

// Asynchronous function called initdb that initialises the IndexedDB database
const initdb = async () =>
  // Uses the openDB function from the idb library to open or create a database named jate and the 1, indicates the version of database
  openDB('jate', 1, {
    // The upgrade(db) is called only when the database is being created for the first time or if there is a version change
    upgrade(db) {
      // This checks if an object store named 'jate' already exists and if its found a message is logged to state this, and the function returns, preventing further actions
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      // If the 'jate' object store doesn't exist, this line creates it 
      // 'keyPath: 'id'' - Each record in this object store will have a unique key, which will be stored in a field called 'id'
      // 'autoIncrememnet: true:' - The 'id' field will automatically be incremented for each new record, so you don't need to manually specify a unique 'id' when adding records
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// DONE: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {
  console.log('PUT to the database');

  // Creates a connection to the database
  const db = await openDB('jate', 1);

  // Creates a new transaction and specify the database and data privileges
  const tx = db.transaction('jate', 'readwrite');

  // Opens the desired object store
  const store = tx.objectStore('jate');

  // Uses the .put() method to update the database with the content
  const request = store.put({ id: 1, value: content });

  // Gets confirmation of the request
  const result = await request;
  console.log('🚀 - data saved to the database', result);
};

// DONE: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  console.log('GET all from the database');

  // Creates a connection to the database
  const db = await openDB('jate', 1);

  // Creates a new transaction and specify the database and data privileges
  const tx = db.transaction('jate', 'readonly');

  // Opens the desired object store
  const store = tx.objectStore('jate');

  // Uses the .getAll() method to get all data in the database
  const request = store.getAll();

  // Gets confirmation of the request
  const result = await request;
  console.log('🚀 - data retrieved from the database', result);
  return result?.length ? result[0].value : null;
};

initdb();

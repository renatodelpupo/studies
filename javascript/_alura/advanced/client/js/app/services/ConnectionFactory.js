const dbName = 'aluraframe'
const stores = ['trades']
const version = 1

class ConnectionFactory {

  constructor() {
    throw new Error('ConnectionFactory instances cannot be created')
  }

  static getConnection() {
    return new Promise((resolve, reject) => {
      const openRequest = window.indexedDB.open(dbName, version)

      openRequest.onupgradeneeded = event => {
        ConnectionFactory._createStores(event.target.result)
      }

      openRequest.onsuccess = event => {
        resolve(event.target.result)
      }

      openRequest.onerror = event => {
        console.log(event.target.error)
        reject(event.target.error.name)
      }
    })
  }

  static _createStores(connection) {
    stores.forEach(store => {
      if (connection.objectStoreNames.contains(store)) connection.deleteObjectStore(store)
      connection.createObjectStore(store, { autoIncrement: true })
    })
  }
}
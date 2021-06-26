//Creamos la DB dentro de una función IIFE, que se ejucuta localmente en este archivo

(function () {

    let DB;

    document.addEventListener('DOMContentLoaded', () => {

        createDB();

    });

    function createDB() {
        const createDB = window.indexedDB.open('crm', 1);

        createDB.onerror = function () {
            console.log('something wrong happened');
        };

        createDB.onsuccess = function () {
            DB = createDB.result;
            console.log('exito')
        };

        createDB.onupgradeneeded = function(e) {
            const db = e.target.result;

            const objectStore = db.createObjectStore ('crm', {
                keyPath: 'id',
                autoincrement: true
            });

            objectStore.createIndex('name', 'name', {unique: false});
            objectStore.createIndex('email', 'email', {unique: true});
            objectStore.createIndex('telephone', 'telephone', {unique: false});
            objectStore.createIndex('company', 'company', {unique: false});
            objectStore.createIndex('id', 'id', {unique: true});

            console.log('DB ready and created');
        }

    }

}) ();
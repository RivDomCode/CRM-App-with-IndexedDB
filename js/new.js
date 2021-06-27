( function() {
    let DB;

    const newForm = document.querySelector('#new-form');

    document.addEventListener('DOMContentLoaded', () => {

        connectToDB();

        newForm.addEventListener('submit', validateClient);
    });

    function connectToDB() {
        const openConnection = window.indexedDB.open('crm', 1);

        openConnection.onerror = function() {
            console.log('connection to DB was not possible')
         }

         openConnection.onsuccess = function () {
            DB = openConnection.result;
         }
    }

    function validateClient(e) {
        e.preventDefault();

        //reading the input values
        const name = document.querySelector('#name').value;
        const email = document.querySelector('#email').value;
        const telephone = document.querySelector('#telephone').value;
        const company = document.querySelector('#company').value;

       //validate no empty inputs
        if ( name === '' || email === '' || telephone === '' || company === '' ) {
            printAlert('All fields are required', 'error')

            return;
        }
    }

    //Create alert message for error or success
    function printAlert(message, type) {

        //Do not have several error or success messages

        const alerta = document.querySelector('.alerta');

        if(!alerta){
            const divMessage = document.createElement('div');
            divMessage.classList.add('alert', 'text-center', 'mt-4', 'alerta');
    
            if(type === 'error') {
                divMessage.classList.add('alert-danger');
            } else {
                divMessage.classList.add('alert-success');
            }
    
            divMessage.textContent = message;
    
            newForm.appendChild(divMessage);
    
            setTimeout ( () => {
                divMessage.remove();
            }, 3000);        }


    }

}) ();
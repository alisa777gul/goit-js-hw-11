import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const buttonSubmit = document.querySelector('.button-submit');
const myForm = document.querySelector('form');
const radioButtons = document.querySelectorAll('input[name="state"]');
let selectedOption = null;
let delayValue = null;

buttonSubmit.addEventListener('click', (event) => {
    if (!myForm.checkValidity()) {
        return;
    }

    event.preventDefault(); 


    delayValue = parseInt(document.querySelector('input[name="delay"]').value, 10);


    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedOption = radioButton.value;
            break;
        }
    }


    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            if (selectedOption === 'fulfilled') {
                resolve(`Fulfilled promise in ${delayValue} ms`);
            } else {
                reject(`Rejected promise in ${delayValue} ms`);
            }
        }, delayValue);
    });


    promise.then(successMessage => {
        iziToast.success({
            title: 'Ok',
            message: successMessage,
            position: 'topRight'
        }); myForm.reset();
    }).catch(errorMessage => {
        iziToast.error({
            title: 'Error',
            message: errorMessage,
            position: 'topRight'
        });  myForm.reset();
    });

  });
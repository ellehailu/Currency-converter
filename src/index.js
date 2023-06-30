import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/ExchangeRate.js';

function getRate(amount, baseCurrency, exchangeCurrency){
    ExchangeRate.getRate(amount, baseCurrency, exchangeCurrency)
        .then(function(response){
            if (response.data){
                printElements(response);
            }
            else{
                printError(response);
            }
        });
}

function printElements(response){
    const p = document.createElement('p');
    p.setAttribute("class", "results");
    p.innerText = `${response.conversion_rate}`;
    console.log(p);
}

function printError(error){
    document.querySelector('#resultsMessage').innerText = `${error}`;
}


function handleForm(event) {
    event.preventDefault();
    const amount = document.querySelector("#amount").value;
    const baseCurrency = document.querySelector("#baseCurrency").value;
    const exchangeCurrency = document.querySelector("#exchangeCurrency").value;
    getRate(amount, baseCurrency, exchangeCurrency);
    // document.querySelector("userInput").reset();
}

document.querySelector("#userInput").addEventListener("submit", handleForm);
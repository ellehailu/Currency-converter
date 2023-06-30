import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/ExchangeRate';

function getRate(amount, baseCurrency, exchangeCurrency){
    ExchangeRate.getRate(amount, baseCurrency, exchangeCurrency)
        .then(function(response){
            if (response.conversion_rate){
                printElements(response);
            }
            else{
                printError(response);
            }
        });
}

function printElements(response){
    const conversionRate = response.conversion_rate;
    console.log(conversionRate);
}

function printError(error){
    document.querySelector('#resultsMessage').innerText = `${error}`;
}


function handleForm(event) {
    event.preventDefault();
    let amount = document.querySelector("#amount").value;
    let baseCurrency = document.querySelector("#baseCurrency").value;
    let exchangeCurrency = document.querySelector("#exchangeCurrency").value;
    getRate(amount, baseCurrency, exchangeCurrency);
}

document.querySelector("#userInput").addEventListener("submit", handleForm);
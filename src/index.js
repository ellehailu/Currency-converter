import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeRate from './js/ExchangeRate';

function getRate(amount, exchangeCurrency) {
    //might not need base currency input if the user can only convert from USD to other currencies 
    ExchangeRate.getRate(amount, exchangeCurrency)
        .then(function(response){
            if (response.conversion_rate){
                printElements(amount, response, exchangeCurrency);
            }
            else{
                printError(response);
            }
        });
}

function printElements(amount,response, exchangeCurrency){
    const conversionRate = response.conversion_rate;
    console.log(conversionRate);
    let newAmount = amount * conversionRate;
    console.log(newAmount);
    let p = document.createElement('p');
    document.body.append(p);
    p.innerText = `The current conversion rate from USD to ${exchangeCurrency} is ${((response.conversion_rate).toFixed(2))}. ${amount}USD is ${newAmount} ${exchangeCurrency}.`;
    // return newAmount;
    
    //multiply user amount input by the conversion rate to calculate the converted rate.
}

function printError(error){
    document.querySelector('#resultsMessage').innerText = `${error}`;
}


function handleForm(event) {
    event.preventDefault();
    let amount = document.querySelector("#amount").value;
    let exchangeCurrency = document.querySelector("#exchangeCurrency").value;
    getRate(amount, exchangeCurrency);
    document.querySelector('#userInput').reset();
}

document.querySelector("#userInput").addEventListener("submit", handleForm);
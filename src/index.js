import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ParkService from './js/ParkService';

function getParks(activity){
    ParkService.getParks(activity)
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
    const oldList = document.querySelector("ul");
    if (oldList !== null) {
        oldList.remove();
    } 
    const newList = document.createElement("ul");
    newList.setAttribute("class", "container");
    for(let i = 0; i <10; i ++) {
        const li = document.createElement('li');
        li.innerText = `${response.data[0].parks[i].fullName}`;
        newList.append(li);
    }
    document.querySelector("#results").append(newList);
}

function printError(error){
    document.querySelector('#parks').innerText = `${error}`;
}


function handleForm(event) {
    event.preventDefault();
    const activity = document.querySelector("#activity").value;
    getParks(activity);
    document.getElementById('nationalParks').reset();
}


document.querySelector("#nationalParks").addEventListener("submit", handleForm);
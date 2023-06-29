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

function livingOnTheEdge(parkName){
    ParkService.thingsToDo(parkName)
        .then(function(response){
            if (response.data){
                showActivity(response)
            }
            else {
                printError(response);
            }
        })
}

function printElements(response){
    cleanUp();
    const newList = document.createElement("ul");
    newList.setAttribute("class", "container");
    for(let i = 0; i <10; i ++) {
        const li = document.createElement('li');
        li.innerText = `${response.data[0].parks[i].fullName}. You can find out more at: `;
        const aTag = document.createElement("a");
        aTag.setAttribute("href", `${response.data[0].parks[i].url}`);
        aTag.innerText = `${response.data[0].parks[i].name}`
        li.append(aTag);
        newList.append(li);
    }
    document.querySelector("#results").append(newList);
}

function showActivity(response) {
    cleanUp();
    const paragraph = document.getElementById("parks");
    paragraph.setAttribute("class", "container");
    let randomActivity = Math.floor(Math.random() * response.data.length);
    paragraph.innerText = `${response.data[randomActivity].title} : ${response.data[randomActivity].shortDescription}`;
    const newImage = document.createElement("img");
    newImage.setAttribute("src", `${response.data[randomActivity].images[0].url}`);
    document.body.append(newImage);
}

function printError(error){
    document.querySelector('#parks').innerText = `${error}`;
}

function cleanUp() {
    const oldList = document.querySelector("ul");
    if (oldList !== null) {
        oldList.remove();
    } 
    const oldImage = document.querySelector("img");
    if (oldImage !== null) {
        oldImage.remove();
    }
    let par = document.getElementById("parks");
    par.innerText = null;
    par.removeAttribute("class");
}


function handleForm(event) {
    event.preventDefault();
    const activity = document.querySelector("#activity").value;
    getParks(activity);
    document.getElementById('nationalParks').reset();
}

function handleActivitesForm(event){
    event.preventDefault();
    const parkName = document.querySelector("#parkName").value;
    livingOnTheEdge(parkName);
    document.getElementById('thingsToDo').reset();
}
document.querySelector("#nationalParks").addEventListener("submit", handleForm);
document.querySelector('#thingsToDo').addEventListener("submit", handleActivitesForm);
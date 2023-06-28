import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ParkService from './js/advice';

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
  for(let i = 0; i <10; i ++) {
    const li = document.createElement('li');
   li.innerText = `${response.data[0].parks[i].fullName}`;
    document.querySelector('#parks').append(li);
  }
  // console.log(response.data[0].parks[0].fullName);
  // document.querySelector('#parks').innerText = `${response.data[0].parks[0].fullName}`;
}

function printError(error){
  document.querySelector('#parks').innerText = `${error}`;
}


function handleForm(event) {
  event.preventDefault();
  const activity = document.querySelector("#activity").value;
  getParks(activity);
}


document.querySelector("#nationalParks").addEventListener("submit", handleForm);
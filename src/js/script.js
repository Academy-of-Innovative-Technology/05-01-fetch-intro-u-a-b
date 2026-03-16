let cardName = document.querySelector(".card-title");
let cardEmail = document.querySelector(".card-text");



function getUserData() {

fetch('../src/data/api.json')
.then(function(response){
  return response;  
})
.then(function(data){ 
        processData(data)
    }); 
};



function processData(data) {
console.log(data);
cardName.innerHTML = data.firstName + " " + data.lastName;
cardEmail.innerHTML = data.email;
};

document.querySelector("#next-button").addEventListener("click", function(processData(data));
);

// Load the first user when the page loads 
window.onload = getUserData;
const list = document.getElementById('button');
const select = document.getElementById('form-select')

function eventListeners() {
    list.addEventListener('click',getData)
}

eventListeners();


function getData(){

    fetch('https://randomuser.me/api/?results=100')
    .then(response => response.json())
    .then(data => {

        data.results.forEach(function(element){

        
        if (select.value==1 && element.dob.age >0 && element.dob.age <=30) {
            
            show.innerHTML+= `
             <li style="float:none">${element.name.first}  ${element.name.last}: ${element.dob.age}</li>`

        }
        if (select.value==2 && element.dob.age >31 && element.dob.age <=60) {
            
            show.innerHTML+= `
             <li>${element.name.first}  ${element.name.last}: ${element.dob.age}</li>`

        }
        if (select.value==3 && element.dob.age >61 && element.dob.age <=90) {
            
            show.innerHTML+= `
             <li>${element.name.first}  ${element.name.last}: ${element.dob.age}</li>`

        }

        });

    });

   
}




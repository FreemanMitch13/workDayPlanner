var dateClock = document.getElementById("currentDay");

function runClock() {
    $(dateClock).html(moment().format('MMMM Do YYYY, h:mm:ss a'));
  } 
  setInterval(runClock, 1000);

let defaultData = [{time:'9:00am', text:'', hour:9},{time:'10:00am', text:'', hour:10},{time:'11:00am', text:'', hour:11},{time:'12:00pm', text:'', hour:12},{time:'1:00pm', text:'', hour:13},{time:'2:00pm', text:'', hour:14},{time:'3:00pm', text:'', hour:15},{time:'4:00pm', text:'', hour:16},{time:'5:00pm', text:'', hour:17}];  
let localData =JSON.parse(localStorage.getItem('localData'));
let data = localData&&localData.length>0?localData:defaultData

function changeColor(i, classToAdd){
  $(`rowContainer${i}`).addClass(classToAdd);
}

for (let i=0; i<data.length; i++){
  
  // let colorClass='past present future';
  let currentTime=moment().hour();

  // function changeColor(){
  //   $(`rowContainer${i}`).addClass('past');
  // }
  // if(currentTime>data[i].hour){
  //     changeColor('past');
  //   console.log("past");
  // }
  // if(currentTime==data[i].hour){
  //    changeColor('present');
  //   console.log("present");
  // }
  // if(currentTime<data[i].hour){
  //    changeColor('future');
  //   console.log("future");
  // }

  // function changeColor(){
  //   $(`div.row`).addClass('past');
  // }
  // if(currentTime>data[i].hour){
  //     changeColor('past');
  //   console.log("past");
  // }

  // if(currentTime==data[i].hour){
  //   changeColor('present');
  //   console.log("present");
  // }
  // if(currentTime<data[i].hour){
     
  //   console.log("future");
  // }

  if(currentTime>data[i].hour){
        changeColor(i, 'past');
      console.log("past");
    }




  $(".container").append(`<div class="input-group mb-3 time-block row rowContainer${i}">
  <div class="input-group-prepend">
      <span class="input-group-text hour" id="inputGroup-sizing-default">${data[i].time}</span>
  </div>
  <input type="text" class="form-control" id="input-${i}" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default" value=${data[i].text}>           
  <div class="input-group-append">
      <button class="btn btn-outline-secondary saveBtn" id="btn-${i}" type="button" id="button-addon2"><i class="far fa-save"></i></button>
  </div>
  </div>`);

  function scheduleInput(){
    data[i].text = document.getElementById(`input-${i}`).value;
    console.log(data[i].text);
    localStorage.setItem('localData', JSON.stringify(data));
  }
  document.getElementById(`btn-${i}`).addEventListener('click',scheduleInput);
}

console.log(moment().hour());
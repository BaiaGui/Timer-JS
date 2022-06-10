buttonPlay = document.querySelector('#play');
buttonPause = document.querySelector('#pause');
buttonStop = document.querySelector('#stop');
clock = document.querySelector('#clock');
form = document.querySelector('#form');
timer = document.querySelector('#timer');
closeModal = document.querySelector('#closeModal');

min = document.querySelector('#minutes');
sec = document.querySelector('#seconds');
//container = document.querySelector('.container');


buttonPlay.addEventListener("click", startContdown);
buttonPause.addEventListener("click", pauseContdown);
buttonStop.addEventListener("click", stopContdown);
closeModal.addEventListener('click', confirmEdit);
//container.addEventListener('click', confirmEdit);
//desligando botões default
turnBtnOffPause();
turnBtnOffStop();


clock.addEventListener("click", openForm);
timerText = document.querySelector("#clock");
minutes=format0(0,2);
seconds=format0(0,2);
time = minutes + ':' + seconds;
timerText.innerText=time;

function format0(num, size){
    num=num.toString();
    while(num.length<size){
        num = '0'+ num;
    }
    parseInt(num);
    return num;
}

function startContdown(){

    turnBtnOnPause();
    turnBtntOffStart();
    turnBtnOffStop();

    clock.removeEventListener('click', openForm);
    clock.style.cursor='default';

    confirmEdit();


    x = setInterval(function(){
        minutes=Math.floor(secondsRemaining/60);
        seconds=Math.floor(secondsRemaining%60);    
        minutes=format0(minutes, 2);
        seconds=format0(seconds, 2);
        timerText.innerText= minutes + ':' + seconds;
        secondsRemaining--;
        if(secondsRemaining < 0){
            clearInterval(x);
            secondsRemaining=0;}
            
    },1000); 
};

function pauseContdown(){
    clearInterval(x);
    turnBtnOnStart();
    turnBtnOnStop();
    turnBtnOffPause();
    min.value=minutes;
    sec.value=seconds;

}

function stopContdown(){
    clearInterval(x);
    time=0;
    timerText.innerText='00:00';
    turnBtnOffPause();
    turnBtnOffStop();
    clock.addEventListener("click", openForm);
    clock.style.cursor='pointer';
    min.value=format0(0,2);
    sec.value=format0(0,2);
}

function openForm(){
    timer.prepend(form);    
    form.style.display = 'flex';
    closeModal.style.display = 'block';
    clock.style.display = 'none';
    turnBtnOffPause();
    turnBtnOffStop();
}



function confirmEdit(){
    form.style.display = 'none';
    closeModal.style.display = 'none';
    clock.style.display = 'flex';
    submitForm();
}

function submitForm(){
    form.submit();
    minutes=min.value;
    seconds=sec.value;
    secondsRemaining = (parseInt(minutes*60)) + parseInt(seconds);
    time = minutes + ':' + seconds;
    timerText.innerText=time;
}


function turnBtntOffStart(){
    buttonPlay.removeEventListener("click", startContdown);
    buttonPlay.style.cssText = 
    'background: rgb(255,209,153);' + 
    'background: linear-gradient(90deg, rgba(189,187,184,1) 0%, rgba(215,214,208,1) 100%);' +
    'cursor: default;';
}

function turnBtnOffPause(){
    buttonPause.removeEventListener("click", pauseContdown);
    buttonPause.style.cssText = 
    'background: rgb(255,209,153);' + 
    'background: linear-gradient(90deg, rgba(189,187,184,1) 0%, rgba(215,214,208,1) 100%);' +
    'cursor: default;';
}

function turnBtnOffStop(){
    buttonStop.removeEventListener("click", stopContdown);
    buttonStop.style.cssText = 
    'background: rgb(255,209,153);' + 
    'background: linear-gradient(90deg, rgba(189,187,184,1) 0%, rgba(215,214,208,1) 100%);' +
    'cursor: default;';
}

function turnBtnOnStart(){
    buttonPlay.addEventListener("click", startContdown);
    buttonPlay.style.cssText = 
    'background-color: #FBAB7E;' + 
    'background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);' +
    'cursor: pointer;';
}

 function turnBtnOnPause(){
    buttonPause.addEventListener("click", pauseContdown);
    buttonPause.style.cssText = 
    'background-color: #FBAB7E;' + 
    'background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);' +
    'cursor: pointer;';
}

function turnBtnOnStop(){
    buttonStop.addEventListener("click", stopContdown);
    buttonStop.style.cssText = 
    'background-color: #FBAB7E;' + 
    'background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);' +
    'cursor: pointer;';
}






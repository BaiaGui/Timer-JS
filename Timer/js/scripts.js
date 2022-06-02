buttonPlay = document.querySelector('#play');
buttonPause = document.querySelector('#pause');
buttonStop = document.querySelector('#stop');

buttonPlay.addEventListener("click", startContdown);
buttonPause.addEventListener("click", pauseContdown);
buttonStop.addEventListener("click", stopContdown);
timerText = document.querySelector("#clock");
time = 10;
z=0;

function startContdown(){
    x = setInterval(function(){
        timerText.innerText=time -z;
        z++;
        if(time-z < 0){
            clearInterval(x);
            time=0;}
            
    },1000); 
};

function pauseContdown(){
    clearInterval(x);
}

function stopContdown(){
    clearInterval(x);
    time=0;
    z=0;
    timerText.innerText=time;
}






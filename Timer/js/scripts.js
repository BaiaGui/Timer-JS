buttonPlay = document.querySelector('#play');
buttonPause = document.querySelector('#pause');
buttonStop = document.querySelector('#stop');

buttonPlay.addEventListener("click", startContdown);
buttonPause.addEventListener("click", pauseContdown);
buttonStop.addEventListener("click", stopContdown);
timerText = document.querySelector("#clock");
time = 10;
secondsRemaining=time*60;
minutes=0;
seconds=0;

function conversion(){
    minutes = Math.floor(secondsRemaining/60);
    seconds = Math.floor(secondsRemaining%60);
    timerText.innerText = minutes + ':' + seconds;
}

function startContdown(){
    x = setInterval(function(){
        secondsRemaining--;
        //conversion();
        timerText.innerText= Math.floor(secondsRemaining/60) + ':' + Math.floor(secondsRemaining%60);
        //timerText.innerText=time -z;


        if(secondsRemaining-z < 0){
            clearInterval(x);
            secondsRemaining=0;}
            
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






buttonPlay = document.querySelector('#play');
buttonPause = document.querySelector('#pause');
buttonStop = document.querySelector('#stop');

buttonPlay.addEventListener("click", startContdown);
buttonPause.addEventListener("click", pauseContdown);
buttonStop.addEventListener("click", stopContdown);
timerText = document.querySelector("#clock");
time = 10.40;
timerText.innerText=time;
secondsRemaining=time*60;
minutes=0;
seconds=0;

function format0(num, size){
    num=num.toString();
    while(num.length<size){
        num = '0'+ num;
    }
    return num;
}

function startContdown(){
    //input=prompt("Digite quantos minutos:");
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
}

function stopContdown(){
    clearInterval(x);
    time=0;
    timerText.innerText='00:00';
}






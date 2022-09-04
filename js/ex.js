let hr = 0;
let min = 0;
let sec = 0;
let stopExecutation;

document.getElementById('temp').innerHTML = `0${hr} : 0${min} : 0${sec}`;

let start = document.getElementById('start');
let stp = document.getElementById('stop');
let reset = document.getElementById('reset');


start.addEventListener('click', () =>{
    startFunc();    
    stopExecutation = setInterval(startFunc, 1000);
});

stp.addEventListener('click', () =>{
        clearInterval(stopExecutation);
});

reset.addEventListener('click', () =>{
    clearInterval(stopExecutation);
    hr = 0;
    min = 0;
    sec = 0;
    document.getElementById('temp').innerHTML = `0${hr} : 0${min} : 0${sec}`;
});

function startF(a){
    if(a < 10){
        return ('0' + a);
    }else{
        return (a);
    }
}

function startFunc(){
    sec++;
    if(sec === 60){
        sec = 0;
        min++;
        if(min === 60){
            min = 0;
            hr++
        }
    }
    document.getElementById('temp').innerHTML = startF(hr) +' : '+ startF(min) +' : '+ startF(sec);
};
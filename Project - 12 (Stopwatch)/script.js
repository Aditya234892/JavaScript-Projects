let timer = document.querySelector('.timer');
let btns = document.querySelectorAll('.btns');
let start = document.querySelector('.start');
let pause = document.querySelector('.pause');
let reset = document.querySelector('.reset');
let lap = document.querySelector('.lap');

let dynamic = document.querySelector('.dynamic');
let intervalID = '';
let sec = 0;
let min = 0;
let hour = 0;
let isTimerRunning = false;
let counter = 1;


function startTimer(){
    if(!isTimerRunning)
    {
        isTimerRunning = true;
    }
     intervalID = setInterval(()=>{
        sec++;
        if(sec >= 60) 
        {
            sec = 0;
            min++;
            if(min >= 60)
            {
                min = 0;
                hour++;
            }
        }

        // console.log(hour+":"+ min+":"+ sec);

        timer.textContent = (hour < 10? '0'+hour : hour) + ':' + (min < 10? '0'+min : min) + ':' + (sec < 10? '0'+sec : sec);
        
    }, 1000);

    // btns.forEach(btn => {
    //     console.log(btn.classList.value);
    // });


}

function pauseTimer(){ 
    clearInterval(intervalID);
    btns.forEach(btn => {
        
        if (btn.classList.contains('start')) {
            btn.disabled = false;
        }
    });
}

function stopTimer(){
    clearInterval(intervalID);
    sec = 0;
    min = 0;
    hour = 0;
    timer.textContent = '00:00:00';
    btns.forEach(btn => {
        if (btn.classList.contains('start')) {
            btn.disabled = false;
        }
    });
    pauseTimer();
}

function resetTimer(){
    stopTimer();
    timer.textContent = '00:00:00';
    btns.forEach(btn => {
        if (btn.classList.contains('start')) {
            btn.disabled = false;
        }
    });
}

function addLap(){
    let sec1 = sec;
    let min1 = min;
    let hour1 = hour;    
    let lapTime = (hour1 < 10? '0'+hour1 : hour1) + ':' + (min1 < 10? '0'+min1 : min1) + ':' + (sec1 < 10? '0'+sec1 : sec1);

    let lap = `<div class="laps">
                <p>#${counter}</p>
                <p>${hour1 < 10? '0'+hour1 : hour1}:${min1 < 10? '0'+min1 : min1}:${sec1 < 10? '0'+sec1 : sec1}</p>
            </div>`;

    dynamic.innerHTML = lap + dynamic.innerHTML;
    counter++;
    console.log(counter);
    
}

btns.forEach(btn => {
    btn.addEventListener('click', (e)=>{
        // console.log(e.target.classList);

        if(e.target.classList.contains('start')){
            startTimer();
            e.target.disabled = true; // disable the start button
            e.target.style.display = "none";
            pause.style.display = "block";
            reset.style.display = "block";
            lap.style.display = "block";

        }
        else if(e.target.classList.contains('pause')){
            pauseTimer();
            start.disabled = false;
            reset.style.display = "block"; 
            start.style.display = "block";
            pause.style.display = "none";
        }
        // else if(e.target.classList.contains('stop')){
        //     stopTimer();
        //     start.disabled = false;
        // }
        else if(e.target.classList.contains('reset')){
            resetTimer();
            start.disabled = false;
            start.style.display = "block";
            pause.style.display = "none"
            dynamic.innerHTML = "";
            reset.style.display = "none";
            lap.style.display = "none";
        }
        else if(e.target.classList.contains('lap')){
            addLap();
            start.disabled = false;
        }
    });
});
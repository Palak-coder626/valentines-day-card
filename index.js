const envelope=document.querySelector('.envelope');
const openFlap=document.querySelector('.open-flap');
const title=document.querySelector('.title');
const heart=document.querySelector('.heart');
const video =document.querySelector('video');
let heartbeat=new Audio('audio/heartbeat.mp3');
heartbeat.loop=true;
let isOpened=false;
let i=1.1;
function openEnvelope(){
if(!isOpened){
    heartbeat.play();
    isOpened=true;
    openFlap.style.animation="none";
    openFlap.style.transform="rotate(180deg)";
    envelope.removeChild(heart);
    document.querySelector('body').appendChild(heart);
    envelope.style.top="150%";
    video.classList.remove('hidden');
    video.play();
    video.playbackRate="0.5";
    title.classList.remove('hidden');
    setTimeout(()=>{
      heart.style.top="55%";
    },900)
}
}


// event listeners

envelope.addEventListener('click',()=>{
    openEnvelope(isOpened)
}
);
envelope.addEventListener('mouseover',()=>{
    openFlap.style.animation="none";
    openFlap.style.transform="rotate(180deg)";
    heart.style.top="45%";    
}
);
envelope.addEventListener('mouseout',()=>{
    if(!isOpened){             
        heartbeat.pause();         
        openFlap.style.animation="open 2s infinite alternate ease-in-out";   
        heart.style.top="50%";
    }else{
         openFlap.style.animation="none";
    }
  
}
);


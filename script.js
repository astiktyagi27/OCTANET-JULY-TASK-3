console.log("Welcome to Spotify")

// Initialie the variables
let songIndex=0;
let audioElement=new Audio('songs/0.mp3');
let masterPlay=document.getElementById('masterPlay')
let myProgressBar=document.getElementById('myProgressBar')
let gif = document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Iraaday",filePath:"songs/0.mp3",coverPath:"cover/1.jpg"},
    {songName: "Obsessed",filePath:"songs/1.mp3",coverPath:"cover/2.jpg"},
    {songName: "No Reason",filePath:"songs/2.mp3",coverPath:"cover/3.jpg"},
    {songName: "Schedule",filePath:"songs/3.mp3",coverPath:"cover/4.jpg"},
    {songName: "yadav Brand 2",filePath:"songs/4.mp3",coverPath:"cover/5.jpg"},
    {songName: "Kaleshi Chori",filePath:"songs/5.mp3",coverPath:"cover/6.jpg"},
    {songName: "Mi Amor",filePath:"songs/6.mp3",coverPath:"cover/7.jpg"}
]
songItems.forEach((element,i)=>{
     element.getElementsByTagName('img')[0].scr=songs[i].coverPath; 
     element.getElementsByClassName('songName')[0].innerText=songs[i].songName; 
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    //update seekbar
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;   
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })

}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
           makeAllPlays();
           songIndex=parseInt(e.target.id);
           e.target.classList.remove('fa-play-circle');
           e.target.classList.add('fa-pause-circle');
           audioElement.src= `songs/${songIndex}.mp3`;
           audioElement.currentTime=0;
           audioElement.play();
           masterPlay.classList.remove('fa-play-circle');
           masterPlay.classList.add('fa-pause-circle');

    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex +=1;
    }
    audioElement.src= `songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex=0;
    }
    else{
        songIndex -=1;
    }
    audioElement.src= `songs/${songIndex}.mp3`;
    audioElement.currentTime=0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
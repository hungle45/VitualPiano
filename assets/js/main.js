const JINGLE_BELL_SONG = [
    ["C-4",0.5], ["A-5",0.5], ["G-4",0.5], ["F-4",0.5], 
    ["C-4",1.5], ["C-4",0.25], ["C-4",0.25],
    ["C-4",0.5], ["A-5",0.5], ["G-4",0.5], ["F-4",0.5],
    ["D-4", 2], 
    ["D-4",0.5], ["Bb-5",0.5], ["A-5",0.5], ["G-4",0.5],
    ["E-4", 2], 
    ["C-5",0.5], ["C-5",0.5], ["Bb-5",0.5], ["G-4",0.5],
    ["A-5",2],
    ["C-4",0.5], ["A-5",0.5], ["G-4",0.5], ["F-4",0.5], 
    ["C-4",1.5], ["C-4",0.25], ["C-4",0.25],
    ["C-4",0.5], ["A-5",0.5], ["G-4",0.5], ["F-4",0.5],
    ["D-4", 2], 
    ["D-4",0.5], ["Bb-5",0.5], ["A-5",0.5], ["G-4",0.5],
    ["C-5",0.5], ["C-5",0.5], ["C-5",0.5], ["C-5",0.5],
    ["D-5",0.5], ["C-5",0.5], ["Bb-5",0.5], ["G-4",0.5],
    ["F-4",1], ["C-5",1],
    ["A-5", 0.5], ["A-5", 0.5], ["A-5", 1], 
    ["A-5", 0.5], ["A-5", 0.5], ["A-5", 1], 
    ["A-5", 0.5], ["C-5", 0.5], ["F-4",0.75], ["G-4",0.25],
    ["A-5", 2],
    ["Bb-5", 0.5], ["Bb-5", 0.5], ["Bb-5", 0.5], ["Bb-5", 0.5], 
    ["Bb-5", 0.5], ["A-5", 0.5], ["A-5", 0.5], ["A-5", 0.25], ["A-5", 0.25],  
    ["A-5", 0.5], ["G-4", 0.5], ["G-4", 0.5], ["A-5", 0.5],
    ["G-4", 1], ["C-5", 1],
    ["A-5", 0.5], ["A-5", 0.5], ["A-5", 1], 
    ["A-5", 0.5], ["A-5", 0.5], ["A-5", 1], 
    ["A-5", 0.5], ["C-5", 0.5], ["F-4",0.75], ["G-4",0.25],
    ["A-5", 2],
    ["Bb-5", 0.5], ["Bb-5", 0.5], ["Bb-5", 0.5], ["Bb-5", 0.5], 
    ["Bb-5", 0.5], ["A-5", 0.5], ["A-5", 0.5], ["A-5", 0.25], ["A-5", 0.25],
    ["C-5", 0.5], ["Bb-5", 0.5], ["G-4", 0.5], ["E-4", 0.5],
    ["G-4", 1], ["F-4", 1],

];

var keys = document.querySelectorAll('.key');
var isPlaying = false;

keys.forEach((key) => {
    key.addEventListener('click', () => {  
        playNote(key);
    })
})

function playNote(key) {
    key.classList.add('key--playing');
    var audioNote = document.querySelector(`#${key.getAttribute('data-note')}`);
    audioNote.currentTime = 0;
    audioNote.play();
    audioNote.addEventListener('ended', () => {
        key.classList.remove('key--playing');
    })
}

var autoPlayMusicBtn = document.querySelector('.piano-music--song');

autoPlayMusicBtn.addEventListener('click', () => {
    if(!isPlaying)
        autoPlayMusic(JINGLE_BELL_SONG);
})

function autoPlayMusic(song) {
    isPlaying= true;
    var time = 500;
    var k = 0;
    for(var i = 0; i < song.length; i++) {
        setTimeout(() => {
            var keyInSong = document.querySelector(`.key[data-note=${song[k][0]}`);
            playNote(keyInSong);
            k++;
        },time);
        time += song[i][1]*500;
    }
    setTimeout(() => {
        isPlaying = false;
    }, time)
}   
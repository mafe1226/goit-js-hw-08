
import Player from '@vimeo/player';
import throttle from 'lodash.throttle'

const iframe = document.getElementById('vimeo-player');
const player = new Player(iframe);

const demoraAlamacenamientoLocal = throttle(function(data) {
    const tiempoActual = data.seconds;
    localStorage.setItem("videoplayer-current-time", tiempoActual);
}, 1000); 
player.on('timeupdate', demoraAlamacenamientoLocal);

const TiempoGuardado = localStorage.getItem("videoplayer-current-time")
player.setCurrentTime(TiempoGuardado).then(function(seconds) {
    // seconds = the actual time that the player seeked to
    player.play();
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            player.setCurrentTime(0).then(function() {
            player.play();
            });
            break;            
        default:
            // some other error occurred
            break;
    }
});
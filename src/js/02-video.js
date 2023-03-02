/* <iframe src="https://player.vimeo.com/video/76979871?h=8272103f6e" width="640" height="360" frameborder="0" allowfullscreen allow="autoplay; encrypted-media"></iframe> */

import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const currentTime = localStorage.getItem("videoplayer-current-time");
if (currentTime > 0) {
    player.setCurrentTime(currentTime);
}

function updateCurrentTime(event) {
    localStorage.setItem("videoplayer-current-time", event.seconds);
}

player.on('timeupdate', throttle(updateCurrentTime, 1000));


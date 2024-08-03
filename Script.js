const video = document.getElementById('video');
const playPauseBtn = document.getElementById('playPauseBtn');
const seekBar = document.getElementById('seekBar');
const muteBtn = document.getElementById('muteBtn');
const volumeBar = document.getElementById('volumeBar');
const speedSelect = document.getElementById('speedSelect');
const fullscreenBtn = document.getElementById('fullscreenBtn');

// Play/Pause Video
playPauseBtn.addEventListener('click', () => {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = 'Pause';
    } else {
        video.pause();
        playPauseBtn.textContent = 'Play';
    }
});

// Update Seek Bar as Video Plays
video.addEventListener('timeupdate', () => {
    seekBar.value = (video.currentTime / video.duration) * 100;
});

// Seek Video
seekBar.addEventListener('input', () => {
    video.currentTime = (seekBar.value / 100) * video.duration;
});

// Mute/Unmute Video
muteBtn.addEventListener('click', () => {
    video.muted = !video.muted;
    muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
});

// Change Volume
volumeBar.addEventListener('input', () => {
    video.volume = volumeBar.value;
});

// Change Playback Speed
speedSelect.addEventListener('change', () => {
    video.playbackRate = speedSelect.value;
});

// Fullscreen Mode
fullscreenBtn.addEventListener('click', () => {
    if (video.requestFullscreen) {
        video.requestFullscreen();
    } else if (video.mozRequestFullScreen) { /* Firefox */
        video.mozRequestFullScreen();
    } else if (video.webkitRequestFullscreen) { /* Chrome, Safari & Opera */
        video.webkitRequestFullscreen();
    } else if (video.msRequestFullscreen) { /* IE/Edge */
        video.msRequestFullscreen();
    }
});

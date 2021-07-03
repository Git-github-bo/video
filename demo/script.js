// 获取HTML上的id
var video = document.getElementById("video");
var play = document.getElementById("play");
var stop = document.getElementById("stop");
var progress = document.getElementById("progress");
var timestamp = document.getElementById("timestamp");

// 切换视频播放与暂停
function toggleVideoStatus() {
   if(video.paused){
       video.play();
   }else {
       video.pause();
   }
}
// 切换按钮的播放与暂停
function updatePlayIcon() {
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }else {
        play.innerHTML = '<i class="fa fa-pause fa-2x"></i>'
    }
}
// input 进度条
function updateProgress() {
    progress.value = (video.currentTime / video.duration) * 100;
    let mins = Math.floor(video.currentTime / 60);
    if (mins < video.duration) {
        mins = '0' + String(mins);
    }
    let secs = Math.floor(video.currentTime % 60);
    if (mins < video.duration) {
        secs = '0' + String(secs);
    }
    timestamp.innerHTML = `${mins}:${secs}`;
}

// 滑动进度条调整到当前进度
function setVideoProgress() {
    video.currentTime = (+progress.value * video.duration) / 100;
}

// 点击按钮中止并暂停
function stopVideo() {
    video.currentTime = 0;


    video.pause();
}

// 添加事件句柄
video.addEventListener('click',toggleVideoStatus);
video.addEventListener('play',updatePlayIcon)
video.addEventListener('pause',updatePlayIcon)
video.addEventListener('timeupdate', updateProgress);

play.addEventListener('click', toggleVideoStatus);

stop.addEventListener('click', stopVideo);

progress.addEventListener('change', setVideoProgress);
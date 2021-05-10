const btn = document.querySelector('.switch-btn');
const video = document.querySelector('.video-container');

let miVideo = document.getElementById("video1")
function skip(value){
	miVideo.currentTime += value;
}
btn.addEventListener('click', function () {
	if(!btn.classList.contains('slide')) {
		btn.classList.add('slide');
		video.pause();
	} 
	else{
		btn.classList.remove('slide');
		video.play();
	}
});

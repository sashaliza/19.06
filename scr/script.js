document.addEventListener("DOMContentLoaded", function () {
    const video = document.getElementById("wedding-video");
    const playButton = document.getElementById("play-button");

    // Принудительно убираем звук
    video.muted = true;
    video.volume = 0;

    // Включаем бесконечный цикл воспроизведения
    video.loop = true;

    playButton.addEventListener("click", () => {
        if (video.paused) {
            video.play();
            playButton.src = "scr/pause.png";
        } else {
            video.pause();
            playButton.src = "scr/play.png";
        }
    });
});

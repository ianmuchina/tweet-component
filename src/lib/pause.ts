// Play only one video at a time
export default function oneOnly() {
    // Get all <video> elements from DOM
    const videos = document.querySelectorAll('video');

    // For each video
    for (let video of videos) {
        video.addEventListener('play', e => {
            for (let video of videos) {
                // Skip
                if (video === e.target) continue;
                
                //Have we already played it && is it already paused?
                if (video.played.length > 0 && !video.paused){
                    video.pause();
                }
            }
        }, true);
    }    
}
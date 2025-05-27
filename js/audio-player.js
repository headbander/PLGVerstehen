/**
 * audio-player.js
 * Skript für den Audio-Player der PLG-Website
 * Angepasst für den bereitgestellten Podcast
 */

document.addEventListener('DOMContentLoaded', function() {
    // Audio-Player-Elemente
    const audioElements = document.querySelectorAll('audio');
    
    audioElements.forEach(audio => {
        const playerContainer = audio.closest('.audio-player');
        if (!playerContainer) return;
        
        const playBtn = playerContainer.querySelector('.play-btn');
        const playIcon = playBtn.querySelector('i');
        const progressBar = playerContainer.querySelector('.progress');
        const currentTimeEl = playerContainer.querySelector('.current-time');
        const durationEl = playerContainer.querySelector('.duration');
        
        // Event-Listener für Play/Pause-Button
        playBtn.addEventListener('click', function() {
            if (audio.paused) {
                // Alle anderen Audio-Player pausieren
                audioElements.forEach(otherAudio => {
                    if (otherAudio !== audio && !otherAudio.paused) {
                        otherAudio.pause();
                        const otherContainer = otherAudio.closest('.audio-player');
                        if (otherContainer) {
                            const otherPlayIcon = otherContainer.querySelector('.play-btn i');
                            otherPlayIcon.classList.remove('fa-pause');
                            otherPlayIcon.classList.add('fa-play');
                        }
                    }
                });
                
                // Diesen Audio-Player abspielen
                audio.play();
                playIcon.classList.remove('fa-play');
                playIcon.classList.add('fa-pause');
            } else {
                audio.pause();
                playIcon.classList.remove('fa-pause');
                playIcon.classList.add('fa-play');
            }
        });
        
        // Aktualisierung der Fortschrittsanzeige
        audio.addEventListener('timeupdate', function() {
            const progress = (audio.currentTime / audio.duration) * 100;
            progressBar.style.width = progress + '%';
            
            // Zeitanzeige aktualisieren
            currentTimeEl.textContent = formatTime(audio.currentTime);
        });
        
        // Klick auf Fortschrittsleiste
        const progressContainer = playerContainer.querySelector('.progress-bar');
        progressContainer.addEventListener('click', function(e) {
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            audio.currentTime = pos * audio.duration;
        });
        
        // Anzeige der Gesamtdauer, sobald Metadaten geladen sind
        audio.addEventListener('loadedmetadata', function() {
            durationEl.textContent = formatTime(audio.duration);
        });
        
        // Zurücksetzen des Players nach Ende der Wiedergabe
        audio.addEventListener('ended', function() {
            playIcon.classList.remove('fa-pause');
            playIcon.classList.add('fa-play');
            progressBar.style.width = '0%';
            audio.currentTime = 0;
        });
    });
    
    // Hilfsfunktion zur Formatierung der Zeit (mm:ss)
    function formatTime(seconds) {
        const minutes = Math.floor(seconds / 60);
        seconds = Math.floor(seconds % 60);
        return minutes + ':' + (seconds < 10 ? '0' : '') + seconds;
    }
});

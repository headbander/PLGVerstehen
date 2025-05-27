/**
 * interactive-cards.js
 * Skript für die interaktiven Kacheln im PLG-Überblick-Bereich
 */

document.addEventListener('DOMContentLoaded', function() {
    // Interaktive Karten
    const interactiveCards = document.querySelectorAll('.interactive-card');
    
    interactiveCards.forEach(card => {
        // Karten-Flip bei Klick
        card.addEventListener('click', function() {
            this.classList.toggle('flipped');
        });
        
        // Karten-Flip bei Enter-Taste (für Barrierefreiheit)
        card.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.classList.toggle('flipped');
            }
        });
        
        // "Mehr erfahren"-Button in der Rückseite
        const learnMoreBtn = card.querySelector('.card-learn-more');
        if (learnMoreBtn) {
            learnMoreBtn.addEventListener('click', function(e) {
                e.stopPropagation(); // Verhindert, dass die Karte zurückflipt
                const targetSection = this.getAttribute('data-target');
                document.getElementById(targetSection).scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
        }
    });
    
    // Pulse-Animation für die erste Karte beim Laden der Seite
    setTimeout(function() {
        if (interactiveCards.length > 0) {
            interactiveCards[0].classList.add('pulse-animation');
            
            // Animation nach 5 Sekunden entfernen
            setTimeout(function() {
                interactiveCards[0].classList.remove('pulse-animation');
            }, 5000);
        }
    }, 1000);
});

/**
 * main.js
 * Hauptskript für die PLG-Website
 */

document.addEventListener('DOMContentLoaded', function() {
    // Navigation
    initMobileNav();
    
    // Tabs
    initTabs();
    
    // Accordion
    initAccordion();
    
    // Slider
    initSliders();
    
    // Radar Chart
    initRadarChart();
    
    // Kultur-Auswertung
    initCultureEvaluation();
});

/**
 * Mobile Navigation
 */
function initMobileNav() {
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    
    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            
            // Ändere das Aria-Label je nach Zustand
            const isExpanded = mainNav.classList.contains('active');
            menuToggle.setAttribute('aria-expanded', isExpanded);
            menuToggle.setAttribute('aria-label', isExpanded ? 'Menü schließen' : 'Menü öffnen');
        });
    }
    
    // Aktiven Navigationspunkt markieren
    const navLinks = document.querySelectorAll('.nav-links a');
    const sections = document.querySelectorAll('section[id]');
    
    window.addEventListener('scroll', function() {
        let current = '';
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (pageYOffset >= sectionTop - 200) {
                current = section.getAttribute('id');
            }
        });
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === current) {
                link.classList.add('active');
            }
        });
    });
}

/**
 * Tabs
 */
function initTabs() {
    const tabBtns = document.querySelectorAll('.tab-btn');
    
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Aktiven Tab-Button markieren
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Aktiven Tab-Inhalt anzeigen
            const tabId = this.getAttribute('data-tab');
            document.querySelectorAll('.tab-pane').forEach(tab => tab.classList.remove('active'));
            document.getElementById(tabId).classList.add('active');
        });
    });
}

/**
 * Accordion
 */
function initAccordion() {
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const accordionItem = this.parentElement;
            
            // Toggle für das aktuelle Element
            accordionItem.classList.toggle('active');
            
            // Aria-Attribute aktualisieren
            const isExpanded = accordionItem.classList.contains('active');
            this.setAttribute('aria-expanded', isExpanded);
        });
    });
}

/**
 * Slider
 */
function initSliders() {
    const sliders = document.querySelectorAll('.slider');
    
    sliders.forEach(slider => {
        const valueDisplay = slider.parentElement.querySelector('.slider-value');
        
        // Initialwert anzeigen
        valueDisplay.textContent = slider.value;
        
        // Wert bei Änderung aktualisieren
        slider.addEventListener('input', function() {
            valueDisplay.textContent = this.value;
        });
    });
}

/**
 * Radar Chart für PLG-Übersicht
 */
function initRadarChart() {
    const ctx = document.getElementById('plg-radar-chart');
    
    if (ctx) {
        const radarChart = new Chart(ctx, {
            type: 'radar',
            data: {
                labels: [
                    'Reflektierender Dialog',
                    'De-Privatisierung',
                    'Fokus auf Lernen',
                    'Zusammenarbeit',
                    'Gemeinsame Ziele',
                    'Fehlertoleranz',
                    'Hilfekultur'
                ],
                datasets: [{
                    label: 'PLG-Kriterien',
                    data: [5, 5, 5, 5, 5, 4, 4],
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    borderColor: 'rgba(52, 152, 219, 0.8)',
                    pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                    pointBorderColor: '#fff',
                    pointHoverBackgroundColor: '#fff',
                    pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                scales: {
                    r: {
                        angleLines: {
                            display: true
                        },
                        suggestedMin: 0,
                        suggestedMax: 5
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        callbacks: {
                            label: function(context) {
                                return context.raw + '/5';
                            }
                        }
                    }
                }
            }
        });
        
        // Klick-Ereignis für das Radar-Chart
        ctx.addEventListener('click', function(evt) {
            const points = radarChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
            
            if (points.length) {
                const firstPoint = points[0];
                const label = radarChart.data.labels[firstPoint.index];
                
                // Zu entsprechendem Abschnitt scrollen
                if (label === 'Reflektierender Dialog' || label === 'De-Privatisierung' || 
                    label === 'Fokus auf Lernen' || label === 'Zusammenarbeit' || label === 'Gemeinsame Ziele') {
                    document.querySelector('#kriterien').scrollIntoView({ behavior: 'smooth' });
                    
                    // Entsprechenden Tab aktivieren
                    setTimeout(() => {
                        let tabIndex;
                        switch(label) {
                            case 'Reflektierender Dialog': tabIndex = 0; break;
                            case 'De-Privatisierung': tabIndex = 1; break;
                            case 'Fokus auf Lernen': tabIndex = 2; break;
                            case 'Zusammenarbeit': tabIndex = 3; break;
                            case 'Gemeinsame Ziele': tabIndex = 4; break;
                        }
                        
                        if (tabIndex !== undefined) {
                            document.querySelectorAll('.tab-btn')[tabIndex].click();
                        }
                    }, 500);
                } else if (label === 'Fehlertoleranz' || label === 'Hilfekultur') {
                    document.querySelector('#leitwerte').scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    }
}

/**
 * Auswertung der Schulkultur
 */
function initCultureEvaluation() {
    const evaluateButton = document.getElementById('evaluate-culture');
    const resultContainer = document.getElementById('culture-result');
    
    if (evaluateButton && resultContainer) {
        evaluateButton.addEventListener('click', function() {
            // Werte der Slider auslesen
            const fehlerValue = parseInt(document.getElementById('fehler-slider').value);
            const hilfeValue = parseInt(document.getElementById('hilfe-slider').value);
            const ideenValue = parseInt(document.getElementById('ideen-slider').value);
            const austauschValue = parseInt(document.getElementById('austausch-slider').value);
            
            // Durchschnitt berechnen
            const average = (fehlerValue + hilfeValue + ideenValue + austauschValue) / 4;
            
            // Ergebnis anzeigen
            let resultText = `<h4>Ihre Auswertung</h4>`;
            resultText += `<p>Durchschnittswert: <strong>${average.toFixed(1)}/5</strong></p>`;
            
            if (average < 2) {
                resultText += `<p>Ihre Schulkultur weist noch wenige Merkmale einer professionellen Lerngemeinschaft auf. Es besteht großes Entwicklungspotenzial in den Bereichen Fehlertoleranz und Hilfekultur.</p>`;
                resultText += `<p><strong>Empfehlung:</strong> Beginnen Sie mit kleinen Schritten, z.B. regelmäßigen Reflexionsrunden oder kollegialen Fallberatungen, um eine offenere Kommunikationskultur zu etablieren.</p>`;
            } else if (average < 3.5) {
                resultText += `<p>Ihre Schulkultur zeigt bereits einige Merkmale einer professionellen Lerngemeinschaft. Es gibt jedoch noch Entwicklungspotenzial.</p>`;
                resultText += `<p><strong>Empfehlung:</strong> Bauen Sie auf den vorhandenen Stärken auf und arbeiten Sie gezielt an den Bereichen mit niedrigeren Werten. Kollegiale Hospitationen und strukturierte Feedbackgespräche können helfen, die Kultur weiter zu entwickeln.</p>`;
            } else {
                resultText += `<p>Ihre Schulkultur weist bereits viele Merkmale einer professionellen Lerngemeinschaft auf. Das ist eine gute Basis für die weitere Entwicklung.</p>`;
                resultText += `<p><strong>Empfehlung:</strong> Teilen Sie Ihre Erfahrungen mit anderen Schulen und vertiefen Sie die bestehende Kultur durch systematische Reflexion und kontinuierliche Weiterentwicklung.</p>`;
            }
            
            resultContainer.innerHTML = resultText;
            resultContainer.style.display = 'block';
        });
    }
}

/**
 * quiz.js
 * Skript für den PLG-Selbsttest
 */

document.addEventListener('DOMContentLoaded', function() {
    initQuiz();
});

/**
 * Quiz-Initialisierung
 */
function initQuiz() {
    // Quiz-Fragen
    const quizQuestions = [
        {
            question: "1. Wie häufig tauschen sich die Mitglieder Ihrer Arbeitsgruppe über ihren Unterricht aus?",
            options: [
                "Praktisch nie",
                "Selten (1-2 mal pro Halbjahr)",
                "Gelegentlich (monatlich)",
                "Regelmäßig (alle 1-2 Wochen)",
                "Sehr häufig (wöchentlich oder öfter)"
            ],
            category: "Reflektierender Dialog"
        },
        {
            question: "2. Wie offen ist der Unterricht in Ihrer Arbeitsgruppe für Kolleg*innen?",
            options: [
                "Unterricht findet ausschließlich hinter geschlossenen Türen statt",
                "Hospitationen finden nur im Rahmen von Beurteilungen statt",
                "Gelegentliche freiwillige Hospitationen sind möglich",
                "Regelmäßige kollegiale Hospitationen sind etabliert",
                "Unterricht wird als gemeinsame Aufgabe verstanden und regelmäßig geöffnet"
            ],
            category: "De-Privatisierung"
        },
        {
            question: "3. Wie stark steht das Lernen der Schüler*innen im Mittelpunkt Ihrer Arbeitsgruppe?",
            options: [
                "Der Fokus liegt hauptsächlich auf der Vermittlung von Inhalten",
                "Lernprozesse werden selten thematisiert",
                "Lernprozesse werden gelegentlich reflektiert",
                "Lernprozesse werden regelmäßig analysiert",
                "Das Lernen der Schüler*innen ist zentraler Bezugspunkt aller Aktivitäten"
            ],
            category: "Fokus auf Lernen"
        },
        {
            question: "4. Wie intensiv ist die Zusammenarbeit in Ihrer Arbeitsgruppe?",
            options: [
                "Kaum Zusammenarbeit, jede*r arbeitet für sich",
                "Gelegentlicher Austausch von Materialien",
                "Regelmäßiger Austausch und Absprachen",
                "Gemeinsame Planung von Unterrichtseinheiten",
                "Intensive Kooperation bei Planung, Durchführung und Reflexion"
            ],
            category: "Zusammenarbeit"
        },
        {
            question: "5. Wie klar sind die gemeinsamen Ziele in Ihrer Arbeitsgruppe definiert?",
            options: [
                "Es gibt keine gemeinsamen Ziele",
                "Ziele sind vage formuliert und kaum handlungsleitend",
                "Es gibt allgemeine Ziele, aber wenig Verbindlichkeit",
                "Klare Ziele mit mittlerer Verbindlichkeit",
                "Präzise, gemeinsam entwickelte und verbindliche Ziele"
            ],
            category: "Gemeinsame Ziele"
        },
        {
            question: "6. Wie wird in Ihrer Arbeitsgruppe mit Fehlern umgegangen?",
            options: [
                "Fehler werden vermieden und vertuscht",
                "Fehler werden kritisiert",
                "Fehler werden toleriert",
                "Fehler werden als Lernchancen gesehen",
                "Fehler werden aktiv für die gemeinsame Entwicklung genutzt"
            ],
            category: "Fehlertoleranz"
        },
        {
            question: "7. Wie ausgeprägt ist die gegenseitige Unterstützung in Ihrer Arbeitsgruppe?",
            options: [
                "Jede*r ist für sich selbst verantwortlich",
                "Hilfe wird selten angeboten oder angefragt",
                "Hilfe wird bei konkreten Problemen angeboten",
                "Gegenseitige Unterstützung ist selbstverständlich",
                "Proaktive Hilfekultur mit systematischer Unterstützung"
            ],
            category: "Hilfekultur"
        },
        {
            question: "8. Wie werden Entscheidungen in Ihrer Arbeitsgruppe getroffen?",
            options: [
                "Von einzelnen Personen ohne Absprache",
                "Von der Leitung mit wenig Einbezug der Gruppe",
                "Nach Diskussion, aber oft ohne klaren Konsens",
                "Gemeinsam mit Konsensfindung",
                "Partizipativ mit klaren Prozessen und geteilter Verantwortung"
            ],
            category: "Zusammenarbeit"
        },
        {
            question: "9. Wie systematisch reflektiert Ihre Arbeitsgruppe die eigene Arbeit?",
            options: [
                "Keine systematische Reflexion",
                "Selten, meist nur bei Problemen",
                "Gelegentlich, aber ohne klare Struktur",
                "Regelmäßig mit teilweiser Struktur",
                "Systematisch und regelmäßig mit klaren Methoden"
            ],
            category: "Reflektierender Dialog"
        },
        {
            question: "10. Wie werden Schülerarbeiten und -leistungen in Ihrer Arbeitsgruppe analysiert?",
            options: [
                "Kaum gemeinsame Analyse",
                "Selten, meist nur bei Problemen",
                "Gelegentlich bei bestimmten Anlässen",
                "Regelmäßig für ausgewählte Bereiche",
                "Systematisch als Grundlage für Unterrichtsentwicklung"
            ],
            category: "Fokus auf Lernen"
        }
    ];
    
    // DOM-Elemente
    const quizContainer = document.getElementById('quiz');
    const resultsContainer = document.getElementById('quiz-results');
    const prevButton = document.getElementById('prev-question');
    const nextButton = document.getElementById('next-question');
    const submitButton = document.getElementById('submit-quiz');
    const progressBar = document.getElementById('quiz-progress');
    const currentQuestionDisplay = document.getElementById('current-question');
    const totalQuestionsDisplay = document.getElementById('total-questions');
    
    // Quiz-Zustand
    let currentQuestion = 0;
    const answers = {};
    
    // Gesamtzahl der Fragen anzeigen
    if (totalQuestionsDisplay) {
        totalQuestionsDisplay.textContent = quizQuestions.length;
    }
    
    // Erste Frage anzeigen
    showQuestion(currentQuestion);
    
    // Event-Listener für Buttons
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            if (currentQuestion > 0) {
                currentQuestion--;
                showQuestion(currentQuestion);
            }
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            // Aktuelle Antwort speichern
            saveAnswer();
            
            if (currentQuestion < quizQuestions.length - 1) {
                currentQuestion++;
                showQuestion(currentQuestion);
            } else {
                // Bei der letzten Frage den Submit-Button anzeigen
                if (nextButton) nextButton.style.display = 'none';
                if (submitButton) submitButton.style.display = 'block';
            }
        });
    }
    
    if (submitButton) {
        submitButton.addEventListener('click', function() {
            // Letzte Antwort speichern
            saveAnswer();
            
            // Ergebnisse anzeigen
            showResults();
        });
    }
    
    // Restart-Button
    const restartButton = document.getElementById('restart-quiz');
    if (restartButton) {
        restartButton.addEventListener('click', function() {
            // Quiz zurücksetzen
            currentQuestion = 0;
            for (let key in answers) {
                delete answers[key];
            }
            
            // UI zurücksetzen
            if (quizContainer) quizContainer.style.display = 'block';
            if (resultsContainer) resultsContainer.style.display = 'none';
            if (nextButton) nextButton.style.display = 'block';
            if (submitButton) submitButton.style.display = 'none';
            
            // Erste Frage anzeigen
            showQuestion(0);
        });
    }
    
    // Download-Button
    const downloadButton = document.getElementById('download-results');
    if (downloadButton) {
        downloadButton.addEventListener('click', function() {
            // Ergebnisse als PDF herunterladen
            // Hier würde normalerweise eine PDF-Generierung stattfinden
            alert('Diese Funktion würde normalerweise Ihre Ergebnisse als PDF herunterladen.');
        });
    }
    
    /**
     * Zeigt die Frage mit dem angegebenen Index an
     */
    function showQuestion(index) {
        if (!quizContainer) return;
        
        // Aktuelle Frage anzeigen
        if (currentQuestionDisplay) {
            currentQuestionDisplay.textContent = index + 1;
        }
        
        // Fortschrittsbalken aktualisieren
        if (progressBar) {
            progressBar.style.width = `${((index + 1) / quizQuestions.length) * 100}%`;
        }
        
        // Prev-Button aktivieren/deaktivieren
        if (prevButton) {
            prevButton.disabled = index === 0;
        }
        
        // Frage und Antwortoptionen erstellen
        const questionData = quizQuestions[index];
        
        // Bestehende Fragen entfernen
        const existingQuestions = quizContainer.querySelectorAll('.quiz-question');
        existingQuestions.forEach(q => q.style.display = 'none');
        
        // Prüfen, ob die Frage bereits erstellt wurde
        let questionElement = document.getElementById(`question-${index + 1}`);
        
        if (!questionElement) {
            // Neue Frage erstellen
            questionElement = document.createElement('div');
            questionElement.id = `question-${index + 1}`;
            questionElement.className = 'quiz-question';
            
            const questionTitle = document.createElement('h3');
            questionTitle.textContent = questionData.question;
            questionElement.appendChild(questionTitle);
            
            const optionsContainer = document.createElement('div');
            optionsContainer.className = 'quiz-options';
            
            // Antwortoptionen erstellen
            questionData.options.forEach((option, optionIndex) => {
                const label = document.createElement('label');
                label.className = 'quiz-option';
                
                const input = document.createElement('input');
                input.type = 'radio';
                input.name = `q${index + 1}`;
                input.value = optionIndex + 1;
                
                const span = document.createElement('span');
                span.className = 'option-text';
                span.textContent = option;
                
                label.appendChild(input);
                label.appendChild(span);
                optionsContainer.appendChild(label);
            });
            
            questionElement.appendChild(optionsContainer);
            quizContainer.appendChild(questionElement);
        } else {
            // Bestehende Frage anzeigen
            questionElement.style.display = 'block';
        }
        
        // Gespeicherte Antwort markieren, falls vorhanden
        if (answers[index] !== undefined) {
            const radioButtons = questionElement.querySelectorAll('input[type="radio"]');
            radioButtons[answers[index] - 1].checked = true;
        }
    }
    
    /**
     * Speichert die aktuelle Antwort
     */
    function saveAnswer() {
        const radioButtons = document.querySelectorAll(`input[name="q${currentQuestion + 1}"]`);
        radioButtons.forEach((radio, index) => {
            if (radio.checked) {
                answers[currentQuestion] = index + 1;
            }
        });
    }
    
    /**
     * Zeigt die Ergebnisse des Quiz an
     */
    function showResults() {
        if (!quizContainer || !resultsContainer) return;
        
        // Quiz ausblenden und Ergebnisse anzeigen
        quizContainer.style.display = 'none';
        resultsContainer.style.display = 'block';
        
        // Ergebnisse nach Kategorien gruppieren
        const categories = {
            "Reflektierender Dialog": [],
            "De-Privatisierung": [],
            "Fokus auf Lernen": [],
            "Zusammenarbeit": [],
            "Gemeinsame Ziele": [],
            "Fehlertoleranz": [],
            "Hilfekultur": []
        };
        
        // Antworten den Kategorien zuordnen
        for (let i = 0; i < quizQuestions.length; i++) {
            if (answers[i]) {
                const category = quizQuestions[i].category;
                categories[category].push(answers[i]);
            }
        }
        
        // Durchschnittswerte pro Kategorie berechnen
        const averages = {};
        let totalAverage = 0;
        let totalCount = 0;
        
        for (let category in categories) {
            if (categories[category].length > 0) {
                const sum = categories[category].reduce((a, b) => a + b, 0);
                averages[category] = sum / categories[category].length;
                totalAverage += sum;
                totalCount += categories[category].length;
            } else {
                averages[category] = 0;
            }
        }
        
        totalAverage = totalAverage / totalCount;
        
        // Chart erstellen
        const ctx = document.getElementById('results-chart');
        if (ctx) {
            new Chart(ctx, {
                type: 'radar',
                data: {
                    labels: Object.keys(averages),
                    datasets: [{
                        label: 'Ihre PLG',
                        data: Object.values(averages),
                        backgroundColor: 'rgba(52, 152, 219, 0.2)',
                        borderColor: 'rgba(52, 152, 219, 0.8)',
                        pointBackgroundColor: 'rgba(52, 152, 219, 1)',
                        pointBorderColor: '#fff',
                        pointHoverBackgroundColor: '#fff',
                        pointHoverBorderColor: 'rgba(52, 152, 219, 1)'
                    }]
                },
                options: {
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
                                    return context.raw.toFixed(1) + '/5';
                                }
                            }
                        }
                    }
                }
            });
        }
        
        // Textliche Auswertung
        const summaryElement = document.getElementById('results-summary');
        const recommendationsElement = document.getElementById('results-recommendations');
        
        if (summaryElement) {
            summaryElement.innerHTML = `
                <p>Ihre Arbeitsgruppe erreicht einen Gesamtwert von <strong>${totalAverage.toFixed(1)}/5</strong> auf dem Weg zur Professionellen Lerngemeinschaft.</p>
                <p>Die stärksten Bereiche sind: <strong>${getTopCategories(averages, 2).join(', ')}</strong>.</p>
                <p>Die größten Entwicklungspotenziale liegen in den Bereichen: <strong>${getBottomCategories(averages, 2).join(', ')}</strong>.</p>
            `;
        }
        
        if (recommendationsElement) {
            let recommendations = '<h4>Empfehlungen für Ihre Arbeitsgruppe</h4><ul>';
            
            // Empfehlungen basierend auf den schwächsten Bereichen
            const weakestCategories = getBottomCategories(averages, 3);
            
            weakestCategories.forEach(category => {
                switch(category) {
                    case 'Reflektierender Dialog':
                        recommendations += '<li><strong>Reflektierender Dialog:</strong> Etablieren Sie regelmäßige Gesprächsrunden, in denen Sie gezielt über Unterrichtserfahrungen reflektieren. Nutzen Sie strukturierte Methoden wie Kollegiale Fallberatung oder Reflecting Teams.</li>';
                        break;
                    case 'De-Privatisierung':
                        recommendations += '<li><strong>De-Privatisierung:</strong> Beginnen Sie mit freiwilligen kollegialen Hospitationen. Vereinbaren Sie klare Beobachtungsschwerpunkte und Feedback-Regeln, um eine vertrauensvolle Atmosphäre zu schaffen.</li>';
                        break;
                    case 'Fokus auf Lernen':
                        recommendations += '<li><strong>Fokus auf Lernen:</strong> Analysieren Sie gemeinsam Schülerarbeiten und Lernprozesse. Entwickeln Sie diagnostische Kompetenzen und tauschen Sie sich über differenzierte Fördermaßnahmen aus.</li>';
                        break;
                    case 'Zusammenarbeit':
                        recommendations += '<li><strong>Zusammenarbeit:</strong> Planen Sie konkrete Kooperationsprojekte mit klarer Aufgabenverteilung. Schaffen Sie Strukturen für regelmäßigen Austausch und gemeinsame Materialentwicklung.</li>';
                        break;
                    case 'Gemeinsame Ziele':
                        recommendations += '<li><strong>Gemeinsame Ziele:</strong> Entwickeln Sie in einem partizipativen Prozess konkrete, messbare Ziele für Ihre Arbeitsgruppe. Überprüfen Sie regelmäßig den Fortschritt und passen Sie die Ziele bei Bedarf an.</li>';
                        break;
                    case 'Fehlertoleranz':
                        recommendations += '<li><strong>Fehlertoleranz:</strong> Etablieren Sie eine Kultur, in der Fehler als Lernchancen gesehen werden. Teilen Sie eigene Erfahrungen mit Misserfolgen und reflektieren Sie gemeinsam darüber.</li>';
                        break;
                    case 'Hilfekultur':
                        recommendations += '<li><strong>Hilfekultur:</strong> Schaffen Sie niedrigschwellige Angebote für gegenseitige Unterstützung. Etablieren Sie Tandems oder Mentoring-Beziehungen und würdigen Sie gegenseitige Hilfe.</li>';
                        break;
                }
            });
            
            recommendations += '</ul>';
            recommendationsElement.innerHTML = recommendations;
        }
    }
    
    /**
     * Gibt die Top-Kategorien zurück
     */
    function getTopCategories(averages, count) {
        return Object.entries(averages)
            .sort((a, b) => b[1] - a[1])
            .slice(0, count)
            .map(entry => entry[0]);
    }
    
    /**
     * Gibt die schwächsten Kategorien zurück
     */
    function getBottomCategories(averages, count) {
        return Object.entries(averages)
            .sort((a, b) => a[1] - b[1])
            .slice(0, count)
            .map(entry => entry[0]);
    }
}

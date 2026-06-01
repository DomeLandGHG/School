// ===== DOM Elements =====
const slides = document.querySelectorAll('.slide');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const currentSlideSpan = document.getElementById('currentSlide');
const totalSlidesSpan = document.getElementById('totalSlides');
const progressFill = document.getElementById('progressFill');
const notesToggle = document.getElementById('notesToggle');
const notesPanel = document.getElementById('speakerNotesPanel');
const closeNotes = document.getElementById('closeNotes');
const notesContent = document.getElementById('notesContent');

// ===== State =====
let currentSlide = 0;
const totalSlides = slides.length;

// ===== Initialize =====
document.addEventListener('DOMContentLoaded', () => {
    totalSlidesSpan.textContent = totalSlides;
    updateSlide();
    createCharts();
    
    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowRight' || e.key === ' ') {
            e.preventDefault();
            nextSlide();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevSlide();
        } else if (e.key === 'Home') {
            e.preventDefault();
            goToSlide(0);
        } else if (e.key === 'End') {
            e.preventDefault();
            goToSlide(totalSlides - 1);
        }
    });
    
    // Touch/swipe support
    let touchStartX = 0;
    let touchEndX = 0;
    
    document.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });
    
    document.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });
    
    function handleSwipe() {
        if (touchEndX < touchStartX - 50) nextSlide();
        if (touchEndX > touchStartX + 50) prevSlide();
    }
});

// ===== Navigation Functions =====
function nextSlide() {
    if (currentSlide < totalSlides - 1) {
        goToSlide(currentSlide + 1);
    }
}

function prevSlide() {
    if (currentSlide > 0) {
        goToSlide(currentSlide - 1);
    }
}

function goToSlide(index) {
    // Remove active class from current slide
    slides[currentSlide].classList.remove('active');
    slides[currentSlide].classList.add('exit-left');
    
    // Update current slide
    currentSlide = index;
    
    // Add active class to new slide
    setTimeout(() => {
        slides.forEach(slide => slide.classList.remove('exit-left'));
        slides[currentSlide].classList.add('active');
    }, 50);
    
    updateSlide();
}

function updateSlide() {
    currentSlideSpan.textContent = currentSlide + 1;
    
    // Update progress bar
    const progress = ((currentSlide + 1) / totalSlides) * 100;
    progressFill.style.width = progress + '%';
    
    // Update button states
    prevBtn.disabled = currentSlide === 0;
    nextBtn.disabled = currentSlide === totalSlides - 1;
    
    // Update speaker notes
    updateSpeakerNotes();
}

// ===== Speaker Notes =====
function updateSpeakerNotes() {
    const notes = slides[currentSlide].querySelector('.speaker-notes');
    if (notes) {
        notesContent.innerHTML = notes.innerHTML;
    } else {
        notesContent.innerHTML = '<p>No speaker notes for this slide.</p>';
    }
}

notesToggle.addEventListener('click', () => {
    notesPanel.classList.toggle('active');
});

closeNotes.addEventListener('click', () => {
    notesPanel.classList.remove('active');
});

// ===== Button Event Listeners =====
prevBtn.addEventListener('click', prevSlide);
nextBtn.addEventListener('click', nextSlide);

// ===== Chart Creation =====
function createCharts() {
    // Growth Chart
    const growthCtx = document.getElementById('growthChart');
    if (growthCtx) {
        const gradient = growthCtx.getContext('2d').createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, 'rgba(0, 255, 247, 0.6)');
        gradient.addColorStop(1, 'rgba(176, 38, 255, 0.2)');
        
        new Chart(growthCtx, {
            type: 'line',
            data: {
                labels: ['2018', '2019', '2020', '2021', '2022', '2023', '2024', '2025'],
                datasets: [{
                    label: 'Revenue (NZ$ Million)',
                    data: [143, 180, 235, 310, 385, 460, 548, 759],
                    borderColor: '#00fff7',
                    backgroundColor: gradient,
                    borderWidth: 4,
                    fill: true,
                    tension: 0.4,
                    pointRadius: 6,
                    pointBackgroundColor: '#00fff7',
                    pointBorderColor: '#0a0e27',
                    pointBorderWidth: 3,
                    pointHoverRadius: 8,
                    pointHoverBackgroundColor: '#b026ff',
                    pointHoverBorderColor: '#00fff7',
                    pointHoverBorderWidth: 3
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        labels: {
                            color: '#e0e7ff',
                            font: {
                                family: 'Orbitron',
                                size: 16,
                                weight: 'bold'
                            },
                            padding: 20
                        }
                    },
                    title: {
                        display: true,
                        text: 'NZ Gaming Industry Revenue Growth',
                        color: '#00fff7',
                        font: {
                            family: 'Orbitron',
                            size: 24,
                            weight: 'bold'
                        },
                        padding: 20
                    },
                    tooltip: {
                        backgroundColor: 'rgba(10, 14, 39, 0.95)',
                        titleColor: '#00fff7',
                        bodyColor: '#e0e7ff',
                        borderColor: '#00fff7',
                        borderWidth: 2,
                        padding: 15,
                        displayColors: false,
                        titleFont: {
                            family: 'Orbitron',
                            size: 16
                        },
                        bodyFont: {
                            family: 'Rajdhani',
                            size: 18
                        },
                        callbacks: {
                            label: function(context) {
                                return 'Revenue: NZ$' + context.parsed.y + 'M';
                            }
                        }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        grid: {
                            color: 'rgba(0, 255, 247, 0.1)',
                            lineWidth: 1
                        },
                        ticks: {
                            color: '#94a3b8',
                            font: {
                                family: 'Rajdhani',
                                size: 14
                            },
                            callback: function(value) {
                                return 'NZ$' + value + 'M';
                            }
                        }
                    },
                    x: {
                        grid: {
                            color: 'rgba(0, 255, 247, 0.1)',
                            lineWidth: 1
                        },
                        ticks: {
                            color: '#94a3b8',
                            font: {
                                family: 'Rajdhani',
                                size: 14
                            }
                        }
                    }
                }
            }
        });
    }
    
    // Economic Impact Chart
    const economicCtx = document.getElementById('economicChart');
    if (economicCtx) {
        new Chart(economicCtx, {
            type: 'doughnut',
            data: {
                labels: ['Export Revenue', 'Domestic Revenue', 'Investment & Growth'],
                datasets: [{
                    data: [720, 39, 100],
                    backgroundColor: [
                        'rgba(0, 255, 247, 0.8)',
                        'rgba(176, 38, 255, 0.8)',
                        'rgba(16, 255, 0, 0.8)'
                    ],
                    borderColor: [
                        '#00fff7',
                        '#b026ff',
                        '#10ff00'
                    ],
                    borderWidth: 3,
                    hoverOffset: 15
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        position: 'bottom',
                        labels: {
                            color: '#e0e7ff',
                            font: {
                                family: 'Rajdhani',
                                size: 16,
                                weight: 'bold'
                            },
                            padding: 20,
                            usePointStyle: true,
                            pointStyle: 'circle'
                        }
                    },
                    title: {
                        display: true,
                        text: 'Revenue Distribution (2025)',
                        color: '#00fff7',
                        font: {
                            family: 'Orbitron',
                            size: 24,
                            weight: 'bold'
                        },
                        padding: 20
                    },
                    tooltip: {
                        backgroundColor: 'rgba(10, 14, 39, 0.95)',
                        titleColor: '#00fff7',
                        bodyColor: '#e0e7ff',
                        borderColor: '#00fff7',
                        borderWidth: 2,
                        padding: 15,
                        titleFont: {
                            family: 'Orbitron',
                            size: 16
                        },
                        bodyFont: {
                            family: 'Rajdhani',
                            size: 18
                        },
                        callbacks: {
                            label: function(context) {
                                const label = context.label || '';
                                const value = context.parsed || 0;
                                const total = context.dataset.data.reduce((a, b) => a + b, 0);
                                const percentage = ((value / total) * 100).toFixed(1);
                                return label + ': NZ$' + value + 'M (' + percentage + '%)';
                            }
                        }
                    }
                }
            }
        });
    }
}

// ===== Particles Animation (Optional Enhancement) =====
function createParticles() {
    const particlesContainer = document.querySelector('.gaming-particles');
    if (!particlesContainer) return;
    
    for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        particle.style.cssText = `
            position: absolute;
            width: ${Math.random() * 4 + 2}px;
            height: ${Math.random() * 4 + 2}px;
            background: ${Math.random() > 0.5 ? '#00fff7' : '#b026ff'};
            border-radius: 50%;
            left: ${Math.random() * 100}%;
            top: ${Math.random() * 100}%;
            opacity: ${Math.random() * 0.5 + 0.2};
            animation: float ${Math.random() * 10 + 5}s ease-in-out infinite;
            animation-delay: ${Math.random() * 5}s;
            box-shadow: 0 0 10px currentColor;
        `;
        particlesContainer.appendChild(particle);
    }
}

// Initialize particles
createParticles();

// ===== Auto-advance Timer (Optional) =====
let autoAdvanceTimer = null;
let autoAdvanceEnabled = false;

function startAutoAdvance(seconds = 60) {
    stopAutoAdvance();
    autoAdvanceEnabled = true;
    autoAdvanceTimer = setInterval(() => {
        if (currentSlide < totalSlides - 1) {
            nextSlide();
        } else {
            stopAutoAdvance();
        }
    }, seconds * 1000);
}

function stopAutoAdvance() {
    if (autoAdvanceTimer) {
        clearInterval(autoAdvanceTimer);
        autoAdvanceTimer = null;
    }
    autoAdvanceEnabled = false;
}

// Press 'A' to toggle auto-advance
document.addEventListener('keydown', (e) => {
    if (e.key.toLowerCase() === 'a' && !e.ctrlKey && !e.metaKey) {
        if (autoAdvanceEnabled) {
            stopAutoAdvance();
            console.log('Auto-advance disabled');
        } else {
            startAutoAdvance(30); // 30 seconds per slide
            console.log('Auto-advance enabled (30s per slide)');
        }
    }
});

// ===== Presentation Mode (Fullscreen) =====
document.addEventListener('keydown', (e) => {
    if (e.key === 'F11') {
        e.preventDefault();
        toggleFullscreen();
    }
});

function toggleFullscreen() {
    if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen().catch(err => {
            console.log('Fullscreen error:', err);
        });
    } else {
        document.exitFullscreen();
    }
}

// ===== Console Tips =====
console.log('%c🎮 NZ Gaming Presentation Controls', 'color: #00fff7; font-size: 20px; font-weight: bold;');
console.log('%cKeyboard Shortcuts:', 'color: #b026ff; font-size: 16px; font-weight: bold;');
console.log('→ or Space: Next slide');
console.log('←: Previous slide');
console.log('Home: First slide');
console.log('End: Last slide');
console.log('A: Toggle auto-advance (30s per slide)');
console.log('F11: Toggle fullscreen');
console.log('\n%cMouse/Touch:', 'color: #b026ff; font-size: 16px; font-weight: bold;');
console.log('Click buttons to navigate');
console.log('Swipe left/right on touch devices');
console.log('Click "📝 Notes" to view speaker notes');

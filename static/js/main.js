// Main JavaScript file for AI Docx Builder Bootcamp

document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 100,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Add active class to current module in sidebar
    const currentPath = window.location.pathname;
    document.querySelectorAll('.section-nav a').forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        }
    });

    // Initialize video players if present
    const videoPlayers = document.querySelectorAll('.video-player');
    if (videoPlayers.length > 0) {
        videoPlayers.forEach(player => {
            // Video player initialization code would go here
            console.log('Video player initialized:', player.id);
        });
    }

    // Handle interactive elements in modules
    const interactiveElements = document.querySelectorAll('.interactive-element');
    if (interactiveElements.length > 0) {
        interactiveElements.forEach(element => {
            element.addEventListener('click', function() {
                this.classList.toggle('active');
            });
        });
    }

    // Progress tracking
    const progressTracker = {
        saveProgress: function(moduleId, progress) {
            localStorage.setItem(`module_${moduleId}_progress`, progress);
        },
        getProgress: function(moduleId) {
            return localStorage.getItem(`module_${moduleId}_progress`) || 0;
        },
        updateUI: function() {
            const moduleId = document.querySelector('.module-content')?.dataset?.moduleId;
            if (moduleId) {
                const progress = this.getProgress(moduleId);
                // Update progress UI elements
                const progressElements = document.querySelectorAll('.progress-indicator');
                progressElements.forEach(el => {
                    el.style.width = `${progress}%`;
                });
            }
        }
    };

    // Initialize progress UI
    progressTracker.updateUI();

    // Track scroll position for progress in module content
    const moduleContent = document.querySelector('.module-body');
    if (moduleContent) {
        const moduleId = document.querySelector('.module-content')?.dataset?.moduleId;
        if (moduleId) {
            window.addEventListener('scroll', function() {
                const scrollPosition = window.scrollY;
                const contentHeight = moduleContent.scrollHeight;
                const windowHeight = window.innerHeight;
                const scrollableDistance = contentHeight - windowHeight;
                
                if (scrollableDistance > 0) {
                    const progress = Math.min(Math.round((scrollPosition / scrollableDistance) * 100), 100);
                    progressTracker.saveProgress(moduleId, progress);
                    
                    // Update progress indicators
                    const progressElements = document.querySelectorAll('.progress-indicator');
                    progressElements.forEach(el => {
                        el.style.width = `${progress}%`;
                    });
                }
            });
        }
    }
});

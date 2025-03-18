document.addEventListener("DOMContentLoaded", function() {
    const loadingAnimation = document.getElementById('loading-animation');

    setTimeout(() => {
        loadingAnimation.style.opacity = '0';
        setTimeout(() => {
            loadingAnimation.style.display = 'none';
        }, 1000);
    }, 4000); // Adjust the time to match the animation duration
});
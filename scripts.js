// Animação do texto "Sobre Nós" ao scroll
document.addEventListener('scroll', () => {
    const fadeText = document.querySelector('.fade-text');
    const offset = fadeText.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;

    if (offset < windowHeight * 0.85) {
        fadeText.classList.add('visible');
    }
});

// Propaganda na Hero com fade-in nos textos
window.addEventListener('load', () => {
    const heroText = document.querySelector('.hero-text');
    heroText.style.opacity = 0;
    heroText.style.transition = 'opacity 2s ease-in-out';
    setTimeout(() => {
        heroText.style.opacity = 1;
    }, 500);
});
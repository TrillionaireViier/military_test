document.addEventListener('DOMContentLoaded', () => {
    console.log('Мілітарі Дизайн ініціалізовано');
    
    // Проста анімація для елементів при скролі
    const blocks = document.querySelectorAll('.style-block');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    blocks.forEach(block => {
        block.style.opacity = 0.5;
        block.style.transform = 'translateY(20px)';
        block.style.transition = 'all 0.8s ease-out';
        observer.observe(block);
    });
});

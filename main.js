
// Back to Top Button
const backToTopButton = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Animate contact icons on hover
document.querySelectorAll('.contact-info ul li a').forEach(icon => {
    icon.addEventListener('mouseover', () => {
        icon.style.transform = 'rotate(360deg)';
        icon.style.transition = 'transform 0.5s';
    });
    icon.addEventListener('mouseout', () => {
        icon.style.transform = 'rotate(0)';
    });
});
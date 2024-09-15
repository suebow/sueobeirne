// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const accordions = document.querySelectorAll('.accordion');
    
    accordions.forEach(acc => {
        acc.addEventListener('click', () => {
            // Toggle active class
            acc.classList.toggle('active');
            
            // Get the associated panel
            const panel = acc.nextElementSibling;
            
            // Toggle panel visibility
            if (panel.style.display === 'block') {
                panel.style.display = 'none';
            } else {
                panel.style.display = 'block';
            }
        });
    });
});
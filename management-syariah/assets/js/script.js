// Load komponen navbar dan footer
document.addEventListener('DOMContentLoaded', function() {
    // Load Navbar
    fetch('/management-syariah/components/navbar.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('navbar').innerHTML = data;
            
            // Mobile menu toggle
            const toggleBtn = document.getElementById('navToggle');
            if (toggleBtn) {
                toggleBtn.addEventListener('click', () => {
                    const menu = document.querySelector('.nav-menu');
                    if (menu) menu.classList.toggle('active');
                });
            }
        })
        .catch(err => console.log('Navbar load error:', err));
    
    // Load Footer
    fetch('/management-syariah/components/footer.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('footer').innerHTML = data;
        })
        .catch(err => console.log('Footer load error:', err));
});
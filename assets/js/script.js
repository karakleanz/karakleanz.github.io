// Select all nav links
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.getElementById('navbarCollapse'); // Fixed ID to match HTML
const bsCollapse = new bootstrap.Collapse(menuToggle, { toggle: false });

navLinks.forEach((l) => {
    l.addEventListener('click', () => {
        // Only close if the menu is currently visible (mobile view)
        if (menuToggle.classList.contains('show')) {
            bsCollapse.hide();
        }
        // Close any open dropdowns
        document.querySelectorAll('.dropdown-menu.show').forEach(menu => {
            menu.classList.remove('show');
        });
        document.querySelectorAll('.dropdown.show').forEach(dropdown => {
            dropdown.classList.remove('show');
        });
    });
});
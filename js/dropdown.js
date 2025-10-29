document.addEventListener('DOMContentLoaded', function() {
    const dropdowns = document.querySelectorAll('.download-dropdown');
    
    dropdowns.forEach(dropdown => {
        const button = dropdown.querySelector('.btn');
        const content = dropdown.querySelector('.download-dropdown-content');
        
        // Handle click/touch events
        button.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Close other open dropdowns
            dropdowns.forEach(other => {
                if (other !== dropdown && other.classList.contains('active')) {
                    other.classList.remove('active');
                }
            });
            
            // Toggle current dropdown
            dropdown.classList.toggle('active');
        });

        // Handle double-click for the main button
        let lastClickTime = 0;
        button.addEventListener('click', function(e) {
            const currentTime = new Date().getTime();
            if (currentTime - lastClickTime < 300) { // Double click detected
                const href = this.getAttribute('data-href');
                if (href) {
                    window.location.href = href;
                }
            }
            lastClickTime = currentTime;
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', function(e) {
            if (!dropdown.contains(e.target)) {
                dropdown.classList.remove('active');
            }
        });
        
        // Handle dropdown item clicks
        content.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', function() {
                dropdown.classList.remove('active');
            });
        });
        
        // Handle touch events on mobile
        let touchStartY = 0;
        let touchEndY = 0;
        
        content.addEventListener('touchstart', function(e) {
            touchStartY = e.touches[0].clientY;
        });
        
        content.addEventListener('touchmove', function(e) {
            touchEndY = e.touches[0].clientY;
        });
        
        content.addEventListener('touchend', function() {
            const swipeDistance = touchEndY - touchStartY;
            if (swipeDistance > 50) { // If swiped down more than 50px
                dropdown.classList.remove('active');
            }
        });
    });
}); 
document.addEventListener('DOMContentLoaded', function() {
    // Testimonial slider functionality
    const testimonials = [
        {
            text: "MedCortico transformed my clinical workflow. Their EMR system is intuitive and saves me hours every week. Highly recommended for any private practice!",
            author: "Dr. Sharma",
            title: "Cardiologist, Delhi"
        },
        {
            text: "The website MedCortico built for my clinic has significantly increased my patient appointments. Their design is professional and exactly what I needed.",
            author: "Dr. Patel",
            title: "Pediatrician, Mumbai"
        },
        {
            text: "MedScribe is a game-changer! I can now document patient visits in real-time without typing. It's accurate and understands medical terminology perfectly.",
            author: "Dr. Gupta",
            title: "Neurologist, Bangalore"
        },
        {
            text: "Since implementing MedCortico's EMR, my practice has become paperless and more efficient. Patient records are organized and accessible whenever I need them.",
            author: "Dr. Khan",
            title: "Family Physician, Hyderabad"
        },
        {
            text: "Their social media management has helped me connect with more patients. My online presence has grown tremendously with minimal effort on my part.",
            author: "Dr. Reddy",
            title: "Dermatologist, Chennai"
        }
    ];
    
    const sliderContainer = document.querySelector('.testimonial-slider');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    // Create testimonial slides
    function createTestimonials() {
        sliderContainer.innerHTML = '';
        
        testimonials.forEach((testimonial, index) => {
            const slide = document.createElement('div');
            slide.className = `testimonial-slide ${index === 0 ? 'active' : ''}`;
            
            slide.innerHTML = `
                <div class="testimonial-content">
                    <div class="quote-icon"><i class="fas fa-quote-left"></i></div>
                    <p>"${testimonial.text}"</p>
                    <div class="testimonial-author">
                        <h4>${testimonial.author}</h4>
                        <p>${testimonial.title}</p>
                    </div>
                </div>
            `;
            
            sliderContainer.appendChild(slide);
        });
        
        // Create dots
        dotsContainer.innerHTML = '';
        testimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            
            dot.addEventListener('click', () => {
                goToSlide(index);
            });
            
            dotsContainer.appendChild(dot);
        });
    }
    
    // Go to specific slide
    function goToSlide(index) {
        const slides = document.querySelectorAll('.testimonial-slide');
        const dots = document.querySelectorAll('.dot');
        
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // Next slide
    function nextSlide() {
        const newIndex = (currentIndex + 1) % testimonials.length;
        goToSlide(newIndex);
    }
    
    // Previous slide
    function prevSlide() {
        const newIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
        goToSlide(newIndex);
    }
    
    // Initialize slider
    createTestimonials();
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    sliderContainer.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    sliderContainer.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
}); 
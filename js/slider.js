document.addEventListener('DOMContentLoaded', function() {
    // Testimonial slider functionality
    const testimonials = [
        {
            text: "MedCortico transformed my clinical workflow. Their EMR system is intuitive and saves me hours every week. Highly recommended for any private practice!",
            author: "Dr. Nehal Rao",
            title: "Cardiologist, Delhi"
        },
        {
            text: "Most EMRs slow me down, but MedCortico is refreshingly intuitive. One-click templates and easy prescription sharing save me time. Highly recommended!",
            author: "Dr. Priya Menon",
            title: "Gynecologist, Mumbai"
        },
        {
            text: "Sending digital prescriptions via WhatsApp has been a game-changer for my clinic. Patients love the convenience, and I no longer get calls about lost prescriptions",
            author: "Dr. Rohan Verma",
            title: "Neurologist, Bangalore"
        },
        {
            text: "Since implementing MedCortico's EMR, my practice has become paperless and more efficient. Patient records are organized and accessible whenever I need them.",
            author: "Dr. Azim Khan",
            title: "Internal Medicine, Hyderabad"
        },

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
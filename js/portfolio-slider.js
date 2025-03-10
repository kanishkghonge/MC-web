document.addEventListener('DOMContentLoaded', function() {
    // Portfolio slider functionality
    const portfolioItems = [
        {
            image: '../Photos/cico.jpg',
            title: "CicoNutrition.com",
            description: "Modern and responsive website for a nutrition clinic"
        },
        {
            image: '../Photos/evidence.jpg',
            title: "EvidenceHealthcareClinic.com",
            description: "Clinic website showcasing services with integrated appointment booking system"
        },
        {
            image: '../Photos/fmrc.jpg',
            title: "fetalmricommunity.org",
            description: "Website with payment gateway and journal hosting"
        },
        {
            image: '../Photos/delrad.jpg',
            title: "Delrad.in",
            description: "Website showcasing radiology DNB course with payment gateway"
        },
        {
            image: '../Photos/ass.jpg',
            title: "AasSanginiSanstha.com",
            description: "Website for a non-profit organization providing free medical services"
        }
    ];
  
    const portfolioSlider = document.querySelector('.portfolio-slider');
    const dotsContainer = document.querySelector('.slider-dots');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    
    let currentIndex = 0;
    
    // Create portfolio slides
    function createPortfolioSlides() {
        portfolioSlider.innerHTML = '';
        
        portfolioItems.forEach((item, index) => {
            const slide = document.createElement('div');
            slide.className = `portfolio-slide ${index === 0 ? 'active' : ''}`;
            
            slide.innerHTML = `
                <img src="${item.image}" alt="${item.title}">
                <div class="portfolio-caption">
                    <h3>${item.title}</h3>
                    <p>${item.description}</p>
                </div>
            `;
            
            portfolioSlider.appendChild(slide);
        });
        
        // Create dots
        dotsContainer.innerHTML = '';
        portfolioItems.forEach((_, index) => {
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
        const slides = document.querySelectorAll('.portfolio-slide');
        const dots = document.querySelectorAll('.dot');
        
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        dots[index].classList.add('active');
        
        currentIndex = index;
    }
    
    // Next slide
    function nextSlide() {
        const newIndex = (currentIndex + 1) % portfolioItems.length;
        goToSlide(newIndex);
    }
    
    // Previous slide
    function prevSlide() {
        const newIndex = (currentIndex - 1 + portfolioItems.length) % portfolioItems.length;
        goToSlide(newIndex);
    }
    
    // Initialize slider
    createPortfolioSlides();
    
    // Event listeners
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);
    
    // Auto slide
    let slideInterval = setInterval(nextSlide, 5000);
    
    // Pause auto slide on hover
    portfolioSlider.addEventListener('mouseenter', () => {
        clearInterval(slideInterval);
    });
    
    portfolioSlider.addEventListener('mouseleave', () => {
        slideInterval = setInterval(nextSlide, 5000);
    });
    
    // Website testimonials slider
    const websiteTestimonials = [
        {
            text: "The website MedCortico built for my clinic has significantly increased my patient appointments. Their design is professional and exactly what I needed.",
            author: "Dr. Patel",
            title: "Pediatrician, Mumbai"
        },
        {
            text: "I've received numerous compliments on my new website. The online booking feature has reduced phone calls to my reception by 40%.",
            author: "Dr. Gupta",
            title: "Dermatologist, Delhi"
        },
        {
            text: "MedCortico understood exactly what I wanted for my dental practice website. The before/after gallery they created showcases my work perfectly.",
            author: "Dr. Reddy",
            title: "Dentist, Hyderabad"
        }
    ];
    
    const websiteTestimonialSlider = document.querySelector('.website-testimonials .testimonial-slider');
    const websiteDotsContainer = document.querySelector('.website-testimonials .slider-dots');
    
    if (websiteTestimonialSlider && websiteDotsContainer) {
        // Create testimonial slides for website page
        websiteTestimonialSlider.innerHTML = '';
        
        websiteTestimonials.forEach((testimonial, index) => {
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
            
            websiteTestimonialSlider.appendChild(slide);
        });
        
        // Create dots for website testimonials
        websiteDotsContainer.innerHTML = '';
        websiteTestimonials.forEach((_, index) => {
            const dot = document.createElement('div');
            dot.className = `dot ${index === 0 ? 'active' : ''}`;
            dot.dataset.index = index;
            
            dot.addEventListener('click', () => {
                const slides = document.querySelectorAll('.website-testimonials .testimonial-slide');
                const dots = document.querySelectorAll('.website-testimonials .dot');
                
                slides.forEach(slide => slide.classList.remove('active'));
                dots.forEach(dot => dot.classList.remove('active'));
                
                slides[index].classList.add('active');
                dots[index].classList.add('active');
            });
            
            websiteDotsContainer.appendChild(dot);
        });
        
        // Website testimonials navigation
        const websitePrevBtn = document.querySelector('.website-testimonials .prev-btn');
        const websiteNextBtn = document.querySelector('.website-testimonials .next-btn');
        
        let websiteCurrentIndex = 0;
        
        function websiteNextSlide() {
            websiteCurrentIndex = (websiteCurrentIndex + 1) % websiteTestimonials.length;
            const slides = document.querySelectorAll('.website-testimonials .testimonial-slide');
            const dots = document.querySelectorAll('.website-testimonials .dot');
            
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[websiteCurrentIndex].classList.add('active');
            dots[websiteCurrentIndex].classList.add('active');
        }
        
        function websitePrevSlide() {
            websiteCurrentIndex = (websiteCurrentIndex - 1 + websiteTestimonials.length) % websiteTestimonials.length;
            const slides = document.querySelectorAll('.website-testimonials .testimonial-slide');
            const dots = document.querySelectorAll('.website-testimonials .dot');
            
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            slides[websiteCurrentIndex].classList.add('active');
            dots[websiteCurrentIndex].classList.add('active');
        }
        
        websitePrevBtn.addEventListener('click', websitePrevSlide);
        websiteNextBtn.addEventListener('click', websiteNextSlide);
        
        // Auto slide for website testimonials
        let websiteSlideInterval = setInterval(websiteNextSlide, 6000);
        
        websiteTestimonialSlider.addEventListener('mouseenter', () => {
            clearInterval(websiteSlideInterval);
        });
        
        websiteTestimonialSlider.addEventListener('mouseleave', () => {
            websiteSlideInterval = setInterval(websiteNextSlide, 6000);
        });
    }
}); 
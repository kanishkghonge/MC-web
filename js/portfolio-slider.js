document.addEventListener('DOMContentLoaded', function() {
    // Portfolio slider functionality
    const portfolioItems = [
        {
            image: '../Photos/cico.jpg',
            title: "CicoNutrition.com",
            description: "Modern and responsive website for a nutrition clinic",
            link: "https://www.ciconutrition.com"
        },
        {
            image: '../Photos/evidence.jpg',
            title: "EvidenceHealthcareClinic.com",
            description: "Clinic website showcasing services with integrated appointment booking system",
            link: "https://www.evidencehealthcareclinic.com"
        },
        {
            image: '../Photos/fmrc.jpg',
            title: "fetalmricommunity.org",
            description: "Website with payment gateway and journal hosting",
            link: "https://www.fetalmricommunity.org"
        },
        {
            image: '../Photos/delrad.jpg',
            title: "Delrad.in",
            description: "Website showcasing radiology DNB course with payment gateway",
            link: "https://www.delrad.in"
        },
        {
            image: '../Photos/ass.jpg',
            title: "AasSanginiSanstha.com",
            description: "Website for a non-profit organization providing free medical services",
            link: "https://www.aassanginisanstha.com"
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
                <a href="${item.link}" target="_blank">
                    <img src="${item.image}" alt="${item.title}">
                    <div class="portfolio-caption">
                        <h3>${item.title}</h3>
                        <p>${item.description}</p>
                    </div>
                </a>
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
            text: "I searched for weeks, comparing prices, and couldn’t find anyone charging lower than MedCortico. I was hesitant at first, but when they built a demo for my clinic without charging anything upfront, I was surprised at the quality, speed, and attention to detail. This convinced me to get my entire website done by them.",
            author: "Dr. Anjali Patel",
            title: "Pediatrician, Mumbai"
        },
        {
            text: " I have wanted a website for my clinic for a long time, but I did not want to get caught up in the technicalities of website development. I simply shared my vision with the MedCortico team, and they handled everything from start to finish with complete professionalism. The website reflects my practice perfectly, and the process was so smooth that I hardly had to follow up. Would definatly recommend to every clinician looking for a website. ",
            author: "Dr. Sahil Gupta",
            title: "Dermatologist, Delhi"
        },
        {
            text: "Developing a website with MedCortico was a great experience and surprisingly easy, within a week after our first contact I had a fully functional website. I would highly recommend MedCortico to anyone looking for a website. ",
            author: "Dr. Rakesh Reddy",
            title: "Radiologist, Hyderabad"
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
document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const specialtySelect = document.getElementById('specialty');
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');
    const calcForm = document.getElementById('clinic-calc-form');
    const resultsSection = document.getElementById('results');

    // Populate Categories
    const categories = Object.keys(SPECIALTY_DATA);
    categories.forEach(cat => {
        const option = document.createElement('option');
        option.value = cat;
        option.textContent = cat;
        categorySelect.appendChild(option);
    });

    // Populate States
    const states = Object.keys(LOCATION_DATA).sort();
    states.forEach(state => {
        const option = document.createElement('option');
        option.value = state;
        option.textContent = state;
        stateSelect.appendChild(option);
    });

    // Category Change -> Update Specialties
    categorySelect.addEventListener('change', () => {
        const selectedCat = categorySelect.value;
        specialtySelect.innerHTML = '<option value="" disabled selected>Select Specialty</option>';
        specialtySelect.disabled = false;

        const specialties = Object.keys(SPECIALTY_DATA[selectedCat]);
        specialties.forEach(spec => {
            const option = document.createElement('option');
            option.value = spec;
            option.textContent = spec;
            specialtySelect.appendChild(option);
        });
    });

    // State Change -> Update Cities
    stateSelect.addEventListener('change', () => {
        const selectedState = stateSelect.value;
        citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
        citySelect.disabled = false;

        const cities = Object.keys(LOCATION_DATA[selectedState]).sort();
        cities.forEach(city => {
            const option = document.createElement('option');
            option.value = city;
            option.textContent = city;
            citySelect.appendChild(option);
        });
    });

    // Form Submission
    calcForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const timeline = parseInt(document.getElementById('timeline').value);
        const category = categorySelect.value;
        const specialty = specialtySelect.value;
        const city = citySelect.value;

        // Hide previous results and show loading
        resultsSection.style.display = 'none';
        const loadingOverlay = document.getElementById('loading-overlay');
        const progressBarFill = document.getElementById('progress-bar-fill');
        const loadingPromoText = document.getElementById('loading-promo-text');

        loadingOverlay.style.display = 'block';
        loadingOverlay.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Progressive Loading Logic
        const duration = 15000; // 15 seconds
        const updateInterval = 100; // 100ms
        let elapsed = 0;

        const messages = [
            `${timeline} years is a long wait! Start building your digital presence today.`,
            "Launch your Online Clinic at just <strong>₹499 per month</strong> 🚀",
            "Professional Website + Teleconsultation portal = Ready in 24 hours!",
            `Analyzing equipment requirements for ${specialty} in ${city}...`,
            "Finalizing your personalized clinical investment roadmap..."
        ];

        const timer = setInterval(() => {
            elapsed += updateInterval;
            const progress = Math.min((elapsed / duration) * 100, 100);
            progressBarFill.style.width = `${progress}%`;

            // Rotate messages every 3 seconds
            const messageIndex = Math.min(Math.floor(elapsed / 3000), messages.length - 1);
            loadingPromoText.innerHTML = messages[messageIndex];

            if (elapsed >= duration) {
                clearInterval(timer);
                completeCalculation();
            }
        }, updateInterval);

        function completeCalculation() {
            const state = stateSelect.value;
            const spaceStatus = document.getElementById('space-status').value;

            // Data Retrieval
            const cityInfo = LOCATION_DATA[state][city];
            const tier = cityInfo.tier;
            const multiplier = TIER_MULTIPLIERS[tier];
            const specInfo = SPECIALTY_DATA[category][specialty];

            // Calculations
            const equipmentCost = specInfo.baseEquipmentCost;
            const interiorCost = BASE_COSTS.minArea * BASE_COSTS.interiorPerSqFt * multiplier;

            let spaceCost = 0;
            let monthlyRent = 0;
            if (spaceStatus === 'rent') {
                monthlyRent = BASE_COSTS.minArea * BASE_COSTS.rentPerSqFt * multiplier;
                spaceCost = monthlyRent * 12;
            } else if (spaceStatus === 'buy') {
                spaceCost = BASE_COSTS.minArea * BASE_COSTS.purchasePerSqFt * multiplier;
            }

            const monthlyOpex = (spaceStatus === 'rent' ? monthlyRent : 0) + (10000 * multiplier);
            const bufferCost = monthlyOpex * BASE_COSTS.bufferMonths;

            const totalInvestment = equipmentCost + interiorCost + spaceCost + bufferCost;
            const monthlySaving = totalInvestment / (timeline * 12);

            loadingOverlay.style.display = 'none';

            // Display Results
            displayResults({
                monthlySaving,
                totalInvestment,
                equipmentCost,
                interiorCost,
                spaceCost,
                bufferCost,
                timeline,
                city,
                category,
                specialty
            });
        }
    });

    function formatCurrency(amount) {
        return new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
            maximumFractionDigits: 0
        }).format(amount);
    }

    function displayResults(data) {
        const totalFormatted = formatCurrency(data.totalInvestment);
        const savingFormatted = formatCurrency(data.monthlySaving);

        document.getElementById('monthly-saving').textContent = savingFormatted;
        document.getElementById('cost-equipment').textContent = formatCurrency(data.equipmentCost);
        document.getElementById('cost-interiors').textContent = formatCurrency(data.interiorCost);
        document.getElementById('cost-space').textContent = formatCurrency(data.spaceCost);
        document.getElementById('cost-buffer').textContent = formatCurrency(data.bufferCost);

        // Main Calculation Text
        const calcText = `In order to set up a <strong>${data.specialty}</strong> clinic in <strong>${data.city}</strong>, it will cost you to accumulate a total of <strong>${totalFormatted}</strong>. To reach this goal in <strong>${data.timeline} years</strong>, you need to save per month <strong>${savingFormatted}</strong>.`;
        document.getElementById('dynamic-calculation-text').innerHTML = calcText;

        // Funnel Text
        const funnelText = `<strong>${data.timeline} years is still far away!</strong> While you save up for it, in the meanwhile start your online OPD by having a professional website and a teleconsultation portal. Contact us to get started! <strong>at just ₹499 per month</strong>`;
        document.getElementById('funnel-text').innerHTML = funnelText;

        // WhatsApp Link
        const waNumber = '918527183292';
        const waMessage = encodeURIComponent(`I want to set up my online clinic how can i get started?`);
        document.getElementById('whatsapp-link').href = `https://wa.me/${waNumber}?text=${waMessage}`;

        // Also update the button inside the result card
        const resultCardButton = document.querySelector('.result-card .btn-whatsapp');
        if (resultCardButton) {
            resultCardButton.href = `https://wa.me/${waNumber}?text=${waMessage}`;
        }

        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
});

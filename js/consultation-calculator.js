document.addEventListener('DOMContentLoaded', () => {
    const categorySelect = document.getElementById('category');
    const specialtySelect = document.getElementById('specialty');
    const stateSelect = document.getElementById('state');
    const citySelect = document.getElementById('city');
    const calcForm = document.getElementById('consultation-calc-form');
    const resultsSection = document.getElementById('results');

    // Populate Categories (Using clinic-calculator-data.js)
    if (typeof SPECIALTY_DATA !== 'undefined') {
        const categories = Object.keys(SPECIALTY_DATA);
        categories.forEach(cat => {
            const option = document.createElement('option');
            option.value = cat;
            option.textContent = cat;
            categorySelect.appendChild(option);
        });
    }

    // Populate States (Using clinic-calculator-data.js)
    if (typeof LOCATION_DATA !== 'undefined') {
        const states = Object.keys(LOCATION_DATA).sort();
        states.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });
    }

    // Category Change -> Update Specialties
    categorySelect.addEventListener('change', () => {
        const selectedCat = categorySelect.value;
        specialtySelect.innerHTML = '<option value="" disabled selected>Select Specialty</option>';
        specialtySelect.disabled = false;

        if (typeof SPECIALTY_DATA !== 'undefined') {
            const specialties = Object.keys(SPECIALTY_DATA[selectedCat]);
            specialties.forEach(spec => {
                const option = document.createElement('option');
                option.value = spec;
                option.textContent = spec;
                specialtySelect.appendChild(option);
            });
        }
    });

    // State Change -> Update Cities
    stateSelect.addEventListener('change', () => {
        const selectedState = stateSelect.value;
        citySelect.innerHTML = '<option value="" disabled selected>Select City</option>';
        citySelect.disabled = false;

        if (typeof LOCATION_DATA !== 'undefined') {
            const cities = Object.keys(LOCATION_DATA[selectedState]).sort();
            cities.forEach(city => {
                const option = document.createElement('option');
                option.value = city;
                option.textContent = city;
                citySelect.appendChild(option);
            });
        }
    });

    // Form Submission
    calcForm.addEventListener('submit', (e) => {
        e.preventDefault();

        // Form Inputs
        const staffCount = parseInt(document.getElementById('staff-count').value) || 0;
        const avgSalary = parseInt(document.getElementById('avg-salary').value) || 0;
        const marketingBudget = parseInt(document.getElementById('marketing-budget').value) || 0;
        const maintenanceCost = parseInt(document.getElementById('maintenance-cost').value) || 0;
        const patientsPerDay = parseInt(document.getElementById('patients-per-day').value) || 1;
        const category = categorySelect.value;
        const specialty = specialtySelect.value;
        const city = citySelect.value;

        // Hide previous results and warning, show loading
        resultsSection.style.display = 'none';
        document.getElementById('ridiculous-warning').style.display = 'none';

        const loadingOverlay = document.getElementById('loading-overlay');
        const progressBarFill = document.getElementById('progress-bar-fill');
        const loadingPromoText = document.getElementById('loading-promo-text');

        loadingOverlay.style.display = 'block';
        loadingOverlay.scrollIntoView({ behavior: 'smooth', block: 'center' });

        // Progressive Loading Logic - Ad for ReceptionMate
        const duration = 12000; // 12 seconds
        const updateInterval = 100; // 100ms
        let elapsed = 0;

        const messages = [
            "Calculating operational costs for clinics like yours...",
            "Did you know? You can reduce staff dependency with modern tools.",
            "Want to automate your clinic's reception? Meet <strong>ReceptionMate</strong>!",
            "ReceptionMate manages calls, appointments, and queries — instantly.",
            "Crunching the final numbers for your break-even consultation charge..."
        ];

        const timer = setInterval(() => {
            elapsed += updateInterval;
            const progress = Math.min((elapsed / duration) * 100, 100);
            progressBarFill.style.width = `${progress}%`;

            // Rotate messages evenly across the duration
            const messageIndex = Math.min(Math.floor((elapsed / duration) * messages.length), messages.length - 1);
            loadingPromoText.innerHTML = messages[messageIndex];

            if (elapsed >= duration) {
                clearInterval(timer);
                completeCalculation();
            }
        }, updateInterval);

        function completeCalculation() {
            // Calculations
            const monthlyStaffCost = staffCount * avgSalary;
            const totalMonthlyCost = monthlyStaffCost + marketingBudget + maintenanceCost;

            // Assuming 30 days a month operation avg for simpler math based on per day
            const expectedMonthlyPatients = patientsPerDay * 30;

            let perConsultationCost = 0;
            if (expectedMonthlyPatients > 0) {
                perConsultationCost = totalMonthlyCost / expectedMonthlyPatients;
            }

            loadingOverlay.style.display = 'none';

            // Display Results
            displayResults({
                staffCount,
                avgSalary,
                monthlyStaffCost,
                marketingBudget,
                maintenanceCost,
                totalMonthlyCost,
                patientsPerDay,
                expectedMonthlyPatients,
                perConsultationCost,
                city,
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
        const perConsultCostFormatted = formatCurrency(data.perConsultationCost);

        document.getElementById('consultation-charge').textContent = perConsultCostFormatted;
        document.getElementById('cost-staff').textContent = formatCurrency(data.monthlyStaffCost);
        document.getElementById('cost-marketing').textContent = formatCurrency(data.marketingBudget);
        document.getElementById('cost-maintenance').textContent = formatCurrency(data.maintenanceCost);
        document.getElementById('cost-total-monthly').textContent = formatCurrency(data.totalMonthlyCost);

        // Warning Logic
        const warningDiv = document.getElementById('ridiculous-warning');
        if (data.perConsultationCost > 3000) {
            document.getElementById('warning-cost').textContent = perConsultCostFormatted;
            warningDiv.style.display = 'block';
        }

        // Main Calculation Text
        const calcText = `Based on your estimated monthly operational costs to run a <strong>${data.specialty}</strong> clinic in <strong>${data.city}</strong>, your targeted consultation charge to achieve breakeven (covering costs exactly) with <strong>${data.expectedMonthlyPatients} patients/month</strong> is <strong>${perConsultCostFormatted}</strong>.`;
        document.getElementById('dynamic-calculation-text').innerHTML = calcText;

        resultsSection.style.display = 'block';
        resultsSection.scrollIntoView({ behavior: 'smooth' });
    }
});

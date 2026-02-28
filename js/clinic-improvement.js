document.addEventListener('DOMContentLoaded', () => {
    const auditForm = document.getElementById('audit-form');
    const overlay = document.getElementById('computation-overlay');
    const resultsSection = document.getElementById('results-section');
    const progressBar = document.getElementById('analysis-progress');
    const processingStatus = document.getElementById('processing-status');

    if (auditForm) {
        auditForm.addEventListener('submit', function (e) {
            e.preventDefault();

            // Hide form and scroll up
            auditForm.style.display = 'none';
            document.querySelector('.audit-header p').style.display = 'none';

            // Show computation overlay
            overlay.style.display = 'block';
            window.scrollTo({ top: overlay.offsetTop - 150, behavior: 'smooth' });

            // Simulate complex analysis
            const stages = [
                "Ingesting Patient Volume Metrics...",
                "Cross-referencing Acquisition Channels...",
                "Evaluating Wait-Time Logistics...",
                "Analyzing Digital Infrastructure...",
                "Identifying Operational Bottlenecks...",
                "Generating Tailored Prescriptive Actions..."
            ];

            let step = 0;
            const interval = setInterval(() => {
                const progressPercentage = (step / stages.length) * 100;
                progressBar.style.width = progressPercentage + '%';

                if (step < stages.length) {
                    processingStatus.innerHTML = stages[step];
                    processingStatus.style.opacity = 0;
                    setTimeout(() => { processingStatus.style.opacity = 1; }, 100);
                    step++;
                } else {
                    clearInterval(interval);
                    progressBar.style.width = '100%';
                    setTimeout(() => {
                        overlay.style.display = 'none';
                        showResults();
                    }, 500);
                }
            }, 800);
        });
    }

    function showResults() {
        const patientVolume = document.getElementById('patientVolume').value;
        const channel = document.getElementById('acquisitionChannel').value;
        const waitTimes = document.getElementById('waitTimes').value;
        const noShow = document.getElementById('noShowRate').value;
        const maturity = document.getElementById('digitalMaturity').value;
        const painPoint = document.getElementById('painPoint').value;
        const reviewCount = document.getElementById('reviewCount').value;
        const reviewScore = document.getElementById('reviewScore').value;

        // Base Logic Setup
        let opsScore = 50;
        let patScore = 50;
        let digScore = 50;

        let summaryHtml = '';
        let actionsHtml = '';

        // --- Calculate Scores & Build Insights ---

        // 1. Patient Volume
        if (patientVolume === 'low') {
            opsScore -= 10; patScore += 10;
            summaryHtml += `
                <div class="advice-item">
                    <h4>Volume Capability Unlocked</h4>
                    <p>Your current lower patient volume means you are likely delivering highly personalized care, hence your strong patient experience baseline. The goal now is to scale acquisition without compromising that care.</p>
                </div>
            `;
            actionsHtml += `
                <div class="advice-item">
                    <h4>Implement an Omnichannel Marketing Strategy</h4>
                    <p><strong>Action:</strong> Set up a MedCortico SEO-optimized clinic website coupled with an automated review engine. You must convert satisfied core patients into online advocates to drive volume ethically.</p>
                </div>
            `;
        } else if (patientVolume === 'high' || patientVolume === 'veryHigh') {
            opsScore += 15; patScore -= 15;
            summaryHtml += `
                <div class="advice-item">
                    <h4>High Thru-put Stress Detected</h4>
                    <p>Managing a very high patient load is excellent for revenue but inevitably strains your operational workflows and often degrades the individual patient experience. Bottlenecks will form around front-desk processing and charting.</p>
                </div>
            `;
            actionsHtml += `
                <div class="advice-item">
                    <h4>Deploy Medical Transcription Software</h4>
                    <p><strong>Action:</strong> To handle the extreme volume, you must reduce per-patient consultation turnaround by using MedScribe Transcription. Offload charting time to AI to give you more face-to-face time with patients.</p>
                </div>
            `;
        }

        // 2. Wait Times
        if (waitTimes === 'poor' || waitTimes === 'critical') {
            opsScore -= 20; patScore -= 25;
            summaryHtml += `
                <div class="advice-item">
                    <h4>Critical Wait-Time Inefficiency</h4>
                    <p>Wait times exceeding 30 minutes severely damage patient retention rates and lead to poor online reviews. This is a clear indicator of systemic scheduling and throughput inefficiencies.</p>
                </div>
            `;
            actionsHtml += `
                <div class="advice-item">
                    <h4>Introduce Automated Digital Queueing</h4>
                    <p><strong>Action:</strong> Upgrade to an advanced EMR scheduling layer. Force patients into a structured slot system and use automated SMS reminders. Stop relying entirely on manual front-desk queue wrangling.</p>
                </div>
            `;
        } else if (waitTimes === 'excellent') {
            opsScore += 20; patScore += 25;
            summaryHtml += `
                <div class="advice-item">
                    <h4>Exceptional Scheduling Logistics</h4>
                    <p>Maintaining under 15-minute wait times is industry-leading. This protects your reputation and maximizes the number of patients you can realistically see.</p>
                </div>
            `;
        }

        // 3. Digital Maturity
        if (maturity === 'paper' || maturity === 'hybrid') {
            digScore -= 30; opsScore -= 15;
            summaryHtml += `
                <div class="advice-item">
                    <h4>Technological Vulnerability</h4>
                    <p>Relying on paper-based or disjointed hybrid systems creates immense overhead. You are losing hours weekly to chart retrieval, physical filing, and prescription writing. This restricts your ability to gather analytics.</p>
                </div>
            `;
            actionsHtml += `
                <div class="advice-item">
                    <h4>Mandatory EMR Integration</h4>
                    <p><strong>Action:</strong> The most significant ROI for your practice will come from deploying a comprehensive EMR system like MedCortico's. Digitize historical records immediately to prevent future administrative collapse.</p>
                </div>
            `;
        } else {
            digScore += 30; opsScore += 10;
        }

        // 4. Reputation & Reviews
        if (reviewCount === 'none' || reviewCount === 'few') {
            patScore -= 10;
            actionsHtml += `
                <div class="advice-item">
                    <h4>Claim & Build Your Online Reputation</h4>
                    <p><strong>Action:</strong> Your online presence is virtually non-existent or just starting. New patients aggressively rely on Google Reviews. Begin a systematic habit of asking every satisfied patient for a review before they leave the clinic.</p>
                </div>
            `;
        } else if (reviewCount === 'many' && reviewScore === 'excellent') {
            patScore += 25;
            summaryHtml += `
                <div class="advice-item">
                    <h4>High-Authority Market Position</h4>
                    <p>Your robust and highly-rated Google Business Profile is a massive asset. You are likely winning most local organic searches. Use this reputation to introduce premium services or direct-booking integrations.</p>
                </div>
            `;
        }

        if (reviewScore === 'poor') {
            patScore -= 30;
            summaryHtml += `
                <div class="advice-item">
                    <h4>Critical Reputation Alert</h4>
                    <p>A rating below 4.0 strongly deters new patient acquisition. This is an emergency indicator that patient experience or front-desk communication is failing.</p>
                </div>
            `;
            actionsHtml += `
                <div class="advice-item">
                    <h4>Aggressive Reputation Repair</h4>
                    <p><strong>Action:</strong> Do not spend money on marketing until your rating improves. Audit your wait times, staff behavior, and clinic hygiene immediately. Set up automated post-visit feedback loops to catch unhappy patients before they post publicly.</p>
                </div>
            `;
        }

        // 5. Pain Point Specialization
        if (painPoint === 'time') {
            actionsHtml += `
                <div class="advice-item">
                    <h4>Reclaim Clinical Hours</h4>
                    <p><strong>Action:</strong> If charting is eating your time, integrate Voice-to-Text transcription. Speak your notes in 30 seconds rather than typing for 3 minutes per patient. Over 40 patients, that saves you 2 hours daily.</p>
                </div>
            `;
        } else if (painPoint === 'billing') {
            opsScore -= 15;
            actionsHtml += `
                <div class="advice-item">
                    <h4>Plug Revenue Leaks</h4>
                    <p><strong>Action:</strong> Move away from manual ledger keeping. Utilize ReceptionMate to track pending payments, run automated daily reconciliation, and reduce accounting errors.</p>
                </div>
            `;
        } else if (painPoint === 'marketing') {
            actionsHtml += `
                <div class="advice-item">
                    <h4>Overhaul Digital Acquisition</h4>
                    <p><strong>Action:</strong> A clinic without a custom website is invisible to the modern patient. You need a fast, authoritative Website Build focused on local SEO and integrated appointment booking.</p>
                </div>
            `;
        }

        // Ensure scores stay within bounds
        opsScore = Math.max(10, Math.min(95, opsScore));
        patScore = Math.max(10, Math.min(95, patScore));
        digScore = Math.max(10, Math.min(95, digScore));

        // Render Results
        resultsSection.style.display = 'block';

        animateValue("score-ops", 0, opsScore, 1000);
        animateValue("score-pat", 0, patScore, 1000);
        animateValue("score-dig", 0, digScore, 1000);

        document.getElementById('dynamic-summary').innerHTML = summaryHtml || `
            <div class="advice-item">
                <h4>Balanced Operational State</h4>
                <p>Your practice operates inside standard parameters. The primary objective is optimization and moving from a functional state to a highly optimized, digitally automated state.</p>
            </div>`;
        document.getElementById('dynamic-actions').innerHTML = actionsHtml;

        window.scrollTo({ top: resultsSection.offsetTop - 50, behavior: 'smooth' });
    }

    function animateValue(id, start, end, duration) {
        let obj = document.getElementById(id);
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            obj.innerHTML = Math.floor(progress * (end - start) + start) + '/100';
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }

    // PDF Download Functionality
    const downloadBtn = document.getElementById('download-pdf-btn');
    const downloadContainer = document.getElementById('download-btn-container');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function () {
            const element = document.getElementById('printable-report');
            const opt = {
                margin: [15, 10, 15, 10], // top, left, bottom, right
                filename: 'MedCortico-Clinic-Diagnostic-Report.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true, letterRendering: true },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' }
            };

            // Change button text temporarily and hide it from the PDF
            const originalText = downloadBtn.innerHTML;
            downloadBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Generating PDF...';
            downloadBtn.style.pointerEvents = 'none';
            if (downloadContainer) {
                downloadContainer.setAttribute('data-html2canvas-ignore', 'true');
            }

            html2pdf().set(opt).from(element).save().then(() => {
                // Restore button
                downloadBtn.innerHTML = originalText;
                downloadBtn.style.pointerEvents = 'auto';
            }).catch(err => {
                console.error("PDF generation failed", err);
                downloadBtn.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Error generating form';
                setTimeout(() => {
                    downloadBtn.innerHTML = originalText;
                    downloadBtn.style.pointerEvents = 'auto';
                }, 3000);
            });
        });
    }
});

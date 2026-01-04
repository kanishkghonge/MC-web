// WhatsApp Widget JavaScript
(function() {
    'use strict';
    
    const PHONE_NUMBER = '918527183292';
    const PRESET_MESSAGE = 'Hello i would like to learn more about your solutions';
    
    // Detect if we're in a subfolder
    function getLogoPath() {
        const path = window.location.pathname;
        if (path.includes('/pages/')) {
            return '../Photos/weblogo.png';
        }
        return 'Photos/weblogo.png';
    }
    
    // Create widget HTML
    function createWidget() {
        const widgetHTML = `
            <div class="whatsapp-widget">
                <button class="whatsapp-button" id="whatsapp-toggle" aria-label="Open WhatsApp Chat">
                    <i class="fab fa-whatsapp"></i>
                </button>
                
                <div class="whatsapp-chat-box" id="whatsapp-chat">
                    <div class="whatsapp-header">
                        <div class="whatsapp-header-content">
                            <div class="whatsapp-avatar">
                                <img src="${getLogoPath()}" alt="MedCortico">
                            </div>
                            <div class="whatsapp-info">
                                <h4>MedCortico</h4>
                                <p>Typically replies instantly</p>
                            </div>
                        </div>
                        <button class="whatsapp-close" id="whatsapp-close" aria-label="Close Chat">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="whatsapp-body" id="whatsapp-messages">
                        <div class="whatsapp-message received">
                            <div class="message-bubble">
                                <p class="message-text">Hello! How can I help you?</p>
                                <div class="message-time">${getCurrentTime()}</div>
                            </div>
                        </div>
                        <div class="whatsapp-message sent">
                            <div class="message-bubble">
                                <p class="message-text">${PRESET_MESSAGE}</p>
                                <div class="message-time">${getCurrentTime()}</div>
                            </div>
                        </div>
                    </div>
                    
                    <div class="whatsapp-footer">
                        <button class="whatsapp-send-button" id="whatsapp-send">
                            <span>Send Message</span>
                            <i class="fab fa-whatsapp"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', widgetHTML);
    }
    
    // Get current time in HH:MM format
    function getCurrentTime() {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        return `${hours}:${minutes}`;
    }
    
    // Open WhatsApp with preset message
    function openWhatsApp() {
        const encodedMessage = encodeURIComponent(PRESET_MESSAGE);
        const whatsappURL = `https://wa.me/${PHONE_NUMBER}?text=${encodedMessage}`;
        window.open(whatsappURL, '_blank');
    }
    
    // Initialize widget
    function init() {
        createWidget();
        
        const toggleButton = document.getElementById('whatsapp-toggle');
        const chatBox = document.getElementById('whatsapp-chat');
        const closeButton = document.getElementById('whatsapp-close');
        const sendButton = document.getElementById('whatsapp-send');
        
        // Toggle chat box
        toggleButton.addEventListener('click', function() {
            chatBox.classList.toggle('active');
        });
        
        // Close chat box
        closeButton.addEventListener('click', function() {
            chatBox.classList.remove('active');
        });
        
        // Send message (open WhatsApp)
        sendButton.addEventListener('click', function() {
            openWhatsApp();
        });
        
        // Close chat when clicking outside
        document.addEventListener('click', function(event) {
            if (!event.target.closest('.whatsapp-widget')) {
                chatBox.classList.remove('active');
            }
        });
    }
    
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();

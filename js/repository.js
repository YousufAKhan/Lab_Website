// Repository Page JavaScript

// Simple authentication system (for demo purposes)
// In production, this should be replaced with proper server-side authentication

const VALID_CREDENTIALS = {
    'yak': 'lab2024',
    'student1': 'password123',
    'student2': 'password456'
};

// Check if user is already logged in
function checkLoginStatus() {
    const isLoggedIn = localStorage.getItem('yakLabLoggedIn');
    if (isLoggedIn === 'true') {
        showRepositoryContent();
    }
}

// Login form handler
document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (authenticateUser(username, password)) {
        localStorage.setItem('yakLabLoggedIn', 'true');
        localStorage.setItem('yakLabUser', username);
        showRepositoryContent();
        showSuccessMessage('Login successful! Welcome to the lab repository.');
    } else {
        showErrorMessage('Invalid credentials. Please try again.');
    }
});

// Authentication function
function authenticateUser(username, password) {
    return VALID_CREDENTIALS[username] === password;
}

// Show repository content
function showRepositoryContent() {
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('repository-content').style.display = 'block';
    
    // Update welcome message with username
    const username = localStorage.getItem('yakLabUser');
    const welcomeMessage = document.querySelector('.repository-header p');
    if (username && welcomeMessage) {
        welcomeMessage.textContent = `Welcome to the YAK Lab internal repository, ${username}. Here you'll find protocols, data, and resources for our research.`;
    }
}

// Logout functionality
document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('yakLabLoggedIn');
    localStorage.removeItem('yakLabUser');
    document.getElementById('login-section').style.display = 'flex';
    document.getElementById('repository-content').style.display = 'none';
    document.getElementById('login-form').reset();
    showSuccessMessage('You have been logged out successfully.');
});

// Success message function
function showSuccessMessage(message) {
    showMessage(message, 'success');
}

// Error message function
function showErrorMessage(message) {
    showMessage(message, 'error');
}

// Generic message display function
function showMessage(message, type) {
    // Remove existing messages
    const existingMessage = document.querySelector('.message-popup');
    if (existingMessage) {
        existingMessage.remove();
    }
    
    // Create message element
    const messageElement = document.createElement('div');
    messageElement.className = `message-popup ${type}`;
    messageElement.textContent = message;
    messageElement.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 1rem 1.5rem;
        border-radius: 6px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        animation: slideIn 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        messageElement.style.background = '#27ae60';
    } else {
        messageElement.style.background = '#e74c3c';
    }
    
    // Add to page
    document.body.appendChild(messageElement);
    
    // Remove after 3 seconds
    setTimeout(() => {
        messageElement.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (messageElement.parentNode) {
                messageElement.remove();
            }
        }, 300);
    }, 3000);
}

// Add CSS animations for messages
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOut {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Smooth scrolling for quick access links
document.querySelectorAll('.quick-card').forEach(card => {
    card.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Protocol download simulation
document.querySelectorAll('.protocol-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const protocolName = this.closest('.protocol-card').querySelector('h3').textContent;
        showSuccessMessage(`Downloading ${protocolName}...`);
        
        // Simulate download delay
        setTimeout(() => {
            showSuccessMessage(`${protocolName} downloaded successfully!`);
        }, 2000);
    });
});

// Data download simulation
document.querySelectorAll('.data-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const dataName = this.closest('.data-card').querySelector('h3').textContent;
        showSuccessMessage(`Preparing ${dataName} for download...`);
        
        // Simulate download delay
        setTimeout(() => {
            showSuccessMessage(`${dataName} download started!`);
        }, 1500);
    });
});

// Software repository links
document.querySelectorAll('.software-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const softwareName = this.closest('.software-card').querySelector('h3').textContent;
        showSuccessMessage(`Opening ${softwareName} repository...`);
        
        // In a real implementation, this would open the actual repository
        setTimeout(() => {
            showErrorMessage('Repository link not configured yet. Contact the lab PI.');
        }, 1000);
    });
});

// Resource link handling
document.querySelectorAll('.resource-card a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const resourceName = this.textContent;
        showSuccessMessage(`Accessing ${resourceName}...`);
        
        // In a real implementation, this would open the actual resource
        setTimeout(() => {
            showErrorMessage('Resource not available yet. Contact the lab PI.');
        }, 1000);
    });
});

// Search functionality for repository content
function addSearchFunctionality() {
    const searchInput = document.createElement('input');
    searchInput.type = 'text';
    searchInput.placeholder = 'Search protocols, data, or resources...';
    searchInput.className = 'repository-search';
    searchInput.style.cssText = `
        width: 100%;
        max-width: 400px;
        padding: 12px;
        border: 2px solid #e1e8ed;
        border-radius: 6px;
        font-size: 1rem;
        margin-bottom: 2rem;
        display: block;
        margin-left: auto;
        margin-right: auto;
    `;
    
    // Insert search input after repository header
    const repositoryHeader = document.querySelector('.repository-header');
    if (repositoryHeader) {
        repositoryHeader.appendChild(searchInput);
    }
    
    // Search functionality
    searchInput.addEventListener('input', function() {
        const searchTerm = this.value.toLowerCase();
        const cards = document.querySelectorAll('.protocol-card, .data-card, .software-card, .resource-card');
        
        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            if (text.includes(searchTerm)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
}

// Initialize repository functionality
document.addEventListener('DOMContentLoaded', function() {
    checkLoginStatus();
    
    // Add search functionality if user is logged in
    if (localStorage.getItem('yakLabLoggedIn') === 'true') {
        setTimeout(addSearchFunctionality, 100);
    }
});

// Auto-logout after 8 hours of inactivity
function setupAutoLogout() {
    const logoutTime = 8 * 60 * 60 * 1000; // 8 hours in milliseconds
    
    function resetTimer() {
        localStorage.setItem('yakLabLastActivity', Date.now().toString());
    }
    
    function checkActivity() {
        const lastActivity = localStorage.getItem('yakLabLastActivity');
        if (lastActivity) {
            const timeSinceLastActivity = Date.now() - parseInt(lastActivity);
            if (timeSinceLastActivity > logoutTime) {
                // Auto logout
                localStorage.removeItem('yakLabLoggedIn');
                localStorage.removeItem('yakLabUser');
                localStorage.removeItem('yakLabLastActivity');
                location.reload();
            }
        }
    }
    
    // Reset timer on user activity
    ['click', 'keypress', 'scroll', 'mousemove'].forEach(event => {
        document.addEventListener(event, resetTimer);
    });
    
    // Check activity every minute
    setInterval(checkActivity, 60000);
    
    // Initial timer setup
    resetTimer();
}

// Setup auto-logout when page loads
setupAutoLogout();

// MkDocs Integration Functions
function showMkDocsSetup() {
    // Open the wiki in a new tab
    window.open('yak-lab-docs/site/index.html', '_blank');
}

// Function to update MkDocs links (call this after setting up your docs)
function updateMkDocsLinks(mkdocsUrl) {
    const fullLink = document.getElementById('mkdocs-full-link');
    const editLink = document.getElementById('mkdocs-edit-link');
    
    if (fullLink) fullLink.href = mkdocsUrl;
    if (editLink) editLink.href = `${mkdocsUrl}/edit/main/docs/`;
}

// Function to replace placeholder with actual MkDocs iframe
function embedMkDocs(mkdocsUrl) {
    const container = document.querySelector('.mkdocs-container');
    if (container) {
        container.innerHTML = `
            <iframe src="${mkdocsUrl}" 
                    class="mkdocs-iframe"
                    title="YAK Lab Documentation">
            </iframe>
        `;
    }
    
    // Update the links
    updateMkDocsLinks(mkdocsUrl);
}

// Example usage (uncomment and update with your docs URL):
// updateMkDocsLinks('https://yourusername.github.io/yak-lab-docs/');
// embedMkDocs('https://yourusername.github.io/yak-lab-docs/'); 
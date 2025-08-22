// Google Sheets CMS Integration for YAK Lab Repository

// Configuration - Replace these URLs with your actual Google Sheets JSON URLs
const SHEETS_CONFIG = {
    protocols: 'YOUR_PROTOCOLS_SHEET_JSON_URL',
    data: 'YOUR_DATA_SHEET_JSON_URL',
    software: 'YOUR_SOFTWARE_SHEET_JSON_URL',
    resources: 'YOUR_RESOURCES_SHEET_JSON_URL'
};

// Cache for storing fetched data
let dataCache = {
    protocols: null,
    data: null,
    software: null,
    resources: null
};

// Cache expiration time (5 minutes)
const CACHE_DURATION = 5 * 60 * 1000;

// Initialize CMS integration
async function initializeCMS() {
    if (localStorage.getItem('yakLabLoggedIn') === 'true') {
        await loadAllContent();
        setupAutoRefresh();
    }
}

// Load all content from Google Sheets
async function loadAllContent() {
    try {
        await Promise.all([
            loadProtocols(),
            loadDataRepository(),
            loadSoftware(),
            loadResources()
        ]);
    } catch (error) {
        console.error('Error loading content:', error);
        showErrorMessage('Failed to load repository content. Please try again.');
    }
}

// Load protocols from Google Sheets
async function loadProtocols() {
    if (!SHEETS_CONFIG.protocols || SHEETS_CONFIG.protocols === 'YOUR_PROTOCOLS_SHEET_JSON_URL') {
        console.log('Protocols sheet URL not configured. Using default content.');
        return;
    }

    try {
        const data = await fetchSheetData(SHEETS_CONFIG.protocols, 'protocols');
        updateProtocolsDisplay(data);
    } catch (error) {
        console.error('Error loading protocols:', error);
    }
}

// Load data repository from Google Sheets
async function loadDataRepository() {
    if (!SHEETS_CONFIG.data || SHEETS_CONFIG.data === 'YOUR_DATA_SHEET_JSON_URL') {
        console.log('Data sheet URL not configured. Using default content.');
        return;
    }

    try {
        const data = await fetchSheetData(SHEETS_CONFIG.data, 'data');
        updateDataDisplay(data);
    } catch (error) {
        console.error('Error loading data repository:', error);
    }
}

// Load software from Google Sheets
async function loadSoftware() {
    if (!SHEETS_CONFIG.software || SHEETS_CONFIG.software === 'YOUR_SOFTWARE_SHEET_JSON_URL') {
        console.log('Software sheet URL not configured. Using default content.');
        return;
    }

    try {
        const data = await fetchSheetData(SHEETS_CONFIG.software, 'software');
        updateSoftwareDisplay(data);
    } catch (error) {
        console.error('Error loading software:', error);
    }
}

// Load resources from Google Sheets
async function loadResources() {
    if (!SHEETS_CONFIG.resources || SHEETS_CONFIG.resources === 'YOUR_RESOURCES_SHEET_JSON_URL') {
        console.log('Resources sheet URL not configured. Using default content.');
        return;
    }

    try {
        const data = await fetchSheetData(SHEETS_CONFIG.resources, 'resources');
        updateResourcesDisplay(data);
    } catch (error) {
        console.error('Error loading resources:', error);
    }
}

// Fetch data from Google Sheets with caching
async function fetchSheetData(url, type) {
    // Check cache first
    const cached = dataCache[type];
    if (cached && (Date.now() - cached.timestamp) < CACHE_DURATION) {
        return cached.data;
    }

    // Fetch from Google Sheets
    const response = await fetch(url);
    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const jsonData = await response.json();
    const processedData = processSheetData(jsonData);
    
    // Update cache
    dataCache[type] = {
        data: processedData,
        timestamp: Date.now()
    };
    
    return processedData;
}

// Process Google Sheets JSON data
function processSheetData(jsonData) {
    if (!jsonData.feed || !jsonData.feed.entry) {
        return [];
    }

    const entries = jsonData.feed.entry;
    const headers = [];
    const data = [];

    // Extract headers from first row
    entries.forEach((entry, index) => {
        const cell = entry['gs$cell'];
        if (index < 10) { // Assume max 10 columns
            const col = cell.col;
            const value = cell.$t;
            
            if (cell.row === '1') {
                headers[parseInt(col) - 1] = value;
            }
        }
    });

    // Extract data rows
    entries.forEach(entry => {
        const cell = entry['gs$cell'];
        const row = parseInt(cell.row);
        const col = parseInt(cell.col);
        const value = cell.$t;
        
        if (row > 1) { // Skip header row
            if (!data[row - 2]) {
                data[row - 2] = {};
            }
            if (headers[col - 1]) {
                data[row - 2][headers[col - 1]] = value;
            }
        }
    });

    return data.filter(row => Object.keys(row).length > 0);
}

// Update protocols display
function updateProtocolsDisplay(protocols) {
    const container = document.querySelector('.protocol-grid');
    if (!container || !protocols.length) return;

    container.innerHTML = '';
    
    protocols.forEach(protocol => {
        const card = createProtocolCard(protocol);
        container.appendChild(card);
    });
}

// Create protocol card element
function createProtocolCard(protocol) {
    const card = document.createElement('div');
    card.className = 'protocol-card';
    
    card.innerHTML = `
        <div class="protocol-header">
            <h3>${protocol.Title || 'Untitled Protocol'}</h3>
            <span class="protocol-version">${protocol.Version || 'v1.0'}</span>
        </div>
        <p>${protocol.Description || 'No description available.'}</p>
        <div class="protocol-meta">
            <span><i class="fas fa-calendar"></i> Updated: ${protocol['Last Updated'] || 'Unknown'}</span>
            <span><i class="fas fa-user"></i> Author: ${protocol.Author || 'Unknown'}</span>
        </div>
        <a href="${protocol['File Link'] || '#'}" class="protocol-link" target="_blank">
            ${protocol['File Link'] ? 'View Protocol →' : 'Link not available'}
        </a>
    `;
    
    return card;
}

// Update data repository display
function updateDataDisplay(dataItems) {
    const container = document.querySelector('.data-grid');
    if (!container || !dataItems.length) return;

    container.innerHTML = '';
    
    dataItems.forEach(data => {
        const card = createDataCard(data);
        container.appendChild(card);
    });
}

// Create data card element
function createDataCard(data) {
    const card = document.createElement('div');
    card.className = 'data-card';
    
    card.innerHTML = `
        <div class="data-header">
            <h3>${data.Title || 'Untitled Dataset'}</h3>
            <span class="data-size">${data.Size || 'Unknown'}</span>
        </div>
        <p>${data.Description || 'No description available.'}</p>
        <div class="data-meta">
            <span><i class="fas fa-calendar"></i> Last updated: ${data['Last Updated'] || 'Unknown'}</span>
            <span><i class="fas fa-download"></i> Downloads: ${data.Downloads || '0'}</span>
        </div>
        <a href="${data['Download Link'] || '#'}" class="data-link" target="_blank">
            ${data['Download Link'] ? 'Download Dataset →' : 'Link not available'}
        </a>
    `;
    
    return card;
}

// Update software display
function updateSoftwareDisplay(softwareItems) {
    const container = document.querySelector('.software-grid');
    if (!container || !softwareItems.length) return;

    container.innerHTML = '';
    
    softwareItems.forEach(software => {
        const card = createSoftwareCard(software);
        container.appendChild(card);
    });
}

// Create software card element
function createSoftwareCard(software) {
    const card = document.createElement('div');
    card.className = 'software-card';
    
    card.innerHTML = `
        <div class="software-header">
            <h3>${software.Title || 'Untitled Software'}</h3>
            <span class="software-version">${software.Version || 'v1.0'}</span>
        </div>
        <p>${software.Description || 'No description available.'}</p>
        <div class="software-meta">
            <span><i class="fab fa-python"></i> ${software.Language || 'Not specified'}</span>
            <span><i class="fab fa-github"></i> ${software.Platform || 'GitHub'}</span>
        </div>
        <a href="${software['Repository Link'] || '#'}" class="software-link" target="_blank">
            ${software['Repository Link'] ? 'View Repository →' : 'Link not available'}
        </a>
    `;
    
    return card;
}

// Update resources display
function updateResourcesDisplay(resources) {
    const container = document.querySelector('.resources-grid');
    if (!container || !resources.length) return;

    container.innerHTML = '';
    
    resources.forEach(resource => {
        const card = createResourceCard(resource);
        container.appendChild(card);
    });
}

// Create resource card element
function createResourceCard(resource) {
    const card = document.createElement('div');
    card.className = 'resource-card';
    
    const links = resource.Links ? resource.Links.split(',').map(link => link.trim()) : [];
    
    card.innerHTML = `
        <h3>${resource.Category || 'Resources'}</h3>
        <ul>
            ${links.map(link => `<li><a href="${link}" target="_blank">${link}</a></li>`).join('')}
        </ul>
    `;
    
    return card;
}

// Setup auto-refresh every 5 minutes
function setupAutoRefresh() {
    setInterval(async () => {
        if (localStorage.getItem('yakLabLoggedIn') === 'true') {
            await loadAllContent();
        }
    }, CACHE_DURATION);
}

// Manual refresh function
async function refreshContent() {
    // Clear cache
    dataCache = {
        protocols: null,
        data: null,
        software: null,
        resources: null
    };
    
    await loadAllContent();
    showSuccessMessage('Repository content refreshed successfully!');
}

// Add refresh button to repository header
function addRefreshButton() {
    const header = document.querySelector('.repository-header');
    if (header) {
        const refreshBtn = document.createElement('button');
        refreshBtn.className = 'btn btn-secondary';
        refreshBtn.innerHTML = '<i class="fas fa-sync-alt"></i> Refresh';
        refreshBtn.style.marginLeft = '1rem';
        refreshBtn.onclick = refreshContent;
        
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.parentNode.insertBefore(refreshBtn, logoutBtn);
        }
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize CMS when user logs in
    const originalShowRepositoryContent = window.showRepositoryContent;
    window.showRepositoryContent = function() {
        originalShowRepositoryContent();
        initializeCMS();
        addRefreshButton();
    };
    
    // Initialize if already logged in
    if (localStorage.getItem('yakLabLoggedIn') === 'true') {
        setTimeout(() => {
            initializeCMS();
            addRefreshButton();
        }, 100);
    }
});

// Export functions for manual use
window.refreshRepositoryContent = refreshContent;
window.loadRepositoryContent = loadAllContent; 
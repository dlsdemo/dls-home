// Route configurations
const routes = {
    workers: {
        earth: { route: '/getcolo-workers', id: 'box-1-code' },
        usa: { route: 'https://usworkers.dlsdemo.com/', id: 'box-2-code' },
        eu: { route: 'https://euworkers.dlsdemo.com/', id: 'box-3-code' }
    },
    pages: {
        earth: { route: '/getcolo-pages', id: 'box-4-code' },
        usa: { route: 'https://us.dlsdemo.com/getcolo-pages', id: 'box-5-code' },
        eu: { route: 'https://eu.dlsdemo.com/getcolo-pages', id: 'box-6-code' }
    }
};

/**
 * Safely creates and returns a formatted code block element
 * @param {string} content - The text content to display
 * @returns {HTMLElement} The formatted code block element
 */
function createSafeCodeBlock(content) {
    const pre = document.createElement('pre');
    const span = document.createElement('span');
    span.setAttribute('codeblock', '');
    span.textContent = content;
    pre.appendChild(span);
    return pre;
}

/**
 * Fetches data from a route and updates the corresponding element
 * @param {string} route - The API route to fetch from
 * @param {string} elementId - The ID of the element to update
 */
async function fetchAndDisplayData(route, elementId) {
    try {
        const response = await fetch(route);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.text();
        const codeSection = document.getElementById(elementId);
        if (codeSection) {
            // Clear any existing content
            codeSection.innerHTML = '';
            // Add new content safely
            codeSection.appendChild(createSafeCodeBlock(data));
        }
    } catch (error) {
        console.error(`Error fetching data for ${elementId}:`, error);
    }
}

// Initialize all data fetching
async function initializeDataFetching() {
    const fetchPromises = [];

    // Fetch Workers data
    Object.values(routes.workers).forEach(({ route, id }) => {
        fetchPromises.push(fetchAndDisplayData(route, id));
    });

    // Fetch Pages data
    Object.values(routes.pages).forEach(({ route, id }) => {
        fetchPromises.push(fetchAndDisplayData(route, id));
    });

    // Wait for all fetches to complete
    await Promise.all(fetchPromises).catch(error => {
        console.error('Error initializing data:', error);
    });
}

// Start fetching data when the script loads
initializeDataFetching();
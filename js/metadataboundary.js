// Function to fetch GraphQL JSON data
async function fetchData() {
    try {
        const response = await fetch(
            "https://dlsdemo.com/getcmb-http"
        );
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        console.log('Received data structure:', data); // Debug log
        
        if (!data || !data.data || !data.data.viewer) {
            throw new Error('Invalid response structure');
        }
        
        return data.data.viewer.zones[0].httpRequestsAdaptiveGroups || [];
    } catch (error) {
        console.error("Error fetching data:", error);
        return [];
    }
}
// Function to extract data for the chart
async function createChart() {
    const data = await fetchData();
    const labels = data.map((item) => item.dimensions.datetimeHour);
    const edgeResponseBytes = data.map((item) => item.sum.edgeResponseBytes);
    const visits = data.map((item) => item.sum.visits);
    // Create a chart using Chart.js
    const ctx = document.getElementById("httpChart").getContext("2d");
    const httpChart = new Chart(ctx, {
        type: "bar",
        data: {
            labels: labels,
            datasets: [{
                    label: "Edge Response Bytes",
                    data: edgeResponseBytes,
                    backgroundColor: "rgba(75, 192, 192, 0.2)",
                    borderColor: "rgba(75, 192, 192, 1)",
                    borderWidth: 1,
                },
                {
                    label: "Visits",
                    data: visits,
                    backgroundColor: "rgba(255, 99, 132, 0.2)",
                    borderColor: "rgba(255, 99, 132, 1)",
                    borderWidth: 1,
                },
            ],
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true,
                },
            },
        },
    });
}
// Render the chart
createChart();
// Workers GraphQL dataset
// Function to fetch GraphQL JSON data
async function fetchGraphQLData() {
    try {
        const response = await fetch('https://dlsdemo.com/getcmb-workers');
        const graphqlData = await response.json();
        const graphqlOutputDiv = document.getElementById('workersChart');
        // Convert the JSON data to a pretty-printed string
        const formattedJSON = JSON.stringify(graphqlData, null, 2);
        // Insert the formatted JSON into the div
        graphqlOutputDiv.textContent = formattedJSON;
    } catch (error) {
        console.error('Error fetching GraphQL data:', error);
    }
}
fetchGraphQLData();
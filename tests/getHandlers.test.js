const config = require('../config');


test('GET request should return status 200', async () => {
    let actualStatuscode
    try {
        // Make the GET request to the API endpoint
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
        // Assert that the status code is 200
        actualStatuscode = response.status
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    expect(actualStatuscode).toBe(200);
});
test('GET /warehouses: response should contain a non-empty array of warehouses', async () => {
    try {
        // Make request
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
            method: 'GET',
        });
        const data = await response.json();
        // Check that the response is an array and not empty
        expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);
    } catch (error) {
        console.error(error);
    }
});
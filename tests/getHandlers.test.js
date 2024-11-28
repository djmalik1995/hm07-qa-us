const config = require('../config');


test('should return status 200', async () => {
    let actualStatuscode
    try {
        
        const response = await fetch(`${config.API_URL}/api/v1/warehouses`);
    actualStatuscode = response.status
    } catch (error) {
        console.error('Error fetching data:', error);
    }
    expect(actualStatuscode).toBe(200);
});
test('should contain a non-empty array of warehouses', async () => {
    try {
       const response = await fetch(`${config.API_URL}/api/v1/warehouses`, {
            method: 'GET',
        });
        const data = await response.json();
         expect(Array.isArray(data)).toBe(true);
        expect(data.length).toBeGreaterThan(0);
    } catch (error) {
        console.error(error);
    }
});
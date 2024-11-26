const fetch = require('node-fetch');
const config = require('../config');

test('DELETE request response body should be { "ok": true }', async () => {
    try {
        // Make request
        const response = await fetch(`${config.API_URL}/api/v1/kits/1`, {
            method: 'DELETE'
        });

        // Extract response body
        const responseBody = await response.json();

        // Check response body
        expect(responseBody).toEqual({ ok: true });
    } catch (error) {
        console.error('Error:', error);
    }
}); 

	
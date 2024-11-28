
const config = require('../config');

const requestBody = 
    {
		"name": "string",
		"cardId": 1
	  }


test('should return 201 created', async () => {
	let actualStatus
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualStatus= response.status;
	} catch (error) {
		console.error(error);
	}
	expect (actualStatus).toBe (201);
});
test('should return name = string', async () => {
	let actualBody
    try {
		const response = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		actualBody = await response.json();
	} catch (error) {
		console.error(error);
	}
	expect (actualBody.name).toBe ("string");
});

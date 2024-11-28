
const config = require('../config');
const requestBody = 
    {
		"name": "string",
		"cardId": 1
	  }

test('Status code should be 200', async () => {
    let actualStatus
    try {
        const responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBody)
		});
		const postBody = await responsePost.json();
        const kitID = postBody.id;
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitID}`, { 
    method: 'DELETE'
    });
    actualStatus = response.status
    } catch (error) {
    console.error(error);
    }
    expect(actualStatus).toBe(200)
    });
    test('Should recieve "ok" to be true response', async () => {
    let delResponse
        try {
            const responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
                method: 'POST',
                headers: {
                'Content-Type': 'application/json'
                },
                body: JSON.stringify(requestBody)
            });
            const postBody = await responsePost.json();
            const kitID = postBody.id;
        const response = await fetch(`${config.API_URL}/api/v1/kits/${kitID}`, { 
    method: 'DELETE',
    });
    delResponse = await response.json();
    console.log("Response Body", delResponse)
    } catch (error) {
    console.error(error);
    }
    expect(delResponse["ok"]).toBe(true);
    
    });

	
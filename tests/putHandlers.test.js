const config = require('../config');

const requestBody = {
  productsList: [
    {
      id: 3,
      quantity: 1
    }
  ]
};
const requestBodyPost= 
    {
		"name": "string",
		"cardId": 1
	  }


test('should return status code 200 for request body', async () => {
  let actualStatus;
  try {
    const responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyPost)
		});
		const postBody = await responsePost.json();
        const kitID = postBody.id;
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitID}`, { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    actualStatus = response.status;
  } catch (error) {
    console.error(error);
  }
  expect(actualStatus).toBe(200);
});


test('should expect response body to be "ok": true', async () => {
  let actualResponse;
  try {
    const responsePost = await fetch(`${config.API_URL}/api/v1/kits`, {
			method: 'POST',
			headers: {
			'Content-Type': 'application/json'
			},
			body: JSON.stringify(requestBodyPost)
		});
		const postBody = await responsePost.json();
        const kitID = postBody.id;
    const response = await fetch(`${config.API_URL}/api/v1/kits/${kitID}`, { 
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(requestBody)
    });
    actualResponse = await response.json();
  } catch (error) {
    console.error(error);
  }
  expect(actualResponse).toHaveProperty("ok", true);
});

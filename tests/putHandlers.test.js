const config = require('../config');

const requestBody = {
  productsList: [
    {
      id: 3,
      quantity: 1
    }
  ]
};

// First Test: Check Response Status Code
test('status code 200 for request body', async () => {
  let actualStatus;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
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

// Second Test: Check Response Body
test('expect response body to be "ok": true', async () => {
  let actualResponse;
  try {
    const response = await fetch(`${config.API_URL}/api/v1/kits/3`, {
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

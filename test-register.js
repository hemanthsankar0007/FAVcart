const axios = require('axios');
const FormData = require('form-data');

async function testRegister() {
  const form = new FormData();
  const uniqueEmail = `testuser${Date.now()}@example.com`;
  
  form.append('name', 'Test User');
  form.append('email', uniqueEmail);
  form.append('password', 'password123');
  
  console.log(`\nAttempting to register with email: ${uniqueEmail}\n`);
  
  try {
    const response = await axios.post('http://localhost:8000/api/v1/register', form, {
      headers: form.getHeaders()
    });
    
    console.log('✅ Registration successful!');
    console.log('Response:', JSON.stringify(response.data, null, 2));
  } catch (error) {
    console.log('❌ Registration failed!');
    if (error.response) {
      console.log('Status:', error.response.status);
      console.log('Error:', JSON.stringify(error.response.data, null, 2));
    } else {
      console.log('Error:', error.message);
    }
  }
}

testRegister();

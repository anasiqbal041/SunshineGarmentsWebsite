import axios from 'axios';

// const authToken = 'your_auth_token'; 

// Create a new instance of Axios
const api = axios.create({
  baseURL: 'http://localhost:800', // Replace this with your actual API base URL
  timeout: 5000, // Set the request timeout if needed
  headers: {
    'Content-Type': 'application/json',
    // 'Authorization': `Bearer ${authToken}`,
  },
});

export default api;

import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Assuming your Express server is running on port 5000

export const fetchData = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/listings`);
    return response.data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return [];
  }
};

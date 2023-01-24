import axios from 'axios';

async function getCurrencyData() {
    try {
      const response = await axios.get('/get_currency');
      return response.data;
    } catch (error) {
      console.error(error);
    }
}
export {getCurrencyData}
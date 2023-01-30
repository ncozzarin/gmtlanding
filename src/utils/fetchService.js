export const fetchData = () => {
  return fetch('https://ischange.li/icloud/get_currency.php?cid=49&user=screen_user_49&password=puzzl3&output_type=json', {
    method: 'GET',
    mode: 'no-cors',
    headers: {
      'Content-Type': 'application/json',
      'cid': '49',
      'user': 'screen_user_49',
      'password': 'puzzl3',
      'output_type': 'json',
    }
  })
    .then(response => {
      console.log(response);
      if(!response.ok) {
        throw Error(response.statusText);
      }
      return response.json();
    })
    .catch(error => {
      throw error;
    });
};
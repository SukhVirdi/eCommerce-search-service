const baseAPI = '/api';

const searchService= {

sendToServer(data) {
    return new Promise((resolve, reject) => {
      fetch(`${baseAPI}/search`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
        .then(result => result.json())
        .then(json => resolve(json))
        .catch(err => {
          reject(err);
        });
    });
  }};

export default searchService;
fetch('http://localhost:5000/json')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data);  // Handle your data here
  })
  .catch(error => {
    console.error('There was a problem with your fetch operation:', error);
  });

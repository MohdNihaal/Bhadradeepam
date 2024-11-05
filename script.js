const authToken = "bq2sxTjyUyzIO7YWDmpxQm1T0DW3X87u";
const baseUrl = "https://blr1.blynk.cloud/external/api/update?token=";

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    button.classList.toggle('clicked');   
 // Toggle the 'clicked' class

    const virtualPin = button.dataset.pin;
    const url = `${baseUrl}${authToken}&${virtualPin}=1`;

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('Success:',   
 data);
      })
      .catch(error => {
        console.error('Error:', error);   

      });
  });
});
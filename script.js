const authToken = "bq2sxTjyUyzIO7YWDmpxQm1T0DW3X87u";
const baseUrl = "https://blr1.blynk.cloud/external/api/update?token=";

const buttons = document.querySelectorAll('button');

buttons.forEach(button => {
  let isPressed = false; // Track the button's toggle state

  button.addEventListener('click', () => {
    isPressed = !isPressed; // Toggle the state on each click
    const virtualPin = button.dataset.pin;
    const url = `${baseUrl}${authToken}&${virtualPin}=${isPressed ? 1 : 0}`; // Set URL based on state

    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.text();
      })
      .then(data => {
        console.log('Success:', data);
      })
      .catch(error => {
        console.error('Error:', error);
      });
  });
});
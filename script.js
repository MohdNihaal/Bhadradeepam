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
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/service-worker.js')
      .then(registration => {
        console.log('Service Worker registered:', registration);
      })
      .catch(error => {
        console.error('Service Worker registration failed:', error);
      });
  });

  window.addEventListener('beforeinstallprompt', (event) => {
    console.log('beforeinstallprompt event fired');
    window.deferredPrompt = event;
  });

  document.getElementById('install-button').addEventListener('click', () => {
    if (window.deferredPrompt) {
      console.log('User clicked the install button');
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then((choiceResult) => {
        if (choiceResult.outcome === 'accepted') {
          console.log('User accepted the A2HS prompt');
        } else {
          console.log('User dismissed the A2HS prompt');
        }
        deferredPrompt = null;
      });
    }
  });
}
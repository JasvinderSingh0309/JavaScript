let display = document.querySelector('.showJoke');

fetch('https://api.chucknorris.io/jokes/random')
.then( (response) => {
  return response.json();
})
.then( (data) => {
    let joke = data.value;
    display.innerText = joke;
})
.catch()
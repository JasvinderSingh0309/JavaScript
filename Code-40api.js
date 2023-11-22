fetch('https://api.chucknorris.io/jokes/random')
.then( (response1) => {
  return response1.json();
})
.then( (data) => {
  // console.log(data);
  let joke = data.value;
  console.log('Joke : ',joke);
})
.catch();
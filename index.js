'use strict'
function getValue() {
   let value =  $('input').val(); 
    console.log(value);
    return value;
}
function displayImg(imgData) {
    console.log(imgData);
    $('.results-img').append(
        `<img src="${imgData.message}" alt="a randome picture of a dog.">`
    )
    $('.results').show();
}

function getDogImage() {
    let value = getValue();
    for(let i = 0; i < value; i++) {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(response => response.json())
            .then(responseJson => displayImg(responseJson))
            .catch(error => alert(`${error} occured. Try again later.`));

    } 
}
  
  function watchForm() {
    $('form').submit(event => {
      event.preventDefault();
      getDogImage();
    });
  }
  
function dogAPI() {
    console.log('App loaded! Waiting for submit!');
    watchForm();
};

$(dogAPI);
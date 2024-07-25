const buttonCollection = document.getElementsByClassName("button");

Array.from(buttonCollection).forEach(element => {
  element.addEventListener('click', () => {
    console.log('CLICKED')
  })
});
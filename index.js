const button = document.getElementsByClassName("button");

Array.from(button).forEach(element => {
  element.addEventListener('click', () => {
    console.log('CLICKED')
  })
});
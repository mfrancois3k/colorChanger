


function randomColor(){
   let color = "#" + Math.random().toString(16).substr(2,6);
   let button = document.getElementById("button");
   const body = document.querySelector('body')
   body.style.backgroundColor = color;
   button.style.backgroundColor = color;
  document.getElementById("button"),innerHTML =color;
  
  console.log(color);
}






// //Choose a random color
// const button = document.querySelector('button')
// const body = document.querySelector('body')
// const colors = ['red', 'green', 'blue', 'yellow', 'pink', 'purple']

// body.style.backgroundColor = 'violet'
// button.addEventListener('click', changeBackground)

// function changeBackground(){
// const colorIndex= parseInt(Math.random()*colors.length)
// body.style.backgroundColor = colors[colorIndex]
// }
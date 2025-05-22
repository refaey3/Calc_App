let themeContainer = document.querySelector(".theme-cont");
let ball = document.querySelector(".ball");
let couterBall = 1;
let buttoms = document.querySelectorAll("button");
let output = document.querySelector(".output");
themeContainer.addEventListener("click", () => {
  if (couterBall == 1) {
    ball.style.left = `29px`;
    couterBall++;
  } else if (couterBall == 2) {
    ball.style.left = `59px`;
    couterBall++;
  } else if (couterBall == 3) {
    ball.style.left = `1px`;
    couterBall = 1;
  }
});


buttoms.forEach((buttom)=>
{
  buttom.addEventListener("click",function(e)
{

  output.innerHTML=e.target.textContent;

})
})
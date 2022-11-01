const Email = document.querySelector("input")
const form = document.querySelector(".myform")
const ErrorMsg = document.querySelector(".errorMsg")
const ErrorIcon = document.querySelector(".errorIcon")


form.addEventListener("submit", function(e){
  if (Email.value === "" || Email.value == null) {
    Email.style.border = "2px solid hsl(0, 93%, 68%)"
    ErrorIcon.style.display = "block";
    ErrorMsg.style.display= "block";
  }
  e.preventDefault()
})

var menu=document.getElementById("menu")
var sidenav=document.querySelector(".sidenav")
var close=document.getElementById("close")

menu.addEventListener("click",function(){
    sidenav.style.left="0"

})
close.addEventListener("click",function(){
    sidenav.style.left = "-50%"
})

const name = document.getElementById("name");
const email = document.getElementById("email");
const message = document.getElementById("message");
const submit = document.getElementById("submit");
const form=document.getElementById("form")

submit.addEventListener("click", function(e) {
    e.preventDefault(); // ✅ Form submit ஆகுறதை stop பண்ணும்

    if (name.value === "" || email.value === "" || message.value === "") {
        alert("Please fill all fields properly!");
    } else {
        alert("Form submitted successfully!!!!");
        form.reset();
    }
});
const h2 = document.createElement("h2");
h2.textContent = "HI, I AM ROLEX AND I AM A SOFTWARE DEVELOPER";
document.querySelector("body").appendChild(h2);

function handleClick() {
    alert("wait for image to load");
}

function theRedirect(element) {
    alert("wait to be redirected");
}

let name = window.prompt("Hello, what is your name?");
let task = window.prompt(`Hello,${name} what services do you seek`);
let number = window.prompt(`Hello ${name}, please input your contact and I will reach you shortly`);


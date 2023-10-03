const myHeading = document.querySelector("h1")
myHeading.textContent = "OwO"
// document.addEventListener("DOMContentLoaded", () => {});
let myVariable = "ciao"
myVariable = 69
myVariable = [69, "ciao", "UwU", 4]

console.log(myVariable[2]) //per stampare cose su una console di debug

function mutiply (num1, num2)
{
    let result =num1 * num2
    return result
}

console.log(mutiply(5,69))


const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/firefox.png") {
    myImage.setAttribute("src", "images/firefox2.png");
  } else {
    myImage.setAttribute("src", "images/firefox.png");
  }
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    localStorage.setItem("name", myName);
    myHeading.textContent = `UwU, ${myName}`;
  }
  

let myButton = document.querySelector("button");

// if (!localStorage.getItem("name")) {
//     setUserName();
//   } else {
//     const storedName = localStorage.getItem("name");
//     myHeading.textContent = `UwU ${storedName}`;
//   }
  
  myButton.onclick = () => {
    setUserName();
  };
  

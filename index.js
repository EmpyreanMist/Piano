const numberOfDrumButtons = document.querySelectorAll(".drum").length;
const crash = new Audio("./sounds/crash.mp3");
const kick = new Audio("./sounds/kick-bass.mp3");
const snare = new Audio("./sounds/snare.mp3");
const tom1 = new Audio("./sounds/tom-1.mp3");
const tom2 = new Audio("./sounds/tom-2.mp3");
const tom3 = new Audio("./sounds/tom-3.mp3");
const tom4 = new Audio("./sounds/tom-4.mp3");

for (let i = 0; i < numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    const buttonInnerHtml = this.innerHTML;

    switch (buttonInnerHtml) {
      case "w":
        tom1.play();
        break;
      case "a":
        tom2.play();
        break;
      case "s":
        tom3.play();
        break;
      case "d":
        tom4.play();
        break;
      case "j":
        snare.play();
        break;
      case "k":
        crash.play();
        break;
      case "l":
        kick.play();
        break;
      default:
        console.log(buttonInnerHtml);
    }
  });
}

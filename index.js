document.addEventListener("keydown", function(event) {

  var pressedKey = event.key;
  console.log(pressedKey);

  switch (pressedKey) {
    case "w":
      var crash = new Audio("files/audio/crash.mp3");
      crash.play();
      break;

    case "a":
      var kickBass = new Audio("files/audio/kick-bass.mp3");
      kickBass.play();
      break;

    case "s":
      var snare = new Audio("files/audio/snare.mp3");
      snare.play();
      break;

    case "d":
      var tom1 = new Audio("files/audio/tom-1.mp3");
      tom1.play();
      break;

    case "j":
      var tom2 = new Audio("files/audio/tom-2.mp3");
      tom2.play();
      break;

    case "k":
      var tom3 = new Audio("files/audio/tom-3.mp3");
      tom3.play();
      break;

    case "l":
      var tom4 = new Audio("files/audio/tom-4.mp3");
      tom4.play();
      break;

    default:
      console.log(pressedKey);

  }

});



for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {

  document.getElementsByClassName("drum")[i].addEventListener("mousedown", clickMouseDown);

  function clickMouseDown() {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
        var crash = new Audio("files/audio/crash.mp3");
        crash.play();
        this.style.borderColor = "turquoise";
        break;

      case "a":
        var kickBass = new Audio("files/audio/kick-bass.mp3");
        kickBass.play();
        this.style.borderColor = "turquoise";
        break;

      case "s":
        var snare = new Audio("files/audio/snare.mp3");
        snare.play();
        this.style.borderColor = "turquoise";
        break;

      case "d":
        var tom1 = new Audio("files/audio/tom-1.mp3");
        tom1.play();
        this.style.borderColor = "turquoise";
        break;

      case "j":
        var tom2 = new Audio("files/audio/tom-2.mp3");
        tom2.play();
        this.style.borderColor = "turquoise";
        break;

      case "k":
        var tom3 = new Audio("files/audio/tom-3.mp3");
        tom3.play();
        this.style.borderColor = "turquoise";
        break;

      case "l":
        var tom4 = new Audio("files/audio/tom-4.mp3");
        tom4.play();
        this.style.borderColor = "turquoise";
        break;

      default:
        console.log(buttonInnerHTML);

    }
  }

  document.getElementsByClassName("drum")[i].addEventListener("mouseup", clickMouseUp);

  function clickMouseUp() {

    for (var i = 0; i < document.getElementsByClassName("drum").length; i++) {
      this.style.borderColor = "";
    }
  }




}

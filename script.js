window.onload = function () {
  var img = document.querySelector("img");
  var yesButton = document.getElementById("yes");
  var noButton = document.getElementById("no");
  var h1 = document.getElementById("h1");

  var scale = 1;
  var messages = [
    "No????",
    "No, don't do it!",
    "If you say no, I'll be sad",
    "I'll be very sad",
    "I'll be very very very sad",
    "I'll be very very very very sad",
    "Please",
    "Are you sure?",
    "Really sure??",
    "Laura, you are out of your mind ;-;",
    "Don't do that :(((",
    "You are breaking my heart :(",
    "Ok, I'll stop asking...",
    "Just kidding",
    "Please",
    "I'll be very very very sad",
    "Please",
    "No",
    "Last chance for you",
    "You'll be mine hehe",
  ];
  var currentIndex = 0;

  yesButton.addEventListener("click", function () {
    if (this.textContent === "Yes") {
      this.textContent = "Really?";
      img.src = "Yes.png";
    } else if (this.textContent === "Really?") {
      this.textContent = "Hooray!";
      img.src = "Yes2.png";
    } else if (this.textContent === "Hooray!") {
      this.textContent = "I love you!";
    } else {
      document.body.innerHTML =
        "<div style='text-align: center; color: black;'><img src='Yes3.gif' alt='Love Image' style='max-width: 100%; height: auto;'><h1>I love you sm :D</h1></div>";
    }
  });

  noButton.addEventListener("click", function () {
    // Update "No" button text
    this.textContent = messages[currentIndex];
    currentIndex = (currentIndex + 1) % messages.length;

    // Resize "Yes" button
    var newWidth =
      parseInt(yesButton.style.width || yesButton.offsetWidth) + 40; // Increase by 40px
    var newHeight =
      parseInt(yesButton.style.height || yesButton.offsetHeight) + 25; // Increase by 25px
    yesButton.style.width = newWidth + "px";
    yesButton.style.height = newHeight + "px";

    // Resize button text
    var fontSize = parseInt(window.getComputedStyle(yesButton).fontSize) + 2; // Increase by 2px
    yesButton.style.fontSize = fontSize + "px";

    // Check if "Yes" button occupies 75% of the screen
    if (
      newWidth >= window.innerWidth * 0.75 ||
      newHeight >= window.innerHeight * 0.75
    ) {
      yesButton.style.width = "100vw";
      yesButton.style.height = "100vh";
      yesButton.style.fontSize = "5em"; // Adjust font size for full screen
      yesButton.textContent = "Yes";
      noButton.style.display = "none";
      img.style.display = "none";
      h1.style.display = "none";

      // Change content on "Yes" button click when full screen
      yesButton.onclick = function () {
        document.body.innerHTML =
          "<div style='text-align: center; color: black;'><h1>I love you :D (don't overcram tho):<</h1><img src='Yes2.png' alt='Love Image' style='max-width: 100%; height: auto;'></div>";
      };
    }
  });
};

window.addEventListener("load", function () {
  var loader = document.getElementById("preloader");


  setTimeout(function () {
    loader.classList.add("hidden");
    setTimeout(function () {
      loader.style.display = "none";
    }, 2000);
  }, 4250);
});


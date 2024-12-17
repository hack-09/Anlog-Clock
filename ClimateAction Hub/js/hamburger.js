// hamburger
    document.addEventListener('DOMContentLoaded', function () {
      const menuBtn = document.querySelector('.hamburger-menu');
      const menu = document.querySelector('.menu');

      menuBtn.addEventListener('click', function () {
        menu.classList.toggle('expanded');
      });
    });

//  Buttons - Sharing content to other platform
    document.querySelector(".facebook-share").addEventListener("click", function() {
      const url = "http://127.0.0.1:3000/home.html";
      const facebookShareURL = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
      window.open(facebookShareURL, "_blank");
    });
  
    document.querySelector(".twitter-share").addEventListener("click", function() {
      const url = "http://127.0.0.1:3000/home.html";
      const twitterShareURL = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`;
      window.open(twitterShareURL, "_blank");
    });
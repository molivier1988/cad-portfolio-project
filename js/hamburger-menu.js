const menu = document.querySelector(".menu");
      const hamburger = document.querySelector(".hamburger");
      const menuIcon = document.querySelector(".fa-bars");
      const closeIcon = document.querySelector(".fa-xmark");

      function toggleMenu() {
        if (menu.classList.contains("showMenu")) {
          menu.classList.remove("showMenu");
          closeIcon.style.display = "none";
          menuIcon.style.display = "block";
        } else {
          menu.classList.add("showMenu");
          closeIcon.style.display = "block";
          menuIcon.style.display = "none";
        }
      }

      hamburger.addEventListener("click", toggleMenu);
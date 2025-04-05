// ----------Scramble------------
$(document).ready(function () {
    var $scramble = $(".scramble");
    $scramble.scramble(3000, 20, "alphabet", true);
  });
  
  // ----------scrambleEnd--------------
  var tl = gsap.timeline();
  
  tl.to(".Loading", {
    opacity: 0,
    delay: 2.5,
  })
    .to(".loader", {
      opacity: 0,
      duration: 1,
      ease: "Expo.easeInOut",
    })
    .to(".loader", {
      y: "-100%",
      duration: 1,
    }, "up")
    .call(() => {
      window.location.href = "homepage.html";
    });
  
  // ----------Page button redirection ----------
  document.addEventListener("DOMContentLoaded", () => {
    // From homepage.html → login.html
    const getStartedBtn = document.getElementById("getStartedBtn");
    const loginBtn = document.getElementById("loginBtn");
  
    if (getStartedBtn) {
      getStartedBtn.addEventListener("click", () => {
        window.location.href = "login.html";
      });
    }
  
    if (loginBtn && window.location.pathname.includes("homepage.html")) {
      loginBtn.addEventListener("click", () => {
        window.location.href = "login.html";
      });
    }
  
    // From login.html → dashboard.html
    const loginSubmitBtn = document.getElementById("loginSubmitBtn");
    if (loginSubmitBtn) {
      loginSubmitBtn.addEventListener("click", () => {
        window.location.href = "dashboard.html";
      });
    }
  
    // From dashboard.html → dates.html (calendar)
    const calendarBtn = document.getElementById("calendar-btn");
    if (calendarBtn) {
      calendarBtn.addEventListener("click", () => {
        window.location.href = "dates.html";
      });
    }
  
    // From dashboard.html → to-do.html (to-do button)
    const todosBtn = document.getElementById("todos-btn");
    if (todosBtn) {
      todosBtn.addEventListener("click", () => {
        window.location.href = "to-do.html";
      });
    }
  });
  

  document.addEventListener("DOMContentLoaded", () => {
    const preloader = document.getElementById("preloader");

 
    setTimeout(() => {
      preloader.style.opacity = "0";
      preloader.style.transition = "opacity 0.5s ease";

      setTimeout(() => {
        preloader.style.display = "none";
      }, 500);
    }, 1500); 
  });

 


  const boxes = document.querySelectorAll('.services-box');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      } else {
        entry.target.classList.remove('active'); // ← Remove this to keep animation 1-time
      }
    });
  }, {
    threshold: 0.4
  });

  boxes.forEach(box => {
    observer.observe(box);
  });


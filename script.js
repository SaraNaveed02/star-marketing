
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

 

        const observerOptions = {
            threshold: 0.3,
            rootMargin: '-50px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        entry.target.classList.add('active');
                    }, index * 200);
                }
            });
        }, observerOptions);

        const serviceBoxes = document.querySelectorAll('.services-box');
        serviceBoxes.forEach(box => {
            observer.observe(box);
        });

        document.documentElement.style.scrollBehavior = 'smooth';

        window.addEventListener('scroll', () => {
            const scrolled = window.pageYOffset;
            const parallax = document.querySelector('.services-header');
            const speed = scrolled * 0.5;
            
            if (parallax) {
                parallax.style.transform = `translateY(${speed}px)`;
            }
        });

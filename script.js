document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const navMenu = document.getElementById("nav-menu");

  if (hamburger && navMenu) {
      // Event untuk membuka navbar
      hamburger.addEventListener("click", function () {
          navMenu.classList.toggle("show");
      });

      // Event untuk menutup navbar saat klik di luar
      document.addEventListener("click", function (event) {
          const isClickInsideNav = navMenu.contains(event.target);
          const isClickInsideHamburger = hamburger.contains(event.target);

          if (!isClickInsideNav && !isClickInsideHamburger) {
              navMenu.classList.remove("show");
          }
      });
  }

  // Lazy Load untuk gambar
  const images = document.querySelectorAll(".image-card img");
  images.forEach(img => {
      img.setAttribute("loading", "lazy");
  });

  // Modal untuk zoom gambar
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImg");
  const closeBtn = document.querySelector(".close"); // Tombol "X" untuk menutup modal

  function openModal(imgSrc) {
      if (modal && modalImg) {
          modal.style.display = "flex";
          modalImg.src = imgSrc;
      }
  }

  function closeModal() {
      if (modal) {
          modal.style.display = "none";
      }
  }

  // Tambahkan event listener ke semua gambar agar bisa diperbesar
  document.querySelectorAll(".image-card img").forEach(img => {
      img.addEventListener("click", function () {
          openModal(this.src);
      });
  });

  // Tutup modal saat diklik di luar gambar
  if (modal) {
      modal.addEventListener("click", function (event) {
          if (event.target === modal) {
              closeModal();
          }
      });
  }

  // **Tambahkan event listener untuk tombol close (X)**
  if (closeBtn) {
      closeBtn.addEventListener("click", function () {
          closeModal();
      });
  }

  // Fungsi easing (easeInOutQuad)
  function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
  }

  function smoothScroll(targetSelector, duration = 1000) {
      const targetElement = document.querySelector(targetSelector);
      if (!targetElement) return;
      const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const startPosition = window.pageYOffset;
      const distance = targetPosition - startPosition;
      let startTime = null;

      function animation(currentTime) {
          if (startTime === null) startTime = currentTime;
          const timeElapsed = currentTime - startTime;
          const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
          window.scrollTo(0, run);
          if (timeElapsed < duration) {
              requestAnimationFrame(animation);
          } else {
              window.scrollTo(0, targetPosition);
          }
      }

      requestAnimationFrame(animation);
  }

  // Tambahkan event listener untuk setiap link dengan href mulai dari "#"
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
          e.preventDefault();
          smoothScroll(this.getAttribute('href'), 1200);
      });
  });

});

// Open modal and display the clicked image
function openModal(imgElement) {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");

    if (modal && modalImg) {
        modal.style.display = "flex";
        modalImg.src = imgElement.src;
        modalImg.style.display = "block"; // Pastikan gambar tampil
    }
}

// Close modal when clicking the close button
function closeModal() {
    let modal = document.getElementById("imageModal");
    let modalImg = document.getElementById("modalImg");

    if (modal && modalImg) {
        modal.style.display = "none";
        modalImg.style.display = "none"; // Sembunyikan gambar setelah modal ditutup
    }
}

// Close modal when clicking outside the image
document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("imageModal");
    if (modal) {
        modal.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }
});


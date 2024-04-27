// Smooth scrolling when clicking on the "Back to top" div
document.querySelector('.smooth').addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    const targetOffsetTop = target.offsetTop;
  
    window.scrollTo({
      top: targetOffsetTop,
      behavior: 'smooth'
    });
  });
  
  // Show the "Back to top" div when scrolling
  window.addEventListener('scroll', function() {
    const backToTop = document.querySelector('.back-to-top');
    if (window.scrollY > 500) {
      backToTop.classList.add('show');
    } else {
      backToTop.classList.remove('show');
    }
  });
  
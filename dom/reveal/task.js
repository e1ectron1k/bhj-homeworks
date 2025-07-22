document.addEventListener('DOMContentLoaded', function() {
  const reveals = document.querySelectorAll('.reveal');
  
  function isVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top < window.innerHeight && 
      rect.bottom > 0
    );
  }
  
  function handleScroll() {
    reveals.forEach(reveal => {
      if (isVisible(reveal)) {
        reveal.classList.add('reveal_active');
      } else {
        reveal.classList.remove('reveal_active');
      }
    });
  }
  
  handleScroll();
  
  window.addEventListener('scroll', handleScroll);
});

document.addEventListener('DOMContentLoaded', () => {

  function initRotator(rotator) {
    const cases = rotator.querySelectorAll('.rotator__case');
    let currentIndex = 0;
    
    function rotate() {
      cases[currentIndex].classList.remove('rotator__case_active');
      
      currentIndex = (currentIndex + 1) % cases.length;
      
      const nextCase = cases[currentIndex];
      
      nextCase.classList.add('rotator__case_active');
      
      if (nextCase.dataset.color) {
        nextCase.style.color = nextCase.dataset.color;
      }
      
      const speed = nextCase.dataset.speed ? parseInt(nextCase.dataset.speed) : 1000;
      
      setTimeout(rotate, speed);
    }
    
    setTimeout(rotate, 1000);
  }

  const rotators = document.querySelectorAll('.rotator');
  rotators.forEach(initRotator);
});

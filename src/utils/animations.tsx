export const setupRevealAnimations = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    revealElements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      }
    });
  };
  
  window.addEventListener('scroll', reveal);
  window.addEventListener('load', reveal);
  
  // Initial check
  reveal();
  
  return () => {
    window.removeEventListener('scroll', reveal);
    window.removeEventListener('load', reveal);
  };
};

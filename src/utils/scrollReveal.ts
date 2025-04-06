
// Function to handle reveal animations when elements come into view
export const initScrollReveal = () => {
  const revealElements = document.querySelectorAll('.reveal');
  
  const reveal = () => {
    revealElements.forEach((element) => {
      const windowHeight = window.innerHeight;
      const elementTop = element.getBoundingClientRect().top;
      const elementVisible = 150;
      
      if (elementTop < windowHeight - elementVisible) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  };
  
  // Initialize
  window.addEventListener('scroll', reveal);
  
  // Trigger once on load to check for elements already in view
  reveal();
  
  return () => {
    window.removeEventListener('scroll', reveal);
  };
};

// Helper function to apply animation to elements with delay
export const applyDelayedAnimation = (elements: NodeListOf<Element>, baseDelay: number = 0.1) => {
  elements.forEach((element, index) => {
    if (element instanceof HTMLElement) {
      element.style.animationDelay = `${baseDelay + (index * 0.1)}s`;
    }
  });
};

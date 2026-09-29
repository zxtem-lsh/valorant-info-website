function scrollDown() {
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth'
  });
}


function scrollToHalfwayDown() {
  const heroSectionBottom = document.querySelector('.hero-section').offsetHeight;
  const halfDiamondHeight = 0; 
  window.scrollTo({
    top: heroSectionBottom - halfDiamondHeight,
    behavior: 'smooth'
  });
}


document.addEventListener("DOMContentLoaded", function () {
    const scrollImages = document.querySelector(".scroll-images");
    const cards = document.querySelectorAll(".child");
    const cardWidth = cards[0].offsetWidth + 20; // Including margin if any
    const totalCards = cards.length-1; //temporary fix because of 9th displaying offset
    let currentCardIndex = 0;
  
    // Update button states based on the current card index
    function updateButtonState() {
      document.getElementById("leftArrow").disabled = currentCardIndex === 0;
      document.getElementById("rightArrow").disabled = currentCardIndex === totalCards - 1;
    }
  
    // Scroll to the specified card index
    function scrollToCard(index) {
      const cardWidth = document.querySelector('.child').offsetWidth; // Get the actual card width
      const gapWidth = 0.2 * window.innerWidth; // Convert 20vw to pixels
      const cardWidthWithGap = cardWidth + gapWidth; // Total space needed for each card + gap
      
      // Adjust the scroll position by multiplying the index by card width + gap
      scrollImages.scrollTo({
          left: index * cardWidthWithGap,
          behavior: "smooth"
      });
  
      currentCardIndex = index;
      updateButtonState();
  }
  
  
    document.getElementById("leftArrow").addEventListener("click", () => {
      if (currentCardIndex > 0) {
        scrollToCard(currentCardIndex - 1);
      }
    });
  
    document.getElementById("rightArrow").addEventListener("click", () => {
      if (currentCardIndex < totalCards - 1) {
        scrollToCard(currentCardIndex + 1);
      }
    });
  
    // Initial button state check
    updateButtonState();
  });

  
function navigateToPage(option) {
    switch (option) {
      case 1:
        window.location.href = "https://github.com/masonvoff/Website-Files"; 
        break;
      case 2:
        window.location.href = "https://github.com/masonvoff/Protein-interaction"; 
        break;
      case 3:
        window.location.href = "https://github.com/masonvoff"; 
        break;
      case 4:
        window.location.href = "https://github.com/masonvoff"; 
        break;
      default:
        console.error("Invalid option passed to navigateToPage");
    }
  }
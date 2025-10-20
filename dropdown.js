function toggleDropdown(event) {
  event.stopPropagation(); // Prevent the click from bubbling to window
  
  const dropdown = document.getElementById("dropdown");
  const svg = event.currentTarget.querySelector("svg");

  const isOpen = dropdown.classList.toggle("show");

  // Rotate the arrow depending on dropdown state
  svg.style.transition = "transform 0.2s ease";
  svg.style.transform = isOpen ? "rotate(180deg)" : "rotate(0deg)";
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.closest(".dropdown-button")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    for (let i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }

    // Reset all arrows to normal position
    const arrows = document.querySelectorAll(".dropdown-button svg");
    arrows.forEach(svg => {
      svg.style.transform = "rotate(0deg)";
    });
  }
};

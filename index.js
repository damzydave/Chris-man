// Toggle extra info on Home section
document.getElementById("learnMoreBtn").addEventListener("click", function() {
  const extraInfo = document.getElementById("extraInfo");
  if (extraInfo.style.display === "none") {
    extraInfo.style.display = "block";
    this.textContent = "Show Less";
  } else {
    extraInfo.style.display = "none";
    this.textContent = "Learn More";
  }
});








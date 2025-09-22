// Emergency call simulation
function callEmergency() {
  alert("Dialing emergency number...");
}

// Placeholder functions
function findNearbyHospitals() {
  window.open("https://www.google.com/maps/search/nearby+hospitals/", "_blank");
}

function searchProducts() {
  const query = document.getElementById("searchQuery").value;
  if(query){
    window.open(`https://www.amazon.in/s?k=${encodeURIComponent(query)}+first+aid`, "_blank");
  } else {
    alert("Please enter a product name.");
  }
}

function startListening() {
  const status = document.getElementById("voiceStatus");
  if (!('webkitSpeechRecognition' in window)) {
    alert("Voice recognition not supported.");
    return;
  }

  const recognition = new webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.start();
  status.textContent = "Status: Listening...";

  recognition.onresult = (event) => {
    const command = event.results[0][0].transcript.toLowerCase();
    status.textContent = "You said: " + command;

    if(command.includes("hospital")) findNearbyHospitals();
    if(command.includes("burns")) document.querySelectorAll(".accordion-btn")[0].click();
  };

  recognition.onend = () => status.textContent = "Status: Idle";
}





// Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll(".accordion-btn");

  accordions.forEach((btn) => {
    btn.addEventListener("click", () => {
      const panel = btn.nextElementSibling;
      btn.classList.toggle("active");

      if (panel.style.maxHeight) {
        panel.style.maxHeight = null;
        panel.classList.remove("open");
      } else {
        panel.style.maxHeight = panel.scrollHeight + "px";
        panel.classList.add("open");
      }
    });
  });
});

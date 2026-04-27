// JavaScript interactivity for the final project website

const travelTips = [
  "Visit the Bund near sunset so you can see both daytime architecture and night lights.",
  "Use the metro for most trips. It is usually faster than taking a taxi across busy downtown areas.",
  "Save the Chinese names of destinations before you go. It helps with maps and ride-hailing apps.",
  "Plan Yu Garden in the morning because the area can become crowded later in the day.",
  "For food, try one snack meal and one sit-down Shanghainese dinner to get a balanced experience."
];

const tipButton = document.getElementById("tipButton");
const tipText = document.getElementById("tipText");

if (tipButton && tipText) {
  tipButton.addEventListener("click", function () {
    const randomIndex = Math.floor(Math.random() * travelTips.length);
    tipText.textContent = travelTips[randomIndex];
  });
}

const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
  themeToggle.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
  });
}

const budgetButton = document.getElementById("budgetButton");
const budgetNote = document.getElementById("budgetNote");

if (budgetButton && budgetNote) {
  budgetButton.addEventListener("click", function () {
    budgetNote.textContent = "Budget tip: keep one flexible day. Weather and crowds can change the best route quickly.";
  });
}

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

if (contactForm && formMessage) {
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameInput = document.getElementById("name");
    const userName = nameInput.value.trim() || "traveler";

    formMessage.textContent = `Thank you, ${userName}! Your message has been submitted.`;
    contactForm.reset();
  });
}

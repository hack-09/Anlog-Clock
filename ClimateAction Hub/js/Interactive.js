// Carbon Footprint Calculator
const carbonCalculatorForm = document.getElementById('carbonCalculatorForm');
const carbonFootprintResult = document.getElementById('carbonFootprintResult');

carbonCalculatorForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const electricityUsage = parseFloat(document.getElementById('electricity').value);
  const transportationMiles = parseFloat(document.getElementById('transport').value);
  const foodConsumption = parseFloat(document.getElementById('food').value);

  if (isNaN(electricityUsage) || isNaN(transportationMiles) || isNaN(foodConsumption)) {
    carbonFootprintResult.textContent = 'Please enter valid numerical values.';
  } else {
    const totalCarbonFootprint = electricityUsage + transportationMiles + foodConsumption;
    carbonFootprintResult.textContent = `Your total carbon footprint is: ${totalCarbonFootprint.toFixed(2)} tons CO2eq per month.`;
  }
});

// map------------
const map = L.map('map').setView([30.9, -75.857], 13); // Set initial map view (latitude, longitude, and zoom level)

// Add a tile layer from a map provider (e.g., OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

// Add a marker to the map for a specific location (e.g., a vulnerable area)
const vulnerableArea = L.marker([30.9, 75.857]).addTo(map);
vulnerableArea.bindPopup('This is a vulnerable area.').openPopup(); // Display a popup when the marker is clicked



// Climate Action Quiz-------------
const climateQuizForm = document.getElementById('climateQuizForm');
const quizResult = document.getElementById('quizResult');

climateQuizForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const answers = {
    q1: document.querySelector('input[name="q1"]:checked').value,
    q2: document.querySelector('input[name="q2"]:checked').value,
    q3: document.querySelector('input[name="q3"]:checked').value,
  };

  const correctAnswers = {
    q1: 'a', 
    q2: 'c', 
    q3: 'b', 
  };

  let score = 0;

  for (const question in answers) {
    if (answers[question] === correctAnswers[question]) {
      score++;
    }
  }

  const totalQuestions = Object.keys(correctAnswers).length;

  quizResult.textContent = `You scored ${score} out of ${totalQuestions}!`;
});
